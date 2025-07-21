import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  
} from "@mui/material";
import feather from "feather-icons";

import { getCustomers } from '../../../redux/customer';

import { LocationInputs } from './LocationInputs';
import { CustomerSelect } from './CustomerSelect';
import { useLoadForm } from '../../../hooks/useLoadForm';
import { RateDetails } from './RateDetails';
import { CargoItem } from './CargoItem';

const LoadsCreateDialog = () => {
  const dispatch = useDispatch();
  const { customers } = useSelector(state => state.customer);
  const { isOpen, dialogueData } = useSelector((state) => state.dialog);
  const isEdit = dialogueData !== null;

  const { formData, setFormData, errors, addCargo, removeCargo, handleSubmit, handleClose } = useLoadForm(dialogueData, isOpen, dispatch);

console.log('formData', formData)

   useEffect(() => {
      feather.replace();
    }, [customers]);
  useEffect(() => {
    dispatch(getCustomers({
      page: 1,
      limit: 10,
      sortBy: "createdAt",
      sortOrder: "desc",
      search: "",
      status: '',
      company: '',
      paymentTerms: '',
      minCredit: '',
      maxCredit: ''
    }));
  }, [dispatch]);

  console.log('formData', formData.cargo)
  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleClose}
      maxWidth="xl"
      PaperProps={{
        style: {
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: '24px',
          borderRadius: 0,
          overflowY: 'auto'
        },
      }}
    >
      <div className="d-flex border-b border-black justify-content-between">
         <DialogTitle
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
         
          pb: 2,
          position: 'relative'
        }}
      >
        {isEdit ? "Edit Load" : "Add Load"}
      </DialogTitle>
        <button
        className="btn btn-outline-primary border-0  rounded-lg  "
        

          aria-label="close"
          onClick={handleClose}
         
        >
          <i className="ti-close"></i>
        </button>
      </div>
     
      <DialogContent sx={{ mt: 2 }}>
        <div className="container bg-white p-4 rounded shadow-sm">
          <form onSubmit={handleSubmit} className="row g-4">
            <CustomerSelect
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              customers={customers}
            />

            <div className="col-12">
              <h5 className="fw-bold border-bottom pb-2">Pickup Details</h5>
            </div>
            <LocationInputs
              formData={formData}
              type="pickup"
              data={formData.pickup}
              setFormData={setFormData}
              errors={errors}
            />

            <div className="col-12 mt-4">
              <h5 className="fw-bold border-bottom pb-2">Delivery Details</h5>
            </div>
            <LocationInputs
              type="delivery"
              data={formData.delivery}
              setFormData={setFormData}
              errors={errors}
            />

            <div className="col-12 mt-4">

              <h5 className="fw-bold border-bottom pb-2">Cargo Details</h5>
            </div>
            { formData.cargo && formData.cargo.length > 0 && formData.cargo.map((cargo, index) => (
              <CargoItem
                key={index}
                cargo={cargo}
                index={index}
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                removeCargo={removeCargo}
              />
            ))}
            <div className="col-12 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={addCargo}
              >
                Add Cargo
              </button>
            </div>

            <RateDetails
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />

            <div className="col-12">
              <label className="form-label">Notes</label>
              <textarea
                rows="3"
                className="form-control"
                placeholder="Additional instructions..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              ></textarea>
            </div>

            <div className="col-12 text-center mt-4">
              <button type="button" onClick={handleClose} className="btn btn-outline-secondary me-2">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {isEdit ? 'Update Load' : 'Create Load'}
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoadsCreateDialog;
