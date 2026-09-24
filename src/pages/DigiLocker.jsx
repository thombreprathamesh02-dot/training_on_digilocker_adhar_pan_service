import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FolderLock,
  FileText,
  Smartphone,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Lock,
} from "lucide-react";

function DigiLocker() {
  // Get logged-in user
  const user = JSON.parse(
    localStorage.getItem("registeredUser") || "{}"
  );

  const userEmail = user?.email || "guest";

  // User-specific module completion
  const [completed, setCompleted] = useState(
    localStorage.getItem(
      `digilockerCompleted_${userEmail}`
    ) === "true"
  );

  // Mark module as completed
  const handleComplete = () => {
    localStorage.setItem(
      `digilockerCompleted_${userEmail}`,
      "true"
    );

    setCompleted(true);
  };

  return (
    <div className="training-page">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="training-hero">

        <Link
          to="/dashboard"
          className="training-back"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="training-hero-content">

          <div className="training-icon">
            <FolderLock size={38} />
          </div>

          <span>MODULE 01</span>

          <h1>DigiLocker Services Training</h1>

          <p>
            Learn the basic concepts of DigiLocker,
            common digital document services, and
            important digital safety practices.
          </p>

        </div>

      </section>


      {/* =========================
          MODULE PROGRESS
      ========================== */}
      <section className="training-progress">

        <div>
          <strong>Module Progress</strong>

          <span>
            {completed
              ? "100% Completed"
              : "0% Completed"}
          </span>
        </div>

        <div className="progress-bar">

          <div
            className={
              completed
                ? "progress-fill completed"
                : "progress-fill"
            }
            style={{
              width: completed ? "100%" : "0%",
            }}
          ></div>

        </div>

      </section>


      {/* =========================
          TRAINING CONTENT
      ========================== */}
      <main className="training-content">


        {/* =========================
            SECTION 01
        ========================== */}
        <section className="training-card">

          <div className="card-heading">

            <div className="small-icon">
              <FolderLock size={22} />
            </div>

            <div>
              <span>01</span>
              <h2>What is DigiLocker?</h2>
            </div>

          </div>

          <p>
            DigiLocker is a digital platform that helps
            users access, store, and share important
            documents electronically. It provides
            convenient access to digital documents and
            reduces the need to carry physical copies.
          </p>

        </section>


        {/* =========================
            SECTION 02
        ========================== */}
        <section className="training-card">

          <div className="card-heading">

            <div className="small-icon">
              <FileText size={22} />
            </div>

            <div>
              <span>02</span>
              <h2>Common DigiLocker Services</h2>
            </div>

          </div>


          <div className="benefits-grid">

            {/* Digital Documents */}
            <div className="benefit-item">

              <FolderLock size={21} />

              <div>
                <h3>Digital Documents</h3>

                <p>
                  Learn how digital documents can be
                  accessed through DigiLocker.
                </p>
              </div>

            </div>


            {/* Document Access */}
            <div className="benefit-item">

              <FileText size={21} />

              <div>
                <h3>Document Access</h3>

                <p>
                  Understand how users can access
                  available digital documents.
                </p>
              </div>

            </div>


            {/* Online Access */}
            <div className="benefit-item">

              <Smartphone size={21} />

              <div>
                <h3>Online Access</h3>

                <p>
                  Learn about accessing digital
                  documents using online services.
                </p>
              </div>

            </div>


            {/* Secure Sharing */}
            <div className="benefit-item">

              <ShieldCheck size={21} />

              <div>
                <h3>Secure Sharing</h3>

                <p>
                  Understand the importance of
                  safely sharing digital documents.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            SECTION 03
        ========================== */}
        <section className="training-card">

          <div className="card-heading">

            <div className="small-icon">
              <Smartphone size={22} />
            </div>

            <div>
              <span>03</span>
              <h2>Learning Process</h2>
            </div>

          </div>


          <div className="steps-grid">

            {/* Step 1 */}
            <div className="learning-step">

              <div>1</div>

              <h3>Understand DigiLocker</h3>

              <p>
                Learn the purpose and basic concept
                of DigiLocker.
              </p>

            </div>


            {/* Step 2 */}
            <div className="learning-step">

              <div>2</div>

              <h3>Learn Services</h3>

              <p>
                Understand common digital document
                services available through DigiLocker.
              </p>

            </div>


            {/* Step 3 */}
            <div className="learning-step">

              <div>3</div>

              <h3>Use Safely</h3>

              <p>
                Follow safe digital practices while
                using DigiLocker services.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            SECTION 04
        ========================== */}
        <section className="training-card safety-card">

          <div className="card-heading">

            <div className="small-icon">
              <Lock size={22} />
            </div>

            <div>
              <span>04</span>
              <h2>DigiLocker Safety Tips</h2>
            </div>

          </div>


          <ul className="safety-list">

            <li>
              Do not share your login details with
              unknown people.
            </li>

            <li>
              Never share OTPs with anyone.
            </li>

            <li>
              Use official DigiLocker services for
              accessing digital documents.
            </li>

            <li>
              Be careful when entering personal
              information on websites or apps.
            </li>

            <li>
              Do not click on suspicious links received
              through unknown messages.
            </li>

          </ul>

        </section>


        {/* =========================
            COMPLETION SECTION
        ========================== */}
        <section className="completion-card">

          {completed ? (

            <>
              {/* Completed Icon */}
              <CheckCircle size={35} />

              <div>

                <h2>
                  Module Completed
                </h2>

                <p>
                  You have successfully completed
                  the DigiLocker training module.
                  Now test your knowledge with the quiz.
                </p>

              </div>


              {/* Quiz Button */}
              <Link
                to="/digilocker-quiz"
                className="completion-quiz-button"
              >
                Start DigiLocker Quiz
                <ArrowRight size={18} />
              </Link>

            </>

          ) : (

            <>
              <div>

                <h2>
                  Complete this module
                </h2>

                <p>
                  Read the training material carefully
                  and mark this module as completed.
                </p>

              </div>


              {/* Complete Button */}
              <button
                onClick={handleComplete}
                className="completion-button"
              >
                <CheckCircle size={18} />
                Mark as Completed
              </button>

            </>

          )}

        </section>


        {/* =========================
            BOTTOM NAVIGATION
        ========================== */}
        <div className="training-navigation">

          <Link
            to="/dashboard"
            className="training-dashboard-button"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>

          {completed && (
            <Link
              to="/digilocker-quiz"
              className="training-next-button"
            >
              Take Quiz
              <ArrowRight size={18} />
            </Link>
          )}

        </div>

      </main>

    </div>
  );
}

export default DigiLocker;