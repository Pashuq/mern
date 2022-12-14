import axios from "axios";

const API_URL = "/api/goals";

//create goal
const createGoal = async (userData, token) => {
  const response = await axios.post(
    "http://localhost:3000" + API_URL,
    userData,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

//read goals
const getGoals = async (token) => {
  const response = await axios.get("http://localhost:3000" + API_URL, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

//update goal
const updateGoal = async (id, token) => {};

//delete goal
const deleteGoal = async (id, token) => {};

const goalService = {
  createGoal,
  getGoals,
  updateGoal,
  deleteGoal,
};

export default goalService;
