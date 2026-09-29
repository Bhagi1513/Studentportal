import { useNavigate } from "react-router";
function Settings() {
    const navigate=useNavigate();
    return (
        <div className="dashboard-page">

            <h1>Student Dashboard</h1>

            <p className="dashboard-subtitle">
                Manage your student account.
            </p>

            <div className="dashboard-tabs">

                <span>
                    Overview
                </span>

                <span>
                    Profile
                </span>

                <span className="active-tab">
                    Settings
                </span>

            </div>

            <div className="settings-card">

                <h2>Settings</h2>

                <div className="settings-box">

                    <label>
                        <input type="checkbox" defaultChecked />
                        Enable Email Notifications
                    </label>

                    <label>
                        <input type="checkbox" />
                        Enable Course Reminders
                    </label>

                </div>

            </div>

        </div>
    );
}

export default Settings;