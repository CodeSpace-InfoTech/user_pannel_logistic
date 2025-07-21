import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  Chip,
  Box
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { closeDialog } from "../../redux/slices/dialogSlice";
import { getEmployees } from "../../redux/employees";
import { assignLoadsToEmployees } from "../../redux/loads";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AssignLoads = () => {
  const dispatch = useDispatch();
  const { isOpen, dialogueData } = useSelector((state) => state.dialog);
  const { employees } = useSelector(state => state.employees);

  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedEmployees([]);
    }
  }, [isOpen]);

  const validateForm = () => {
    const newErrors = {};
    if (selectedEmployees.length === 0) {
      newErrors.employees = "Please select at least one employee";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClose = () => {
    setSelectedEmployees([]);
    setErrors({});
    dispatch(closeDialog());
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const assignmentData = {
      employeeIds: selectedEmployees.map(emp => emp._id),
      status: "assigned"
    };

    dispatch(assignLoadsToEmployees({ loadId: dialogueData._id, ...assignmentData }))
      .then((response) => {
        console.log("Assignment successful", response);
        handleClose();
      })
      .catch((error) => {
        console.error("Error assigning loads:", error);
      });
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedEmployees(value);
    if (errors.employees) {
      setErrors(prev => ({...prev, employees: ''}));
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        style: {
          borderRadius: "16px",
          padding: "16px",
          minWidth: "650px",
          minHeight: '400px'
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          borderBottom: "1px solid #e0e0e0",
          pb: 2,
        }}
      >
        Assign Load to Employees
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <div className="space-y-4">
          <FormControl fullWidth>
            <Select
              multiple
              value={selectedEmployees}
              onChange={handleChange}
              input={<OutlinedInput placeholder="Select Employees" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value._id} label={value.name} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {employees.map((employee) => (
                <MenuItem
                  key={employee._id}
                  value={employee}
                >
                  {employee.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {errors.employees && (
            <span className="text-danger text-sm mt-1">{errors.employees}</span>
          )}
        </div>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "center",
          gap: 2,
          mt: 2,
          borderTop: "1px solid #e0e0e0",
          pt: 2,
        }}
      >
        <button
          className="btn btn-secondary"
          onClick={handleClose}
          variant="outlined"
          color="secondary"
          sx={{
            borderRadius: "8px",
            minWidth: "120px",
          }}
        >
          Cancel
        </button>
        <button 
          className="btn btn-primary"
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "8px",
            minWidth: "120px",
          }}
        >
          Submit
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default AssignLoads;
