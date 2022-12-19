import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const goal = useSelector((state) => state.goal);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim) {
      dispatch(createGoal({ text, completed: false }));
    }
    setText("");
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">
            {goal.isLoading ? <div className="loadingSpinner"></div> : "Goal"}
          </label>
          <input
            type="text"
            name="text"
            id="text"
            autoComplete="off"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button
            disabled={goal.isLoading}
            className="btn btn-block btn-hov"
            type="submit"
          >
            Add goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
