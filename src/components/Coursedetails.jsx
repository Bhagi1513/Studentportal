import { useNavigate, useParams } from "react-router";

function CourseDetails() {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const courseData = {
    react: {
      name: "REACT",
      description: "Learn React from fundamentals to advanced concepts.",
      duration: "6 Weeks",
      topics: [
        "Fundamentals",
        "Practical Coding",
        "Projects",
        "Interview Preparation"
      ]
    },

    javascript: {
      name: "JAVASCRIPT",
      description: "Master modern JavaScript programming.",
      duration: "8 Weeks",
      topics: [
        "JavaScript Basics",
        "DOM",
        "Events",
        "Projects",
        "Interview Preparation"
      ]
    },

    python: {
      name: "PYTHON",
      description: "Learn Python programming from scratch.",
      duration: "10 Weeks",
      topics: [
        "Python Basics",
        "Functions",
        "OOP",
        "Projects",
        "Interview Preparation"
      ]
    },

    java: {
      name: "JAVA",
      description: "Learn Java and object-oriented programming.",
      duration: "12 Weeks",
      topics: [
        "Java Basics",
        "OOP",
        "Collections",
        "Exception Handling",
        "Interview Preparation"
      ]
    }
  };

  const course = courseData[courseId];

  if (!course) {
    return <h1>Course Not Found</h1>;
  }

  return (
    <div className="course-details-page">

      <div className="course-details-card">

        <h1>Course Details</h1>

        <h2>{course.name}</h2>

        <p>{course.description}</p>

        <p>
          <strong>Course ID:</strong> {courseId}
        </p>

        <p>
          <strong>Duration:</strong> {course.duration}
        </p>

        <h3>Topics</h3>

        <ul>
          {course.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>

        <button
          onClick={() => navigate("/Courses")}
        >
          ← Back to Courses
        </button>

      </div>

    </div>
  );
}

export default CourseDetails;