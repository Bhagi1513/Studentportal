import { useNavigate}from "react-router";
function Login(){
    
        const navigate=useNavigate();
        const handleLogin = () => {
  localStorage.setItem("isLoggedIn", "true");

  navigate("/dashboard");
};
return(
    <>
    <div className="Login-page">
    <div className="login-card">
    <h1>Student Login</h1>
    <p>Login to acces your Dashboard</p>
    <button onClick={handleLogin}>Login</button>
    </div>
    </div>
    </>
)  
      
    
}
export default Login