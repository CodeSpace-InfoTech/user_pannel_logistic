import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { closeDialog } from "../../redux/slices/dialogSlice";
import { createCustomer, updateCustomer } from "../../redux/customer";

const PAYMENT_TERMS_OPTIONS = ['NET30', 'NET15', 'NET7', 'Due on Receipt'];

const CustomerDialog = () => {
  const dispatch = useDispatch();
  const { isOpen, dialogueData } = useSelector((state) => state.dialog);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
    taxId: "",
    paymentTerms: "NET15",
    creditLimit: 50000,
    status: "active",
    notes: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (dialogueData) {
      setFormData({
        name: dialogueData.name || "",
        company: dialogueData.company || "",
        email: dialogueData.email || "",
        phone: dialogueData.phone || "",
        address: {
          street: dialogueData.address?.street || "",
          city: dialogueData.address?.city || "",
          state: dialogueData.address?.state || "",
          zipCode: dialogueData.address?.zipCode || "",
          country: dialogueData.address?.country || "",
        },
        taxId: dialogueData.taxId || "",
        paymentTerms: dialogueData.paymentTerms || "NET15",
        creditLimit: dialogueData.creditLimit || 50000,
        status: dialogueData.status || "active",
        notes: dialogueData.notes || "",
      });
    }
  }, [dialogueData]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.address.street.trim())
      newErrors.street = "Street is required";
    if (!formData.address.city.trim()) newErrors.city = "City is required";
    if (!formData.address.state.trim()) newErrors.state = "State is required";
    if (!formData.address.zipCode.trim())
      newErrors.zipCode = "Zip Code is required";
    if (!formData.address.country.trim())
      newErrors.country = "Country is required";

    if (!PAYMENT_TERMS_OPTIONS.includes(formData.paymentTerms)) {
      newErrors.paymentTerms = "Invalid payment terms selected";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClose = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      },
      taxId: "",
      paymentTerms: "NET15",
      creditLimit: 50000,
      status: "active",
      notes: "",
    });
    setErrors({});
    dispatch(closeDialog());
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const customerData = {
      ...formData,
      address: {
        street: formData.address.street,
        city: formData.address.city,
        state: formData.address.state,
        zipCode: formData.address.zipCode,
        country: formData.address.country,
      },
    };

    if (dialogueData?._id) {
      dispatch(updateCustomer({ id: dialogueData._id, customerData }))
        .then((response) => {
          console.log(response);
          handleClose();
        })
        .catch((error) => {
          console.error("Error updating customer:", error);
        });
    } else {
      dispatch(createCustomer(customerData))
        .then((response) => {
          console.log(response);
          handleClose();
        })
        .catch((error) => {
          console.error("Error creating customer:", error);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
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
          minWidth: "600px",
          maxWidth: "800px",
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
        {isEdit ? "Edit Customer" : "Add Customer"}
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <div className="space-y-4">
          <div className="row">
            <div className="col-6">
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
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="form-label font-medium mb-2 block">Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full rounded-lg border p-2 border-black form-control ${
                    errors.company ? "border-danger" : ""
                  }`}
                />
                {errors.company && (
                  <span className="text-danger text-sm mt-1">{errors.company}</span>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
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
            <div className="col-6">
              <div className="form-group">
                <label className="form-label font-medium mb-2 block">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 8807682"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full rounded-lg border border-black form-control p-2 ${
                    errors.phone ? "border-danger" : ""
                  }`}
                />
                {errors.phone && (
                  <span className="text-danger text-sm mt-1">{errors.phone}</span>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label font-medium mb-2 block">Street</label>
            <input
              type="text"
              name="address.street"
              placeholder="Street Address"
              value={formData.address.street}
              onChange={handleChange}
              className={`w-full rounded-lg border border-black form-control p-2 ${
                errors.street ? "border-danger" : ""
              }`}
            />
            {errors.street && (
              <span className="text-danger text-sm mt-1">{errors.street}</span>
            )}
          </div>

          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label className="form-label font-medium mb-2 block">City</label>
                <input
                  type="text"
                  name="address.city"
                  placeholder="City"
                  value={formData.address.city}
                  onChange={handleChange}
                  className={`w-full rounded-lg border border-black form-control p-2 ${
                    errors.city ? "border-danger" : ""
                  }`}
                />
                {errors.city && (
                  <span className="text-danger text-sm mt-1">{errors.city}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="form-label font-medium mb-2 block">State</label>
                <input
                  type="text"
                  name="address.state"
                  placeholder="State"
                  value={formData.address.state}
                  onChange={handleChange}
                  className={`w-full rounded-lg border border-black form-control p-2 ${
                    errors.state ? "border-danger" : ""
                  }`}
                />
                {errors.state && (
                  <span className="text-danger text-sm mt-1">{errors.state}</span>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label className="form-label font-medium mb-2 block">Zip Code</label>
                <input
                  type="text"
                  name="address.zipCode"
                  placeholder="Zip Code"
                  value={formData.address.zipCode}
                  onChange={handleChange}
                  className={`w-full rounded-lg border border-black form-control p-2 ${
                    errors.zipCode ? "border-danger" : ""
                  }`}
                />
                {errors.zipCode && (
                  <span className="text-danger text-sm mt-1">{errors.zipCode}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="form-label font-medium mb-2 block">Country</label>
                <input
                  type="text"
                  name="address.country"
                  placeholder="Country"
                  value={formData.address.country}
                  onChange={handleChange}
                  className={`w-full rounded-lg border border-black form-control p-2 ${
                    errors.country ? "border-danger" : ""
                  }`}
                />
                {errors.country && (
                  <span className="text-danger text-sm mt-1">{errors.country}</span>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label className="form-label font-medium mb-2 block">Tax ID</label>
                <input
                  type="text"
                  name="taxId"
                  placeholder="Tax ID"
                  value={formData.taxId}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-black form-control p-2"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="form-label font-medium mb-2 block">Payment Terms</label>
                <FormControl fullWidth error={!!errors.paymentTerms}>
                  <Select
                    name="paymentTerms"
                    value={formData.paymentTerms}
                    onChange={handleChange}
                    className="rounded-lg border border-black"
                  >
                    {PAYMENT_TERMS_OPTIONS.map((term) => (
                      <MenuItem key={term} value={term}>
                        {term}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.paymentTerms && (
                    <span className="text-danger text-sm mt-1">{errors.paymentTerms}</span>
                  )}
                </FormControl>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label font-medium mb-2 block">Notes</label>
            <textarea
              name="notes"
              placeholder="Additional Notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full rounded-lg border border-black form-control p-2"
              rows={4}
              style={{ resize: "vertical" }}
            />
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
        <button
        className="btn btn-secondary "

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
          {isEdit ? "Update" : "Submit"}
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomerDialog;
