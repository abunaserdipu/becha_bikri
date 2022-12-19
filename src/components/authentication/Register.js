import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  console.log(registerData);
  const onChangeValue = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const submitRegisterData = async (event) => {
    event.preventDefault();
    if (registerData.password === registerData.confirm_password) {
      axios
        .post(
          // `http://localhost/projects/becha_bikri/backend/api/authentication/register.php`,
          "backend/api/authentication/register.php",
          {
            email: registerData.email,
            password: registerData.password,
            confirm_password: registerData.confirm_password,
          }
        )
        .then((res) => console.log(res.data));
    } else {
      <div className="toast show">
        <div className="toast-header">
          <strong className="me-auto bg-danger">Sorry!</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
          ></button>
        </div>
        <div className="toast-body">
          <p>Password not matched!</p>
        </div>
      </div>;
    }
  };
  return (
    <div className="register_background">
      <div className="p-5">
        <form onSubmit={submitRegisterData}>
          <div className="form-group">
            <label className="text-info">
              <strong>Email:</strong>
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={onChangeValue}
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
              name="password"
              onChange={onChangeValue}
              placeholder="your password"
            />
          </div>
          <div className="form-group">
            <label className="text-info">
              <strong>Confirm Password:</strong>
            </label>
            <input
              className="form-control"
              type="password"
              name="confirm_password"
              onChange={onChangeValue}
              placeholder="confirm your password"
            />
          </div>
          <input type="submit" className="btn btn-info my-2" value="Register" />
        </form>
        <p>
          Already registered? <Link to="/checkout/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
