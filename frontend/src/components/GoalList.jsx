import { useSelector, useDispatch } from "react-redux";

import { AiTwotoneDelete } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { deleteGoal } from "../features/goals/goalSlice";

function GoalList() {
  const dispatch = useDispatch();
  const { goals } = useSelector((state) => state.goal);

  const handleDeleteGoal = (id) => {
    dispatch(deleteGoal(id));
  };

  const handleUpdateGoal = () => {};

  return (
    <div>
      {goals.map((goal) => (
        <div key={goal._id}>
          <div style={{ display: "flex" }}>
            <AiTwotoneDelete
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleDeleteGoal(goal._id);
              }}
            />
            <FaPencilAlt style={{ cursor: "pointer" }} />
          </div>
          {goal.text}
        </div>
      ))}
    </div>
  );
}

export default GoalList;
