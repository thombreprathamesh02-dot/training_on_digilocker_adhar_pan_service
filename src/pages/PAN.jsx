import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  FileText,
  Smartphone,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Lock,
} from "lucide-react";

function PAN() {
  const [completed, setCompleted] = useState(
    localStorage.getItem("panCompleted") === "true"
  );

  const handleComplete = () => {
    localStorage.setItem("panCompleted", "true");
    setCompleted(true);
  };

  return (
    <div className="training-page">

      {/* Hero */}
      <section className="training-hero">

        <Link to="/dashboard" className="training-back">
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="training-hero-content">

          <div className="training-icon">
            <CreditCard size={38} />
          </div>

          <span>MODULE 03</span>

          <h1>PAN Card Services Training</h1>

          <p>
            Learn the basic concepts of PAN Card,
            common services and important digital
            safety practices.
          </p>

        </div>

      </section>


      {/* Progress */}
      <section className="training-progress">

        <div>
          <strong>Module Progress</strong>

          <span>
            {completed ? "100% Completed" : "0% Completed"}
          </span>
        </div>

        <div className="progress-bar">

          <div
            className={
              completed
                ? "progress-fill completed"
                : "progress-fill"
            }
          ></div>

        </div>

      </section>


      {/* Content */}
      <main className="training-content">

        {/* What is PAN */}
        <section className="training-card">

          <div className="card-heading">

            <div className="small-icon">
              <CreditCard size={22} />
            </div>

            <div>
              <span>01</span>
              <h2>What is PAN Card?</h2>
            </div>

          </div>

          <p>
            PAN stands for Permanent Account Number.
            It is a unique 10-character alphanumeric
            number issued by the Income Tax Department.
            PAN is mainly used for income-tax related
            work and various financial transactions.
          </p>

        </section>


        {/* Services */}
        <section className="training-card">

          <div className="card-heading">

            <div className="small-icon">
              <FileText size={22} />
            </div>

            <div>
              <span>02</span>
              <h2>Common PAN Services</h2>
            </div>

          </div>

          <div className="benefits-grid">

            <div className="benefit-item">

              <CreditCard size={21} />

              <div>
                <h3>New PAN</h3>

                <p>
                  Learn the basic purpose of applying
                  for a new PAN Card.
                </p>
              </div>

            </div>


            <div className="benefit-item">

              <FileText size={21} />

              <div>
                <h3>Update Services</h3>

                <p>
                  Understand that PAN details can be
                  updated or corrected through supported
                  channels.
                </p>
              </div>

            </div>


            <div className="benefit-item">

              <Smartphone size={21} />

              <div>
                <h3>Online Services</h3>

                <p>
                  Learn about digital PAN-related
                  services available through official
                  channels.
                </p>
              </div>

            </div>


            <div className="benefit-item">

              <ShieldCheck size={21} />

              <div>
                <h3>Financial Use</h3>

                <p>
                  Understand the importance of PAN
                  for certain financial transactions.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* Learning Steps */}
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

            <div className="learning-step">

              <div>1</div>

              <h3>Understand PAN</h3>

              <p>
                Learn the purpose and basic concept
                of PAN identification.
              </p>

            </div>


            <div className="learning-step">

              <div>2</div>

              <h3>Learn Services</h3>

              <p>
                Understand common PAN services
                and where they are provided.
              </p>

            </div>


            <div className="learning-step">

              <div>3</div>

              <h3>Use Safely</h3>

              <p>
                Follow safe digital practices while
                using PAN-related services.
              </p>

            </div>

          </div>

        </section>


        {/* Safety */}
        <section className="training-card safety-card">

          <div className="card-heading">

            <div className="small-icon">
              <Lock size={22} />
            </div>

            <div>
              <span>04</span>
              <h2>PAN Safety Tips</h2>
            </div>

          </div>

          <ul className="safety-list">

            <li>
              Do not share your PAN details unnecessarily.
            </li>

            <li>
              Never share OTPs or passwords with unknown people.
            </li>

            <li>
              Use official websites for PAN-related services.
            </li>

            <li>
              Be careful when entering personal information
              on websites or apps.
            </li>

            <li>
              Do not click on suspicious links received
              through unknown messages.
            </li>

          </ul>

        </section>


        {/* Completion */}
        <section className="completion-card">

          {completed ? (

            <>
              <CheckCircle size={35} />

              <div>

                <h2>
                  Module Completed 🎉
                </h2>

                <p>
                  You have successfully completed
                  the PAN training module.
                </p>

              </div>

              <Link to="/pan-quiz">
                Start PAN Quiz
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
                  Read the training material and
                  mark this module as completed.
                </p>

              </div>

              <button onClick={handleComplete}>

                <CheckCircle size={18} />

                Mark as Completed

              </button>

            </>

          )}

        </section>

      </main>

    </div>
  );
}

export default PAN;