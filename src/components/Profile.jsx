import { useNavigate } from "react-router";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      <h1>Student Dashboard</h1>

      <p className="dashboard-subtitle">
        Manage your student account.
      </p>

      <div className="dashboard-tabs">

        <span
          onClick={() => navigate("/dashboard")}
        >
          Overview
        </span>

        <span
          className="active-tab"
        >
          Profile
        </span>

        <span
          onClick={() => navigate("/dashboard/settings")}
        >
          Settings
        </span>

      </div>

      <div className="profile-card">

        <h2>My Profile</h2>

        <div className="profile-info">

          <p>
            <strong>Name:</strong> Bhargavi
          </p>

          <p>
            <strong>Email:</strong> Bhagi@gmail.com
          </p>

          <p>
            <strong>Course:</strong> Full Stack Development
          </p>

          <p>
            <strong>Year:</strong> 4th Year
          </p>

        </div>

      </div>

    </div>
  );
}

export default Profile;