import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { login, resetAuth } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner";
import { FaSignInAlt } from "react-icons/fa";
import TestUser from "../../components/TestUser";
import { testUsers } from "../../configs/testUsersConfig";
import SpinnerWithOverlay from "../../components/SpinnerWithOverlay";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
    dispatch(resetAuth());

    if (isLoading) {
      return <SpinnerWithOverlay />;
    }
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p>login and start setiing goals</p>

        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={email}
                placeholder={"Enter your email"}
                onChange={onChange}
                autoComplete={"off"}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                value={password}
                placeholder={"Enter  password"}
                onChange={onChange}
                autoComplete={"off"}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Submit
              </button>
            </div>
          </form>
        </section>

        <p className="testusers-title">you can use test users</p>

        <div className="testusers">
          {testUsers.map((user) => (
            <TestUser {...user} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Login;
