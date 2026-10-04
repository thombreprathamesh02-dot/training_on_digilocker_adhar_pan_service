import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  User,
  FileText,
  Search,
  Lock,
  CheckCircle,
} from "lucide-react";

function AadhaarPractical() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Understand Aadhaar",
      icon: <ShieldCheck size={28} />,
      description:
        "Aadhaar is a 12-digit identification number issued by UIDAI to eligible residents of India.",
      note:
        "Aadhaar is used as an identity document for many services.",
    },
    {
      title: "Open Official Aadhaar Services",
      icon: <Smartphone size={28} />,
      description:
        "Use the official UIDAI website or authorized Aadhaar service channels to access available services.",
      note:
        "Always verify that you are using an official service.",
    },
    {
      title: "Check Aadhaar Details",
      icon: <User size={28} />,
      description:
        "Users can use available Aadhaar services to check relevant information and service options.",
      note:
        "Enter your Aadhaar-related information carefully.",
    },
    {
      title: "Update Aadhaar Details",
      icon: <FileText size={28} />,
      description:
        "Depending on the type of update, users may be able to update eligible Aadhaar details through the applicable online or authorized service process.",
      note:
        "Some services may require a visit to an Aadhaar Seva Kendra.",
    },
    {
      title: "Verify Information",
      icon: <Search size={28} />,
      description:
        "Review the information entered during the service process before submitting a request.",
      note:
        "Make sure the information is accurate before continuing.",
    },
    {
      title: "Authentication and Verification",
      icon: <Lock size={28} />,
      description:
        "Some Aadhaar services may use authentication or verification methods as required by the service.",
      note:
        "Never share OTPs or authentication details with unknown people.",
    },
    {
      title: "Track Service Request",
      icon: <Search size={28} />,
      description:
        "After submitting an applicable request, use the available reference or acknowledgement details to check its status.",
      note:
        "Keep your acknowledgement or reference details safe.",
    },
    {
      title: "Follow Aadhaar Safety Practices",
      icon: <ShieldCheck size={28} />,
      description:
        "Protect your Aadhaar-related information and avoid sharing sensitive details with unknown websites, apps or people.",
      note:
        "Never share your OTP, password or other authentication information.",
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
            <ShieldCheck size={38} />
          </div>

          <span>AADHAAR PRACTICAL GUIDE</span>

          <h1>Aadhaar Services Practical Learning</h1>

          <p>
            Learn the basic Aadhaar service process
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

              <h2>Aadhaar Service Process</h2>
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

export default AadhaarPractical;