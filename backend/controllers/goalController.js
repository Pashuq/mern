// @desc Get goals
// @route GET/api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "GET GOALS" });
};

// @desc Set goal
// @route POST/api/goals
// @access Private
const setGoal = (req, res) => {
  res.status(200).json({ message: "SET GOAL" });
};

// @desc Update goal
// @route PUT/api/goal/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `UPDATE GOAL ${req.params.id} ` });
};

// @desc Delete goal
// @route DELETE/api/goal/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `DELETE GOAL ${req.params.id} ` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
