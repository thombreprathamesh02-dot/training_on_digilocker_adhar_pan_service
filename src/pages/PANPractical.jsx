import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  CreditCard,
  FileText,
  ShieldCheck,
  User,
  Search,
} from "lucide-react";

function PANPractical() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Understand PAN",
      icon: <CreditCard size={28} />,
      description:
        "PAN stands for Permanent Account Number. It is a unique 10-character alphanumeric identifier used for tax and financial-related activities.",
      note: "PAN is issued by the Income Tax Department.",
    },
    {
      title: "Choose PAN Service",
      icon: <Search size={28} />,
      description:
        "For a new PAN, the applicant needs to select the appropriate new PAN application service from an official PAN service provider.",
      note: "Always use an official government-authorized service.",
    },
    {
      title: "Enter Applicant Details",
      icon: <User size={28} />,
      description:
        "The applicant provides required information such as name, date of birth and other details according to the application requirements.",
      note: "Information should be entered carefully and accurately.",
    },
    {
      title: "Provide Required Documents",
      icon: <FileText size={28} />,
      description:
        "The application process may require identity, address and date-of-birth related documents as applicable.",
      note: "Use valid documents and follow the current application requirements.",
    },
    {
      title: "Verification",
      icon: <ShieldCheck size={28} />,
      description:
        "The information and documents provided during the application are verified through the applicable verification process.",
      note: "Follow the instructions shown by the official service.",
    },
    {
      title: "Submit Application",
      icon: <CheckCircle size={28} />,
      description:
        "After reviewing all information, the applicant can submit the application through the applicable official process.",
      note: "Review your information before final submission.",
    },
    {
      title: "Track Application",
      icon: <Search size={28} />,
      description:
        "After submission, the applicant can use the available application or acknowledgement details to check the application status.",
      note: "Keep your acknowledgement or application reference details safe.",
    },
    {
      title: "Stay Safe",
      icon: <ShieldCheck size={28} />,
      description:
        "Never share OTPs, passwords or sensitive information with unknown people. Be careful of fake PAN websites and messages.",
      note: "Use only official or authorized PAN service channels.",
    },
  ];

  const currentStep = steps[step];

  return (
    <div className="training-page">

      {/* HERO */}
      <section className="training-hero">

        <Link to="/practical-learning" className="training-back">
          <ArrowLeft size={18} />
          Back to Practical Learning
        </Link>

        <div className="training-hero-content">

          <div className="training-icon">
            <CreditCard size={38} />
          </div>

          <span>PAN PRACTICAL GUIDE</span>

          <h1>PAN Services Practical Learning</h1>

          <p>
            Learn the basic PAN service process through
            simple step-by-step practical guidance.
          </p>

        </div>

      </section>


      {/* PROGRESS */}
      <section className="training-progress">

        <div>
          <strong>Practical Progress</strong>

          <span>
            Step {step + 1} of {steps.length}
          </span>
        </div>

        <div className="progress-bar">

          <div
            className="progress-fill completed"
            style={{
              width: `${((step + 1) / steps.length) * 100}%`,
            }}
          ></div>

        </div>

      </section>


      {/* PRACTICAL CONTENT */}
      <main className="training-content">

        <section className="training-card">

          <div className="card-heading">

            <div className="small-icon">
              {currentStep.icon}
            </div>

            <div>
              <span>
                STEP {String(step + 1).padStart(2, "0")}
              </span>

              <h2>{currentStep.title}</h2>
            </div>

          </div>

          <p>
            {currentStep.description}
          </p>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              borderRadius: "12px",
              background: "#f5f7fb",
            }}
          >
            <strong>Important Note</strong>

            <p style={{ marginBottom: 0 }}>
              {currentStep.note}
            </p>
          </div>

        </section>


        {/* STEP INDICATORS */}
        <section className="training-card">

          <div className="card-heading">

            <div className="small-icon">
              <CheckCircle size={22} />
            </div>

            <div>
              <span>LEARNING STEPS</span>
              <h2>PAN Application Process</h2>
            </div>

          </div>

          <div className="steps-grid">

            {steps.map((item, index) => (
              <div
                key={index}
                className="learning-step"
                style={{
                  opacity: index === step ? 1 : 0.65,
                }}
              >

                <div>
                  {index + 1}
                </div>

                <h3>{item.title}</h3>

              </div>
            ))}

          </div>

        </section>


        {/* NAVIGATION */}
        <section className="completion-card">

          {step > 0 && (
            <button
              onClick={() =>
                setStep((previous) => previous - 1)
              }
            >
              <ArrowLeft size={18} />
              Previous
            </button>
          )}

          {step < steps.length - 1 ? (
            <button
              onClick={() =>
                setStep((previous) => previous + 1)
              }
            >
              Next Step
              <ArrowRight size={18} />
            </button>
          ) : (
            <Link to="/practical-learning">
              <CheckCircle size={18} />
              Complete Practical
            </Link>
          )}

        </section>

      </main>

    </div>
  );
}

export default PANPractical;