import axios from "axios";

const API_URL = "/api/users/";
const HOST = "https://goalssetter.onrender.com";

// Register user
const register = async (userData) => {
  const response = await axios.post(HOST + API_URL, userData, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
