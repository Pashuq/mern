import axios from "axios";

const API_URL = "/api/goals";
const HOST = process.env.HOST;

//create goal
const createGoal = async (userData, token) => {
  const response = await axios.post(HOST + API_URL, userData, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

//read goals
const getGoals = async (token) => {
  const response = await axios.get(HOST + API_URL, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

//update goal
const updateGoal = async (userData, token) => {
  const response = await axios.put(
    HOST + API_URL + "/" + userData.id,
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

//delete goal
const deleteGoal = async (id, token) => {
  const response = await axios.delete(HOST + API_URL + "/" + id, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  updateGoal,
  deleteGoal,
};

export default goalService;
