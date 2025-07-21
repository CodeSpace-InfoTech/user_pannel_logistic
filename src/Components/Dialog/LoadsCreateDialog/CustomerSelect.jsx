export const CustomerSelect = ({ formData, setFormData, errors, customers }) => (
  <div className="col-12">
    <label className="form-label fw-semibold">Select Customer</label>
    <select
      className="form-select"
      value={formData.customer}
      onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
    >
      <option value="">Choose a customer...</option>
      {customers.map((customer) => (
        <option key={customer._id} value={customer._id}>
          {customer.name}
        </option>
      ))}
    </select>
    {errors.customer && <div className="text-danger mt-1">{errors.customer}</div>}
  </div>
);
