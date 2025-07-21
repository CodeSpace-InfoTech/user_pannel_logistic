const SubmitButton = ({ loading }) => (
  <div className="col-12 text-center">
    <button
      type="submit"
      className="btn btn-danger mt-10"
      disabled={loading}
    >
      {loading ? 'SIGNING IN...' : 'SIGN IN'}
    </button>
  </div>
);

export default SubmitButton;