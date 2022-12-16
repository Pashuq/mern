import { useSelector, useDispatch } from "react-redux";

import { AiTwotoneDelete } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { deleteGoal, updateGoal } from "../features/goals/goalSlice";

function GoalList() {
  const dispatch = useDispatch();
  const { goals } = useSelector((state) => state.goal);

  const handleDeleteGoal = (id) => {
    dispatch(deleteGoal(id));
  };

  const handleUpdateGoal = (userData) => {
    dispatch(updateGoal(userData));
  };

  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      {goals.map((goal) => (
        <div key={goal._id}>
          <div style={{ display: "flex" }}>
            <AiTwotoneDelete
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleDeleteGoal(goal._id);
              }}
            />
            <FaPencilAlt
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleUpdateGoal({ id: goal._id, completed: !goal.completed });
              }}
            />
          </div>

          {goal.completed ? <s>{goal.text}</s> : goal.text}
        </div>
      ))}
    </div>
  );
}

export default GoalList;
