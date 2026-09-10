import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import PANQuiz from "./pages/PANQuiz";
import AadhaarQuiz from "./pages/AadhaarQuiz";
import DigiLockerQuiz from "./pages/DigiLockerQuiz";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DigiLocker from "./pages/DigiLocker";
import Aadhaar from "./pages/Aadhaar";
import PAN from "./pages/PAN";
import Quiz from "./pages/Quiz";
import Certificate from "./pages/Certificate";


function ProtectedRoute({ children }) {

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


function AppContent() {

  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!isAuthPage && <Navbar />}

      <Routes>

        {/* Home */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* Authentication */}

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />


        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


        {/* DigiLocker */}

        <Route
          path="/digilocker"
          element={
            <ProtectedRoute>
              <DigiLocker />
            </ProtectedRoute>
          }
        />


        {/* Aadhaar */}

        <Route
          path="/aadhaar"
          element={
            <ProtectedRoute>
              <Aadhaar />
            </ProtectedRoute>
          }
        />


        {/* PAN */}

        <Route
          path="/pan"
          element={
            <ProtectedRoute>
              <PAN />
            </ProtectedRoute>
          }
        />


        {/* Quiz */}

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
        <Route
          path="/digilocker-quiz"
          element={
            <ProtectedRoute>
              <DigiLockerQuiz />
            </ProtectedRoute>
          }
        />
        <Route
          path="/aadhaar-quiz"
          element={
            <ProtectedRoute>
              <AadhaarQuiz />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pan-quiz"
          element={
            <ProtectedRoute>
              <PANQuiz />
            </ProtectedRoute>
          }
        />


        {/* Certificate */}

        <Route
          path="/certificate"
          element={
            <ProtectedRoute>
              <Certificate />
            </ProtectedRoute>
          }
        />


        {/* Unknown URL */}

        <Route
          path="*"
          element={
            <Navigate to="/" replace />
          }
        />

      </Routes>
    </>
  );
}


function App() {
  return <AppContent />;
}

export default App;