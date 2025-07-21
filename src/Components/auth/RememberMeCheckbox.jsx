import { Link } from "react-router-dom";

const RememberMeCheckbox = ({ checked, onChange }) => (
     <>
    <div className="col-6">
      <div className="checkbox">
        <input
          type="checkbox"
          id="basic_checkbox_1"
          name="rememberMe"
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor="basic_checkbox_1">Remember Me</label>
      </div>
    </div>
    <div className="col-6">
      <div className="fog-pwd text-end">
        <Link to="/recover-account" className="hover-warning">
          <i className="ion ion-locked"></i> Forgot pwd?
        </Link>
        <br />
      </div>
    </div>
  </>
);

export default RememberMeCheckbox;
