import { useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate("/Courses");
    };

    return (
        <div className="welcome-page">
            <div className="welcome-card">

                <h1>Welcome to Student Portal</h1>

                <p>
                    Learn programming, explore courses, and manage your student profile.
                </p>

                <button
                    className="explore"
                    onClick={handleExplore}
                >
                    Explore Courses
                </button>

            </div>
        </div>
    );
}

export default Home;