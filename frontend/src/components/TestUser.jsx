import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login, resetAuth } from "../features/auth/authSlice";
import { FaUser } from "react-icons/fa";
import SpinnerWithOverlay from "./SpinnerWithOverlay";

function TestUser({ name, email, password }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.auth);

  const handleClick = () => {
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
    <button class="btn" onClick={handleClick}>
      <FaUser />
      test user {name}
    </button>
  );
}

export default TestUser;
