import { Link } from "react-router-dom";
import {
  GraduationCap,
  ShieldCheck,
  Mail,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-about">

          <div className="footer-brand">
            <div className="footer-logo">
              <GraduationCap size={23} />
            </div>

            <div>
              <strong>Digital Seva</strong>
              <span>Training Portal</span>
            </div>
          </div>

          <p>
            A training platform to learn about
            DigiLocker, Aadhaar and PAN services
            through simple digital learning modules.
          </p>

        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/certificate">Certificate</Link>

        </div>

        {/* Training */}
        <div className="footer-column">

          <h3>Training</h3>

          <Link to="/digilocker">DigiLocker</Link>
          <Link to="/aadhaar">Aadhaar</Link>
          <Link to="/pan">PAN Services</Link>

        </div>

        {/* Safety */}
        <div className="footer-column">

          <h3>Important</h3>

          <div className="footer-safety">
            <ShieldCheck size={18} />
            <span>Digital Safety</span>
          </div>

          <div className="footer-safety">
            <Mail size={18} />
            <span>Training Support</span>
          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Digital Seva Training Portal
        </p>

        <p>
          Educational Project
        </p>

      </div>

    </footer>
  );
}

export default Footer;