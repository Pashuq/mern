import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../../components/GoalForm";
import { getGoals } from "../../features/goals/goalSlice";
import GoalList from "../../components/GoalList";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getGoals());
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    user && (
      <>
        <section className="heading">
          <h1>Welcom {user.name}</h1>
          <p>Goals dashboard</p>
        </section>

        <GoalForm />

        <GoalList />
      </>
    )
  );
}

export default Dashboard;
