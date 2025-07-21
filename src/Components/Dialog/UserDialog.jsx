import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { closeDialog } from "../../redux/slices/dialogSlice";

import { createUser, updateUser } from "../../redux/user";

const UserDialog = () => {
  const dispatch = useDispatch();
  const { isOpen, dialogueData } = useSelector((state) => state.dialog);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (dialogueData) {
      setFormData({
        name: dialogueData.name || "",
        email: dialogueData.email || "",
      });
    }
  }, [dialogueData])

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
    });
    setErrors({});
    dispatch(closeDialog());
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const userData = {
      ...formData
    };

    if (dialogueData?._id) {
      dispatch(updateUser({ id: dialogueData._id, userData }))
        .then((response) => {
          console.log("response" , response);
          handleClose();
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });
    } else {
      dispatch(createUser(userData))
        .then((response) => {
          console.log(response);
          handleClose();
        })
        .catch((error) => {
          console.error("Error creating user:", error);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const isEdit = dialogueData !== null;

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        style: {
          borderRadius: "16px",
          padding: "16px",
          minWidth: "400px",
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
        {isEdit ? "Edit User" : "Add User"}
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <div className="space-y-4">
          <div className="form-group">
            <label className="form-label font-medium mb-2 block">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full rounded-lg border p-2 border-black form-control ${
                errors.name ? "border-danger" : ""
              }`}
            />
            {errors.name && (
              <span className="text-danger text-sm mt-1">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label font-medium mb-2 block">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-lg border p-2 border-black form-control ${
                errors.email ? "border-danger" : ""
              }`}
            />
            {errors.email && (
              <span className="text-danger text-sm mt-1">{errors.email}</span>
            )}
          </div>
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
        <Button
          onClick={handleClose}
          variant="outlined"
          color="secondary"
          sx={{
            borderRadius: "8px",
            minWidth: "120px",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "8px",
            minWidth: "120px",
          }}
        >
          {isEdit ? "Update" : "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDialog;
