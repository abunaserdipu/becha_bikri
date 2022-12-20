import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;
  console.log(product);
  const onChangeValue = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const onSubmitValue = async (event) => {
    event.preventDefault();
    try {
      axios
        .post(
          // "http://localhost/projects/becha_bikri/backend/api/authentication/login.php",
          "backend/api/authentication/login.php",
          { email: loginData.email, password: loginData.password }
        )
        .then((res) => {
          if (res.data.success !== false) {
            navigate("/checkout/order", { state: product });
          }
        });
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className="login_background">
      <div className="p-5">
        <form onSubmit={onSubmitValue}>
          <div className="form-group">
            <label className="text-info">
              <strong>Email:</strong>
            </label>
            <input
              className="form-control"
              type="email"
              onChange={onChangeValue}
              name="email"
              placeholder="your email"
            />
          </div>
          <div className="form-group">
            <label className="text-info">
              <strong>Password:</strong>
            </label>
            <input
              className="form-control"
              type="password"
              onChange={onChangeValue}
              name="password"
              placeholder="your password"
            />
          </div>
          <input type="submit" className="btn btn-info my-2" value="Login" />
        </form>
        <p>
          Don't have account? <Link to="/checkout/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
