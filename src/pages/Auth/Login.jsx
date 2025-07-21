import { useNavigate } from "react-router-dom";
import FormInput from "../../Components/auth/FormInput";
import RememberMeCheckbox from "../../Components/auth/RememberMeCheckbox";
import SubmitButton from "../../Components/auth/SubmitButton";
import { useDispatch } from "react-redux";
import { useLoginForm } from "../../hooks/useLoginForm";
import api from "../../redux/api";
import { toast } from "react-toastify";
import { loginSuccess } from "../../redux/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formData, errors, loading, setLoading, handleChange, validateForm } = useLoginForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await api.post('/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      console.log('response.data.token', response.data.token)
      if (response.data.token) {
        dispatch(loginSuccess({ user: response.data.user, token: response.data.token }));
        toast.success('Login successful!');
        navigate('/user');
      }
    } catch (error) {
      // Error handled by interceptor
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-background">
      <div className="container" style={{ height: "100vh" }}>
        <div className="row align-items-center justify-content-md-center h-p100">
          <div className="col-12">
            <div className="row justify-content-center g-0">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="bg-white rounded10 shadow-lg">
                  <div className="content-top-agile p-20 pb-0">
                    <h2 className="text-primary">Let's Get Started</h2>
                    <p className="mb-0">Sign in to continue.</p>
                  </div>
                  <div className="p-40">
                    <form onSubmit={handleSubmit}>
                      <FormInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        icon="ti-email"
                      />
                      <FormInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                        icon="ti-lock"
                      />
                      <div className="row">
                        <RememberMeCheckbox
                          checked={formData.rememberMe}
                          onChange={handleChange}
                        />
                       
                        <SubmitButton loading={loading} />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;