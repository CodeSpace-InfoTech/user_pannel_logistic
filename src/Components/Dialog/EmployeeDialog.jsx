import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { closeDialog } from '../../redux/slices/dialogSlice';
import { createEmployee, updateEmployee } from '../../redux/employees';

const EmployeeDialog = () => {
  const dispatch = useDispatch();
  const { isOpen, dialogueData } = useSelector((state) => state.dialog);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [errors, setErrors] = useState({});

  console.log('dialogueData', dialogueData)
  useEffect(() => {
    if (dialogueData) {
      setName(dialogueData.name || '');
      setPhone(dialogueData.phone || '');
      setPosition(dialogueData.position || '');
    }
  }, [dialogueData]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!position.trim()) {
      newErrors.position = 'Position is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClose = () => {
    setName('');
    setPhone('');
    setPosition('');
    setErrors({});
    dispatch(closeDialog());
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

   
  const obj = {
      name,
      phone,
      position
    };
    if (dialogueData?._id) {

    
        console.log('obj', obj)
  
      dispatch(updateEmployee({ id: dialogueData._id, employeeData:obj }))
        .then((response) => {
          console.log(response);
          handleClose();
        })
        .catch((error) => {
          console.error('Error updating employee:', error);
        });
    } else {
       
      dispatch(createEmployee(obj))
          .then((response) => {
            console.log(response);
            handleClose();
          })
          .catch((error) => {
            console.error('Error creating employee:', error);
          });
            }

  };

  const isEdit = dialogueData !== null;

  return (
    <Dialog 
      open={isOpen} 
      onClose={handleClose}
      PaperProps={{
        style: {
          borderRadius: '16px',
          padding: '16px',
          minWidth: '400px'
        }
      }}
    >
      <DialogTitle sx={{ 
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottom: '1px solid #e0e0e0',
        pb: 2
      }}>
        {isEdit ? 'Edit Employee' : 'Add Employee'}
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <div className="space-y-4">
          <div className="form-group">
            <label className="form-label font-medium mb-2 block">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full rounded-lg border p-2 form-control   ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label className="form-label font-medium  mb-2 block">Phone</label>
            <input
              type="tel"
              placeholder="+91 8807682"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full rounded-lg border form-control p-2 ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label className="form-label font-medium mb-2 block">Position</label>
            <input
              type="text"
              placeholder="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className={`w-full rounded-lg border form-control p-2 ${errors.position ? 'border-red-500' : ''}`}
            />
            {errors.position && <span className="text-red-500 text-sm mt-1">{errors.position}</span>}
          </div>
        </div>
      </DialogContent>
      <DialogActions sx={{ 
        justifyContent: 'center',
        gap: 2,
        mt: 2,
        borderTop: '1px solid #e0e0e0',
        pt: 2
      }}>
        <Button 
          onClick={handleClose} 
          variant="outlined"
          color="secondary"
          sx={{ 
            borderRadius: '8px',
            minWidth: '120px'
          }}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          sx={{ 
            borderRadius: '8px',
            minWidth: '120px'
          }}
        >
          {isEdit ? 'Update' : 'Submit'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeeDialog;
