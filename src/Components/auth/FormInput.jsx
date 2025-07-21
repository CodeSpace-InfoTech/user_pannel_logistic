const FormInput = ({ type, name, placeholder, value, onChange, error, icon, ...extra }) => (
  <div className="form-group">
    <div className="input-group mb-3">
      {icon && <span className="input-group-text bg-transparent">
        <i className={icon}></i>
      </span>}
    
      <input
        type={type}
        name={name}
        className={`form-control ps-15 bg-transparent ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...extra}
      />
    </div>
    {error && <div className="text-danger">{error}</div>}
  </div>
);

export default FormInput