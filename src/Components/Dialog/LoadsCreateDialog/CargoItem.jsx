// Cargo Item Component
export const CargoItem = ({ cargo, index, formData, setFormData, errors, removeCargo }) => (
  <div className="col-12 border p-3 rounded mb-3">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h6 className="mb-0">Cargo Item {index + 1}</h6>
      {formData.cargo.length > 1 && (
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={() => removeCargo(index)}
        >
          Remove
        </button>
      )}
    </div>
    <div className="row g-3">
      <div className="col-md-6">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          value={cargo.description}
          placeholder="Cargo description"
          onChange={(e) =>
            setFormData({
              ...formData,
              cargo: formData.cargo.map((item, i) =>
                i === index ? { ...item, description: e.target.value } : item
              ),
            })
          }
        />
        {errors[`cargo[${index}].description`] && (
          <div className="text-danger mt-1">{errors[`cargo[${index}].description`]}</div>
        )}
      </div>
      <div className="col-md-3">
        <label className="form-label">Quantity</label>
        <input
          type="number"
          className="form-control"
          value={cargo.quantity}
          placeholder="0"
          onChange={(e) =>
            setFormData({
              ...formData,
              cargo: formData.cargo.map((item, i) =>
                i === index ? { ...item, quantity: Number(e.target.value) } : item
              ),
            })
          }
        />
        {errors[`cargo[${index}].quantity`] && (
          <div className="text-danger mt-1">{errors[`cargo[${index}].quantity`]}</div>
        )}
      </div>
      <div className="col-md-3">
        <label className="form-label">Weight (kg)</label>
        <input
          type="number"
          className="form-control"
          value={cargo.weight}
          placeholder="0"
          onChange={(e) =>
            setFormData({
              ...formData,
              cargo: formData.cargo.map((item, i) =>
                i === index ? { ...item, weight: Number(e.target.value) } : item
              ),
            })
          }
        />
        {errors[`cargo[${index}].weight`] && (
          <div className="text-danger mt-1">{errors[`cargo[${index}].weight`]}</div>
        )}
      </div>
      {['length', 'width', 'height'].map((dim, dimIndex) => (
        <div className="col-md-4" key={dimIndex}>
          <label className="form-label">{dim.charAt(0).toUpperCase() + dim.slice(1)} (cm)</label>
          <input
            type="number"
            className="form-control"
            value={cargo.dimensions[dim]}
            onChange={(e) =>
              setFormData({
                ...formData,
                cargo: formData.cargo.map((item, i) =>
                  i === index
                    ? {
                        ...item,
                        dimensions: {
                          ...item.dimensions,
                          [dim]: Number(e.target.value),
                        },
                      }
                    : item
                ),
              })
            }
          />
          {errors[`cargo[${index}].dimensions.${dim}`] && (
            <div className="text-danger mt-1">{errors[`cargo[${index}].dimensions.${dim}`]}</div>
          )}
        </div>
      ))}
    </div>
  </div>
);