export const RateDetails = ({ formData, setFormData, errors }) => (
  <>
    <div className="col-md-6 mt-4">
      <label className="form-label fw-semibold">Equipment Type</label>
      <select
        className="form-select"
        value={formData.equipment}
        onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
      >
        <option value="dry_van">Dry Van</option>
        <option value="reefer">Reefer</option>
        <option value="flatbed">Flatbed</option>
      </select>
    </div>
    <div className="col-md-6 mt-4">
      <label className="form-label fw-semibold">Rate Type</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="rateType"
          id="baseRate"
          checked={formData.rateType === 'base'}
          onChange={() => setFormData({ ...formData, rateType: 'base' })}
        />
        <label className="form-check-label" htmlFor="baseRate">Base Rate</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="rateType"
          id="fixedRate"
          checked={formData.rateType === 'fixed'}
          onChange={() => setFormData({ ...formData, rateType: 'fixed' })}
        />
        <label className="form-check-label" htmlFor="fixedRate">Fixed Rate</label>
      </div>
    </div>
    {formData.rateType === 'base' && (
      <div className="col-md-6">
        <label className="form-label">Base Rate</label>
        <input
          type="number"
          className="form-control"
          value={formData.baseRate}
          onChange={(e) => setFormData({ ...formData, baseRate: Number(e.target.value) })}
        />
        {errors.baseRate && <div className="text-danger mt-1">{errors.baseRate}</div>}
      </div>
    )}
    {formData.rateType === 'fixed' && (
      <>
        <div className="col-md-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            value={formData.fixedRate.amount}
            onChange={(e) =>
              setFormData({
                ...formData,
                fixedRate: { ...formData.fixedRate, amount: Number(e.target.value) },
              })
            }
          />
          {errors['fixedRate.amount'] && (
            <div className="text-danger mt-1">{errors['fixedRate.amount']}</div>
          )}
        </div>
        <div className="col-md-3">
          <label className="form-label">Currency</label>
          <select
            className="form-select"
            value={formData.fixedRate.currency}
            onChange={(e) =>
              setFormData({
                ...formData,
                fixedRate: { ...formData.fixedRate, currency: e.target.value },
              })
            }
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </>
    )}
  </>
);