import { Link } from "react-router-dom";
import {
  FolderLock,
  ShieldCheck,
  CreditCard,
  CheckCircle,
  Trophy,
  ArrowRight,
} from "lucide-react";

function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("registeredUser") || "{}"
  );

  const userEmail = user?.email || "guest";

  const digilocker =
    localStorage.getItem(`digilockerCompleted_${userEmail}`) === "true";

  const aadhaar =
    localStorage.getItem(`aadhaarCompleted_${userEmail}`) === "true";

  const pan =
    localStorage.getItem(`panCompleted_${userEmail}`) === "true";

  const completedModules = [
    digilocker,
    aadhaar,
    pan,
  ].filter(Boolean).length;

  const progress = Math.round(
    (completedModules / 3) * 100
  );

  return (
    <div className="dashboard-page">

      {/* Welcome */}

      <section className="dashboard-welcome">

        <div>
          <span className="dashboard-label">
            DIGITAL SEVA TRAINING PORTAL
          </span>

          <h1>
            Welcome, {user?.name || "Learner"} 👋
          </h1>

          <p>
            Continue your training and complete
            all three digital service modules.
          </p>
        </div>

        <div className="dashboard-trophy">
          <Trophy size={42} />
        </div>

      </section>


      {/* Progress */}

      <section className="overall-progress">

        <div className="progress-header">

          <div>
            <strong>Overall Training Progress</strong>

            <p>
              {completedModules} of 3 modules completed
            </p>
          </div>

          <strong className="progress-percentage">
            {progress}%
          </strong>

        </div>

        <div className="dashboard-progress-bar">

          <div
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>

      </section>


      {/* Modules */}

      <section className="dashboard-section">

        <div className="section-heading">
          <span>TRAINING</span>
          <h2>Your Modules</h2>
        </div>


        <div className="dashboard-modules">

          {/* DigiLocker */}

          <div className="module-card">

            <div className="module-icon digilocker-icon">
              <FolderLock size={28} />
            </div>

            <div className="module-info">

              <span>MODULE 01</span>

              <h3>DigiLocker Training</h3>

              <p>
                Learn about digital documents
                and DigiLocker services.
              </p>

            </div>

            {digilocker ? (
              <div className="module-completed">
                <CheckCircle size={18} />
                Completed
              </div>
            ) : (
              <Link to="/digilocker">
                Start
                <ArrowRight size={17} />
              </Link>
            )}

          </div>


          {/* Aadhaar */}

          <div className="module-card">

            <div className="module-icon aadhaar-icon">
              <ShieldCheck size={28} />
            </div>

            <div className="module-info">

              <span>MODULE 02</span>

              <h3>Aadhaar Training</h3>

              <p>
                Learn about Aadhaar services
                and digital safety.
              </p>

            </div>

            {aadhaar ? (
              <div className="module-completed">
                <CheckCircle size={18} />
                Completed
              </div>
            ) : (
              <Link to="/aadhaar">
                Start
                <ArrowRight size={17} />
              </Link>
            )}

          </div>


          {/* PAN */}

          <div className="module-card">

            <div className="module-icon pan-icon">
              <CreditCard size={28} />
            </div>

            <div className="module-info">

              <span>MODULE 03</span>

              <h3>PAN Training</h3>

              <p>
                Learn about PAN services
                and safe digital practices.
              </p>

            </div>

            {pan ? (
              <div className="module-completed">
                <CheckCircle size={18} />
                Completed
              </div>
            ) : (
              <Link to="/pan">
                Start
                <ArrowRight size={17} />
              </Link>
            )}

          </div>

        </div>

      </section>


      {/* Quiz */}

      <section className="dashboard-bottom">

        <div className="dashboard-quiz-card">

          <div className="dashboard-bottom-icon">
            <Trophy size={28} />
          </div>

          <div>

            <span>FINAL ASSESSMENT</span>

            <h2>Digital Seva Quiz</h2>

            <p>
              Complete all three training modules
              and take the final quiz.
            </p>

          </div>
          {digilocker && aadhaar && pan ? (
            <Link to="/quiz" className="service-quiz-button">
              Start Final Quiz →
            </Link>
          ) : (
            <p>
              Complete DigiLocker, Aadhaar and PAN training
              to unlock the Final Quiz.
            </p>
          )}



        </div>

      </section>

    </div>
  );
}

export default Dashboard;