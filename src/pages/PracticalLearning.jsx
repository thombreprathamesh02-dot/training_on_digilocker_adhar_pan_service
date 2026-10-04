import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  FolderLock,
  ShieldCheck,
  CreditCard,
  CheckCircle,
} from "lucide-react";

function PracticalLearning() {
  const guides = [
    {
      title: "DigiLocker Practical Guide",
      description:
        "Learn the basic process of using DigiLocker and accessing digital documents.",
      icon: <FolderLock size={30} />,
      path: "/digilocker-practical",
    },
    {
      title: "Aadhaar Services Guide",
      description:
        "Understand the basic process of using common Aadhaar online services.",
      icon: <ShieldCheck size={30} />,
      path: "/aadhaar-practical",
    },
    {
      title: "PAN Services Guide",
      description:
        "Learn the basic steps involved in common PAN-related online services.",
      icon: <CreditCard size={30} />,
      path: "/pan-practical",
    },
  ];

  return (
    <div className="professional-dashboard">

      <section className="dashboard-header">

        <div>
          <span className="dashboard-badge">
            DIGITAL SEVA TRAINING PORTAL
          </span>

          <h1>Practical Learning</h1>

          <p>
            Learn how to use important digital services
            through simple step-by-step guides.
          </p>
        </div>

        <Link
          to="/dashboard"
          className="profile-button"
        >
          <ArrowLeft size={18} />
          Dashboard
        </Link>

      </section>


      <section className="training-modules-section">

        <div className="section-heading">

          <div>
            <span className="section-label">
              STEP-BY-STEP GUIDES
            </span>

            <h2>Digital Service Guides</h2>

            <p>
              Select a service to learn its basic
              process and safe usage.
            </p>
          </div>

        </div>


        <div className="training-modules-grid">

          {guides.map((guide) => (

            <div
              className="training-module-card"
              key={guide.title}
            >

              <div className="module-icon">
                {guide.icon}
              </div>

              <span className="module-number">
                PRACTICAL GUIDE
              </span>

              <h3>
                {guide.title}
              </h3>

              <p>
                {guide.description}
              </p>

              <div className="module-status">
                <span>
                  Step-by-step learning
                </span>

                <CheckCircle size={19} />
              </div>

              <Link
                to={guide.path}
                className="module-button"
              >
                Start Guide
                <ArrowRight size={18} />
              </Link>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default PracticalLearning;