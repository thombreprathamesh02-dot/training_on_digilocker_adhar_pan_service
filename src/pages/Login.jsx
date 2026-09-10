import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LogIn,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("registeredUser");

    if (!savedUser) {
      setMessage("No account found. Please register first.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (
      email === user.email &&
      password === user.password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      setMessage("Login successful!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 700);
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-icon">
          <LogIn size={30} />
        </div>

        <span className="auth-label">
          DIGITAL SEVA TRAINING
        </span>

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to continue your training.
        </p>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="input-group">

            <label>Email Address</label>

            <div className="input-wrapper">
              <Mail size={18} />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

          </div>

          {/* Password */}
          <div className="input-group">

            <label>Password</label>

            <div className="input-wrapper">
              <Lock size={18} />

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

          </div>

          {message && (
            <div className="auth-message">
              {message}
            </div>
          )}

          <button type="submit" className="auth-submit">
            Login
            <ArrowRight size={18} />
          </button>

        </form>

        <p className="auth-bottom">
          Don't have an account?{" "}
          <Link to="/register">
            Create Account
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;