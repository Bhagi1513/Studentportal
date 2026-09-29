import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      
      <h1>Student Dashboard</h1>

      <p className="dashboard-subtitle">
        Manage your student account.
      </p>

      <div className="dashboard-tabs">

        <span
          className="active-tab"
          onClick={() => navigate("/dashboard")}
        >
          Overview
        </span>

        <span
          onClick={() => navigate("/dashboard/profile")}
        >
          Profile
        </span>

        <span
          onClick={() => navigate("/dashboard/settings")}
        >
          Settings
        </span>

      </div>

      <div className="dashboard-card">

        <h2>Dashboard Overview</h2>

        <div className="stats-container">

          <div className="stat-box">
            <h3>4</h3>
            <p>Enrolled Courses</p>
          </div>

          <div className="stat-box">
            <h3>82%</h3>
            <p>Average Progress</p>
          </div>

          <div className="stat-box">
            <h3>12</h3>
            <p>Assignments</p>
          </div>

        </div>

        <p className="welcome-text">
          Welcome back! Continue your learning journey.
        </p>

      </div>

    </div>
  );
}

export default Dashboard;