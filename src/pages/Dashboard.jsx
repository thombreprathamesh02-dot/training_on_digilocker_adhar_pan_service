import { Link } from "react-router-dom";
import {
  BookOpen,
  ShieldCheck,
  FolderLock,
  CreditCard,
  CheckCircle,
  ArrowRight,
  User,
  Award,
} from "lucide-react";

function Dashboard() {
  const registeredUser =
    JSON.parse(localStorage.getItem("registeredUser")) || {};

  const userEmail = registeredUser?.email || "guest";

  // Module completion status
  const digilockerCompleted =
    localStorage.getItem(`digilockerCompleted_${userEmail}`) === "true";

  const aadhaarCompleted =
    localStorage.getItem(`aadhaarCompleted_${userEmail}`) === "true";

  const panCompleted =
    localStorage.getItem(`panCompleted_${userEmail}`) === "true";

  const completedModules = [
    digilockerCompleted,
    aadhaarCompleted,
    panCompleted,
  ].filter(Boolean).length;

  const progress = Math.round((completedModules / 3) * 100);

  return (
    <div className="professional-dashboard">

      {/* HEADER */}
      <section className="dashboard-header">

        <div>
          <span className="dashboard-badge">
            DIGITAL SEVA TRAINING PORTAL
          </span>

          <h1>
            Welcome, {registeredUser?.name || "Learner"}
          </h1>

          <p>
            Continue your digital services training and
            improve your knowledge of DigiLocker, Aadhaar
            and PAN services.
          </p>
        </div>

        <Link to="/profile" className="profile-button">
          <User size={18} />
          Profile
        </Link>

      </section>


      {/* PROGRESS CARD */}
      <section className="overall-progress-card">

        <div className="progress-top">

          <div>
            <span className="section-label">
              OVERALL TRAINING PROGRESS
            </span>

            <h2>
              {completedModules}/3 Modules Completed
            </h2>
          </div>

          <div className="progress-percentage">
            {progress}%
          </div>

        </div>

        <div className="dashboard-progress-bar">
          <div
            className="dashboard-progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p>
          {completedModules === 3
            ? "Congratulations! You have completed all training modules."
            : `Complete ${3 - completedModules} more module${3 - completedModules > 1 ? "s" : ""
            } to finish your training.`}
        </p>

      </section>


      {/* TRAINING MODULES */}
      <section className="training-modules-section">

        <div className="section-heading">

          <div>
            <span className="section-label">
              LEARNING PROGRAM
            </span>

            <h2>Training Modules</h2>

            <p>
              Learn essential digital services through
              structured training modules.
            </p>
          </div>

          <BookOpen size={32} />

        </div>


        <div className="training-modules-grid">


          {/* DIGILOCKER */}
          <div className="training-module-card">

            <div className="module-card-top">

              <div className="module-icon digilocker-module-icon">
                <FolderLock size={30} />
              </div>

              {digilockerCompleted && (
                <span className="completed-badge">
                  <CheckCircle size={15} />
                  Completed
                </span>
              )}

            </div>

            <span className="module-number">
              MODULE 01
            </span>

            <h3>DigiLocker Training</h3>

            <p>
              Learn how to access, manage and share
              important digital documents using DigiLocker.
            </p>

            <div className="module-status">

              <span>
                {digilockerCompleted
                  ? "Training Completed"
                  : "Not Completed"}
              </span>

              {digilockerCompleted ? (
                <CheckCircle size={19} />
              ) : (
                <span>0%</span>
              )}

            </div>

            <Link
              to="/digilocker"
              className="module-button"
            >
              {digilockerCompleted
                ? "View Training"
                : "Start Training"}

              <ArrowRight size={18} />
            </Link>

          </div>


          {/* AADHAAR */}
          <div className="training-module-card">

            <div className="module-card-top">

              <div className="module-icon aadhaar-module-icon">
                <ShieldCheck size={30} />
              </div>

              {aadhaarCompleted && (
                <span className="completed-badge">
                  <CheckCircle size={15} />
                  Completed
                </span>
              )}

            </div>

            <span className="module-number">
              MODULE 02
            </span>

            <h3>Aadhaar Services Training</h3>

            <p>
              Learn the basic concepts of Aadhaar,
              common services and important safety practices.
            </p>

            <div className="module-status">

              <span>
                {aadhaarCompleted
                  ? "Training Completed"
                  : "Not Completed"}
              </span>

              {aadhaarCompleted ? (
                <CheckCircle size={19} />
              ) : (
                <span>0%</span>
              )}

            </div>

            <Link
              to="/aadhaar"
              className="module-button"
            >
              {aadhaarCompleted
                ? "View Training"
                : "Start Training"}

              <ArrowRight size={18} />
            </Link>

          </div>


          {/* PAN */}
          <div className="training-module-card">

            <div className="module-card-top">

              <div className="module-icon pan-module-icon">
                <CreditCard size={30} />
              </div>

              {panCompleted && (
                <span className="completed-badge">
                  <CheckCircle size={15} />
                  Completed
                </span>
              )}

            </div>

            <span className="module-number">
              MODULE 03
            </span>

            <h3>PAN Services Training</h3>

            <p>
              Learn the purpose of PAN, basic services,
              tax-related uses and financial transactions.
            </p>

            <div className="module-status">

              <span>
                {panCompleted
                  ? "Training Completed"
                  : "Not Completed"}
              </span>

              {panCompleted ? (
                <CheckCircle size={19} />
              ) : (
                <span>0%</span>
              )}

            </div>

            <Link
              to="/pan"
              className="module-button"
            >
              {panCompleted
                ? "View Training"
                : "Start Training"}

              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* CERTIFICATE SECTION */}
      <section className="certificate-dashboard-section">

        <div className="certificate-dashboard-card">

          <div className="certificate-dashboard-icon">
            <Award size={32} />
          </div>

          <div className="certificate-dashboard-content">
            <span className="section-label">
              ACHIEVEMENT
            </span>

            <h2>Training Certificate</h2>

            <p>
              Complete all three training modules and pass
              the final quiz to access your Digital Services
              Training Certificate.
            </p>

            <div className="certificate-dashboard-status">
              <span>
                {completedModules === 3
                  ? "All Modules Completed"
                  : `${completedModules}/3 Modules Completed`}
              </span>
            </div>

            <Link
              to="/certificate"
              className="certificate-dashboard-button"
            >
              View Certificate
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;