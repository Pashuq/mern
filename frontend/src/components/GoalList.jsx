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
    <div className="goal-list">
      {goals.map((goal) => (
        <div className="goal-list__item goal-item" key={goal._id}>
          <div className="goal-item__control">
            <AiTwotoneDelete
              className="icon-hov"
              onClick={() => {
                handleDeleteGoal(goal._id);
              }}
            />
            <FaPencilAlt
              className="icon-hov"
              onClick={() => {
                handleUpdateGoal({ id: goal._id, completed: !goal.completed });
              }}
            />
          </div>

          {goal.completed ? (
            <s className="goal-item__text">{goal.text}</s>
          ) : (
            <p className="goal-item__text">{goal.text}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default GoalList;
