import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ToastContainer from "./Components/ToastContainer";
import Login from "./pages/Auth/Login";
import User from "./pages/User";
import { useEffect } from "react";
import feather from "feather-icons";
import RecoverAccount from "./pages/Auth/RecoverAccount";

function App() {
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />

      <Routes>
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/user/dashboard" />}
        />
        <Route path="/recover-account" element={!token ? <RecoverAccount /> : <Navigate to="/user/dashboard" />} />
        <Route
          path="/user/*"
          element={token ? <User /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={<Navigate to={token ? "/user/dashboard" : "/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
