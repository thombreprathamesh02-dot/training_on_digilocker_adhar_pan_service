import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus, User, Mail, Lock, ArrowRight } from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setMessage("Please fill all fields.");
      return;
    }

    if (form.password.length < 6) {
      setMessage("Password must contain at least 6 characters.");
      return;
    }

    const existingUser = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(existingUser)
    );

    setMessage("Registration successful!");

    setTimeout(() => {
      navigate("/login");
    }, 800);
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-icon">
          <UserPlus size={30} />
        </div>

        <span className="auth-label">
          DIGITAL SEVA TRAINING
        </span>

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Register to start your digital services training.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="input-group">

            <label>Full Name</label>

            <div className="input-wrapper">
              <User size={18} />

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

          </div>

          {/* Email */}
          <div className="input-group">

            <label>Email Address</label>

            <div className="input-wrapper">
              <Mail size={18} />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
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
                name="password"
                placeholder="Minimum 6 characters"
                value={form.password}
                onChange={handleChange}
              />
            </div>

          </div>

          {message && (
            <div className="auth-message">
              {message}
            </div>
          )}

          <button type="submit" className="auth-submit">
            Create Account
            <ArrowRight size={18} />
          </button>

        </form>

        <p className="auth-bottom">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;