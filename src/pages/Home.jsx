import { Link } from "react-router-dom";
import {
  FileText,
  ShieldCheck,
  CreditCard,
  ArrowRight,
} from "lucide-react";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">
            DIGITAL SERVICES TRAINING
          </span>

          <h1>
            Learn Digital Services
            <br />
            <span>Simply & Easily</span>
          </h1>

          <p>
            Learn how to use DigiLocker, Aadhaar and PAN
            related digital services through our simple
            step-by-step training portal.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-btn">
              Start Training
              <ArrowRight size={20} />
            </Link>

            <Link to="/login" className="secondary-btn">
              Login
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <ShieldCheck size={70} />

          <h2>Digital Seva</h2>

          <p>
            Your Digital Services
            Training Partner
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="section-title">
          <span>OUR TRAINING</span>

          <h2>
            Learn Important Digital Services
          </h2>

          <p>
            Get basic knowledge about commonly used
            digital government services.
          </p>
        </div>

        <div className="service-grid">

          {/* DigiLocker */}
          <div className="service-card">
            <div className="icon">
              <FileText size={35} />
            </div>

            <h3>DigiLocker</h3>

            <p>
              Learn about DigiLocker and how digital
              documents can be accessed and managed.
            </p>

            <Link to="/digilocker">
              Learn More <ArrowRight size={18} />
            </Link>
          </div>

          {/* Aadhaar */}
          <div className="service-card">
            <div className="icon">
              <ShieldCheck size={35} />
            </div>

            <h3>Aadhaar Services</h3>

            <p>
              Learn about Aadhaar related services,
              updates and important information.
            </p>

            <Link to="/aadhaar">
              Learn More <ArrowRight size={18} />
            </Link>
          </div>

          {/* PAN */}
          <div className="service-card">
            <div className="icon">
              <CreditCard size={35} />
            </div>

            <h3>PAN Services</h3>

            <p>
              Learn about PAN application, correction
              and other important PAN related services.
            </p>

            <Link to="/pan">
              Learn More <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Start Your Training?</h2>

        <p>
          Register now and start learning digital services.
        </p>

        <Link to="/register" className="primary-btn">
          Register Now
          <ArrowRight size={20} />
        </Link>
      </section>

    </div>
  );
}

export default Home;