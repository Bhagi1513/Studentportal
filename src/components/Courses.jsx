import { useNavigate } from "react-router";

function Courses() {
  const navigate = useNavigate();

  return (
    <div className="courses-page">

      <h1>Available Courses</h1>

      <div className="courses-container">

        {/* React */}
        <div className="course-card">
          <h2>React</h2>
          <p>Learn React from fundamentals to advanced concepts.</p>
          <p>
            <strong>Duration:</strong> 6 Weeks
          </p>

          <button onClick={() => navigate("/courses/react")}>
            View Course
          </button>
        </div>

        {/* JavaScript */}
        <div className="course-card">
          <h2>JavaScript</h2>
          <p>Master modern JavaScript programming.</p>
          <p>
            <strong>Duration:</strong> 8 Weeks
          </p>

          <button onClick={() => navigate("/courses/javascript")}>
            View Course
          </button>
        </div>

        {/* Python */}
        <div className="course-card">
          <h2>Python</h2>
          <p>Learn Python programming from scratch.</p>
          <p>
            <strong>Duration:</strong> 10 Weeks
          </p>

          <button onClick={() => navigate("/courses/python")}>
            View Course
          </button>
        </div>

        {/* Java */}
        <div className="course-card">
          <h2>Java</h2>
          <p>Learn Java and object-oriented programming.</p>
          <p>
            <strong>Duration:</strong> 12 Weeks
          </p>

          <button onClick={() => navigate("/courses/java")}>
            View Course
          </button>
        </div>

      </div>
    </div>
  );
}

export default Courses;