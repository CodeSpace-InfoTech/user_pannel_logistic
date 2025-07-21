import React, { useEffect } from "react";
import { closeDialog } from "../redux/slices/dialogSlice";
import { createLoad, updateLoad } from "../redux/loads";

export const useLoadForm = (dialogueData, isOpen, dispatch) => {
  const initialCargoState = {
    description: '',
    quantity: 0,
    weight: 0,
    dimensions: {
      length: 0,
      width: 0,
      height: 0
    }
  };

  const initialFormState = {
    customer: '',
    pickup: {
      location: { address: '', city: '', state: '', zipCode: '' },
      date: '',
      timeWindow: { start: '', end: '' }
    },
    delivery: {
      location: { address: '', city: '', state: '', zipCode: '' },
      date: '',
      timeWindow: { start: '', end: '' }
    },
    cargo: [initialCargoState],
    equipment: 'dry_van',
    rateType: 'base',
    baseRate: 0,
    fixedRate: { amount: 0, currency: 'USD' },
    notes: ''
  };
  console.log('dialogueData', dialogueData)
 

  const [formData, setFormData] = React.useState(initialFormState);
  const [errors, setErrors] = React.useState({});

  // Reset form data when dialog data changes
useEffect(() => {
  if (dialogueData) {
    // Helper function to format timeWindow
    const formatTimeWindow = (timeWindow) => {
      if (!timeWindow) {
        return { start: '', end: '' };
      }
      // Assuming timeWindow.start and timeWindow.end are ISO strings or time strings
      let start = '';
      let end = '';
      if (timeWindow.start && timeWindow.end) {
        // If already in correct format (e.g., '09:00')
        start = timeWindow.start.includes('T')
          ? new Date(timeWindow.start).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
          : timeWindow.start;
        end = timeWindow.end.includes('T')
          ? new Date(timeWindow.end).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
          : timeWindow.end;
      }
      return { start, end };
    };
    console.log('dialogueData', dialogueData.customer)

    setFormData({
      ...initialFormState,
      ...dialogueData,
      customer: dialogueData.customerData?.name || '', // Ensure customer is set, default to ''

      pickup: {
        ...initialFormState.pickup,
        ...dialogueData.pickup,
        date: dialogueData.pickup?.date ? new Date(dialogueData.pickup.date).toISOString().split('T')[0] : '',
        timeWindow: formatTimeWindow(dialogueData.pickup?.timeWindow)
      },
      delivery: {
        ...initialFormState.delivery,
        ...dialogueData.delivery,
        date: dialogueData.delivery?.date ? new Date(dialogueData.delivery.date).toISOString().split('T')[0] : '',
        timeWindow: formatTimeWindow(dialogueData.delivery?.timeWindow)
      },
      cargo: dialogueData.cargo && dialogueData.cargo.length > 0 ? dialogueData.cargo : [initialCargoState]
    });
  } else {
    setFormData(initialFormState);
  }
}, [dialogueData]);

  // Reset form when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setFormData(initialFormState);
      setErrors({});
    }
  }, [isOpen]);

  const addCargo = () => {
    setFormData({
      ...formData,
      cargo: [...formData.cargo, initialCargoState]
    });
  };

  const removeCargo = (index) => {
    if (formData.cargo.length > 1) {
      setFormData({
        ...formData,
        cargo: formData.cargo.filter((_, i) => i !== index)
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customer) newErrors.customer = 'Customer is required';

    // Pickup validation
    if (!formData.pickup.location.address?.trim()) newErrors['pickup.location.address'] = 'Pickup address is required';
    if (!formData.pickup.location.city?.trim()) newErrors['pickup.location.city'] = 'Pickup city is required';
    if (!formData.pickup.location.state?.trim()) newErrors['pickup.location.state'] = 'Pickup state is required';
    if (!formData.pickup.location.zipCode?.trim()) newErrors['pickup.location.zipCode'] = 'Pickup ZIP code is required';
    if (!formData.pickup.date) newErrors['pickup.date'] = 'Pickup date is required';
    if (!formData.pickup.timeWindow.start || !formData.pickup.timeWindow.end) {
      newErrors['pickup.timeWindow'] = 'Pickup time window is required';
    } else if (formData.pickup.timeWindow.start >= formData.pickup.timeWindow.end) {
      newErrors['pickup.timeWindow'] = 'End time must be after start time';
    }

    // Delivery validation
    if (!formData.delivery.location.address?.trim()) newErrors['delivery.location.address'] = 'Delivery address is required';
    if (!formData.delivery.location.city?.trim()) newErrors['delivery.location.city'] = 'Delivery city is required';
    if (!formData.delivery.location.state?.trim()) newErrors['delivery.location.state'] = 'Delivery state is required';
    if (!formData.delivery.location.zipCode?.trim()) newErrors['delivery.location.zipCode'] = 'Delivery ZIP code is required';
    if (!formData.delivery.date) newErrors['delivery.date'] = 'Delivery date is required';
    else if (new Date(formData.delivery.date) < new Date(formData.pickup.date)) {
      newErrors['delivery.date'] = 'Delivery date must be after pickup date';
    }
    if (!formData.delivery.timeWindow.start || !formData.delivery.timeWindow.end) {
      newErrors['delivery.timeWindow'] = 'Delivery time window is required';
    } else if (formData.delivery.timeWindow.start >= formData.delivery.timeWindow.end) {
      newErrors['delivery.timeWindow'] = 'End time must be after start time';
    }

    // Cargo validation
    formData.cargo.forEach((cargo, index) => {
      if (!cargo.description?.trim()) newErrors[`cargo[${index}].description`] = `Cargo ${index + 1} description is required`;
      if (!cargo.quantity || cargo.quantity <= 0) newErrors[`cargo[${index}].quantity`] = `Cargo ${index + 1} quantity must be greater than 0`;
      if (!cargo.weight || cargo.weight <= 0) newErrors[`cargo[${index}].weight`] = `Cargo ${index + 1} weight must be greater than 0`;
      ['length', 'width', 'height'].forEach(dim => {
        if (!cargo.dimensions[dim] || cargo.dimensions[dim] <= 0) {
          newErrors[`cargo[${index}].dimensions.${dim}`] = `Cargo ${index + 1} ${dim} must be greater than 0`;
        }
      });
    });

    // Rate validation
    if (formData.rateType === 'base') {
      if (!formData.baseRate || formData.baseRate <= 0) newErrors.baseRate = 'Base rate must be greater than 0';
    } else if (formData.rateType === 'fixed') {
      if (!formData.fixedRate.amount || formData.fixedRate.amount <= 0) {
        newErrors['fixedRate.amount'] = 'Fixed rate amount must be greater than 0';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const { loadNumber, ...formDataWithoutLoadNumber } = formData;
      const payload = {
        ...formDataWithoutLoadNumber,
        pickup: {
          ...formData.pickup,
          date: new Date(formData.pickup.date).toISOString(),
          timeWindow: {
            start: new Date(`${formData.pickup.date} ${formData.pickup.timeWindow.start}`).toISOString(),
            end: new Date(`${formData.pickup.date} ${formData.pickup.timeWindow.end}`).toISOString()
          }
        },
        delivery: {
          ...formData.delivery,
          date: new Date(formData.delivery.date).toISOString(),
          timeWindow: {
            start: new Date(`${formData.delivery.date} ${formData.delivery.timeWindow.start}`).toISOString(),
            end: new Date(`${formData.delivery.date} ${formData.delivery.timeWindow.end}`).toISOString()
          }
        },
        cargo: formData.cargo.map(cargo => ({
          ...cargo,
          quantity: Number(cargo.quantity),
          weight: Number(cargo.weight),
          dimensions: {
            length: Number(cargo.dimensions.length),
            width: Number(cargo.dimensions.width),
            height: Number(cargo.dimensions.height)
          }
        }))
      };



      if (dialogueData) {
        await dispatch(updateLoad({ id: dialogueData._id, loadData: payload }));
      } else {
        await dispatch(createLoad(payload));
      }
      handleClose();
    } catch (error) {
      console.error('Error saving load:', error);
      setErrors({ submit: 'Failed to save load. Please try again.' });
    }
  };

  const handleClose = () => {
    setFormData(initialFormState);
    setErrors({});
    dispatch(closeDialog());
  };

  return { formData, setFormData, errors, addCargo, removeCargo, handleSubmit, handleClose };
};