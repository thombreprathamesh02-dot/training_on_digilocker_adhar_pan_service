import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  FolderLock,
  FileText,
  Smartphone,
  ShieldCheck,
  CheckCircle,
  Lock,
  Search,
} from "lucide-react";

function DigiLockerPractical() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Understand DigiLocker",
      icon: <FolderLock size={28} />,
      description:
        "DigiLocker is a digital platform that helps users access and manage digital documents electronically.",
      note:
        "It reduces the need to carry physical copies of important documents.",
    },
    {
      title: "Open DigiLocker",
      icon: <Smartphone size={28} />,
      description:
        "Open the official DigiLocker website or mobile application and select the appropriate login or registration option.",
      note:
        "Always use the official DigiLocker website or application.",
    },
    {
      title: "Sign In or Register",
      icon: <Lock size={28} />,
      description:
        "Users can sign in using the available authentication method. New users can follow the registration process shown by the official service.",
      note:
        "Never share your password, OTP or authentication details with anyone.",
    },
    {
      title: "Access Documents",
      icon: <FileText size={28} />,
      description:
        "After signing in, users can explore the available sections to access documents and certificates available through DigiLocker.",
      note:
        "The availability of documents depends on the issuing organization and service.",
    },
    {
      title: "Search for a Document",
      icon: <Search size={28} />,
      description:
        "Use the available search or document options to find the required digital document or certificate.",
      note:
        "Enter information carefully and verify the document details.",
    },
    {
      title: "View Digital Document",
      icon: <FileText size={28} />,
      description:
        "Once a document is available, users can view its details and access the digital version through their DigiLocker account.",
      note:
        "Check the document information before using or sharing it.",
    },
    {
      title: "Share a Document Safely",
      icon: <ShieldCheck size={28} />,
      description:
        "DigiLocker provides options for using or sharing digital documents through supported services.",
      note:
        "Share documents only with trusted people or authorized organizations.",
    },
    {
      title: "Follow Safety Practices",
      icon: <ShieldCheck size={28} />,
      description:
        "Protect your DigiLocker account by keeping login information private and avoiding suspicious websites, links and messages.",
      note:
        "Never share OTPs or login credentials with unknown persons.",
    },
  ];

  const currentStep = steps[step];

  return (
    <div className="training-page">

      {/* HERO */}
      <section className="training-hero">

        <Link
          to="/practical-learning"
          className="training-back"
        >
          <ArrowLeft size={18} />
          Back to Practical Learning
        </Link>

        <div className="training-hero-content">

          <div className="training-icon">
            <FolderLock size={38} />
          </div>

          <span>DIGILOCKER PRACTICAL GUIDE</span>

          <h1>DigiLocker Practical Learning</h1>

          <p>
            Learn how to access and use DigiLocker
            through simple step-by-step practical guidance.
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


      {/* CONTENT */}
      <main className="training-content">

        {/* CURRENT STEP */}
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


        {/* ALL STEPS */}
        <section className="training-card">

          <div className="card-heading">

            <div className="small-icon">
              <CheckCircle size={22} />
            </div>

            <div>
              <span>LEARNING STEPS</span>

              <h2>DigiLocker Process</h2>
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

                <h3>
                  {item.title}
                </h3>

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

export default DigiLockerPractical;