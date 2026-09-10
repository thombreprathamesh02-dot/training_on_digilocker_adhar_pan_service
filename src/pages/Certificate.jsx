import { useNavigate } from "react-router-dom";

function Certificate() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("registeredUser") || "{}"
  );

  const userEmail = user?.email || "guest";

  const quizCompleted =
    localStorage.getItem(
      `quizCompleted_${userEmail}`
    ) === "true";

  const score = Number(
    localStorage.getItem(
      `quizScore_${userEmail}`
    ) || 0
  );

  if (!quizCompleted) {
    return (
      <div className="certificate-page">
        <div className="certificate-card">
          <h1>Certificate Not Available</h1>

          <p>
            Please complete and pass the Final Quiz
            to get your certificate.
          </p>

          <button onClick={() => navigate("/quiz")}>
            Go to Final Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="certificate-page">
      <div className="certificate-card">

        <div className="certificate-icon">
          🏆
        </div>

        <p className="certificate-label">
          CERTIFICATE OF COMPLETION
        </p>

        <h1>Digital Services Training</h1>

        <p>This certificate is proudly presented to</p>

        <h2>{user?.name || "Learner"}</h2>

        <p>
          for successfully completing the training
          on
        </p>

        <h3>
          DigiLocker • Aadhaar • PAN
        </h3>

        <div className="certificate-score">
          Final Quiz Score: {score}/10
        </div>

        <p className="certificate-message">
          Congratulations on successfully completing
          the Digital Services Training.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>

      </div>
    </div>
  );
}

export default Certificate;