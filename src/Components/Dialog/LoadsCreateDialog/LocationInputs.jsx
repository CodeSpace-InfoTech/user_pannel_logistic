export const LocationInputs = ({ type, data, setFormData, errors ,formData}) =>{
  

  console.log('type', type)
  console.log('data', data)
  console.log('formData', formData)
  console.log('errors', errors)
  return (

 
  <>
    {['address', 'city', 'state', 'zipCode'].map((field, idx) => (
      <div className="col-md-6" key={idx}>
        <label className="form-label text-capitalize">{field}</label>
        <input
          type="text"
          className="form-control"
          placeholder={`Enter ${field}`}
          value={data.location[field]}
          onChange={(e) =>
            setFormData({
              ...formData,
              [type]: {
                ...formData[type],
                location: {
                  ...formData[type].location,
                  [field]: e.target.value,
                },
              },
            })
          }
        />
        {errors[`${type}.${field}`] && (
          <div className="text-danger mt-1">{errors[`${type}.${field}`]}</div>
        )}
      </div>
    ))}
    <div className="col-md-6">
      <label className="form-label">{type} Date</label>
      <input
        type="date"
        className="form-control"
        value={data.date}
        onChange={(e) =>
          setFormData({
            ...formData,
            [type]: { ...data, date: e.target.value },
          })
        }
      />
      {errors[`${type}.date`] && <div className="text-danger mt-1">{errors[`${type}.date`]}</div>}
    </div>
    <div className="col-md-6">
      <label className="form-label">{type} Time Window</label>
      <div className="d-flex gap-2">
        <input
          type="time"
          className="form-control"
          value={data.timeWindow.start}
          onChange={(e) =>
            setFormData({
              ...formData,
              [type]: {
                ...data,
                timeWindow: {
                  ...data.timeWindow,
                  start: e.target.value,
                },
              },
            })
          }
        />
        <input
          type="time"
          className="form-control"
          value={data.timeWindow.end}
          onChange={(e) =>
            setFormData({
              ...formData,
              [type]: {
                ...data,
                timeWindow: {
                  ...data.timeWindow,
                  end: e.target.value,
                },
              },
            })
          }
        />
      </div>
      {errors[`${type}.timeWindow`] && (
        <div className="text-danger mt-1">{errors[`${type}.timeWindow`]}</div>
      )}
    </div>
  </>
)};