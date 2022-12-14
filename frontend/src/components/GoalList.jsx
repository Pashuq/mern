import { useSelector } from "react-redux";
function GoalList() {
  const { goals } = useSelector((state) => state.goal);
  return (
    <div>
      {goals.map((goal) => (
        <p key={goal._id}>{goal.text}</p>
      ))}
    </div>
  );
}

export default GoalList;
