import axios from "axios";
import { useEffect } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

import { Link } from "react-router-dom";

function Header() {
  // const newPost = {
  //   name: "dasha",
  //   email: "dasha@mail.ru",
  //   password: "dasha",
  // };

  // const sendPostRequest = async () => {
  //   try {
  //     const resp = await axios.post("http://localhost:3000/api/users", newPost);
  //     console.log(resp);
  //   } catch (err) {
  //     // Handle Error Here
  //     //console.error(err);
  //   }
  // };

  // sendPostRequest();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul>
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
      </ul>
    </header>
  );
}

export default Header;
