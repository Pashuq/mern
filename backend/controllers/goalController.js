const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET/api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "GET GOALS" });
});

// @desc Set goal
// @route POST/api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  console.log(req.body);
  res.status(200).json({ message: "SET GOAL" });
});

// @desc Update goal
// @route PUT/api/goal/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `UPDATE GOAL ${req.params.id} ` });
});

// @desc Delete goal
// @route DELETE/api/goal/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `DELETE GOAL ${req.params.id} ` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
