import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  UserCheck,
  Smartphone,
  FileText,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Lock,
} from "lucide-react";

function Aadhaar() {
  const [completed, setCompleted] = useState(
    localStorage.getItem("aadhaarCompleted") === "true"
  );

  const handleComplete = () => {
    localStorage.setItem("aadhaarCompleted", "true");
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
            <ShieldCheck size={38} />
          </div>

          <span>MODULE 02</span>

          <h1>Aadhaar Services Training</h1>

          <p>
            Learn the basic concepts of Aadhaar,
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

        {/* What is Aadhaar */}
        <section className="training-card">

          <div className="card-heading">

            <div className="small-icon">
              <UserCheck size={22} />
            </div>

            <div>
              <span>01</span>
              <h2>What is Aadhaar?</h2>
            </div>

          </div>

          <p>
            Aadhaar is a unique identification number
            issued to eligible residents of India by the
            Unique Identification Authority of India (UIDAI).
            It is used as an identity document and for
            accessing various services where Aadhaar
            authentication or verification is supported.
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
              <h2>Common Aadhaar Services</h2>
            </div>

          </div>

          <div className="benefits-grid">

            <div className="benefit-item">

              <UserCheck size={21} />

              <div>
                <h3>Enrolment</h3>

                <p>
                  Learn the basic purpose of Aadhaar
                  enrolment and identity registration.
                </p>
              </div>

            </div>


            <div className="benefit-item">

              <FileText size={21} />

              <div>
                <h3>Update Services</h3>

                <p>
                  Understand that certain Aadhaar
                  details can be updated through
                  supported channels.
                </p>
              </div>

            </div>


            <div className="benefit-item">

              <Smartphone size={21} />

              <div>
                <h3>Online Services</h3>

                <p>
                  Learn about digital Aadhaar-related
                  services available through official channels.
                </p>
              </div>

            </div>


            <div className="benefit-item">

              <ShieldCheck size={21} />

              <div>
                <h3>Authentication</h3>

                <p>
                  Understand the basic concept of
                  Aadhaar authentication.
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

              <h3>Understand Aadhaar</h3>

              <p>
                Learn the purpose and basic concept
                of Aadhaar identification.
              </p>

            </div>


            <div className="learning-step">

              <div>2</div>

              <h3>Learn Services</h3>

              <p>
                Understand common Aadhaar services
                and where they are provided.
              </p>

            </div>


            <div className="learning-step">

              <div>3</div>

              <h3>Use Safely</h3>

              <p>
                Follow safe digital practices while
                using Aadhaar-related services.
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
              <h2>Aadhaar Safety Tips</h2>
            </div>

          </div>

          <ul className="safety-list">

            <li>
              Do not share your Aadhaar details unnecessarily.
            </li>

            <li>
              Never share OTPs with unknown people.
            </li>

            <li>
              Use official UIDAI services for Aadhaar-related work.
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
                  the Aadhaar training module.
                </p>

              </div>

              <Link to="/aadhaar-quiz">
                Start Aadhaar Quiz
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

export default Aadhaar;