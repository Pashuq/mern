import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { logout, resetAuth } from "../features/auth/authSlice";
import { resetGoal } from "../features/goals/goalSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(resetAuth());
    dispatch(resetGoal());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn btn-hov" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
