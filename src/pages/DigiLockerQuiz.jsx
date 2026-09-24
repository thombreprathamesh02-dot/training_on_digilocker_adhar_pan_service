import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, RotateCcw } from "lucide-react";

function DigiLockerQuiz() {
  const navigate = useNavigate();

  // Get registered user
  const user = JSON.parse(
    localStorage.getItem("registeredUser") || "{}"
  );

  const userEmail = user?.email || "guest";

  // DigiLocker Quiz Questions
  const questions = [
    {
      question: "What is the main purpose of DigiLocker?",
      options: [
        "Accessing digital documents",
        "Playing online games",
        "Shopping online",
        "Watching movies",
      ],
      answer: 0,
    },

    {
      question: "What can users access through DigiLocker?",
      options: [
        "Digital documents",
        "Food items",
        "Clothes",
        "Furniture",
      ],
      answer: 0,
    },

    {
      question: "What type of service is DigiLocker?",
      options: [
        "Digital document service",
        "Gaming service",
        "Music service",
        "Shopping service",
      ],
      answer: 0,
    },

    {
      question: "What is important when using DigiLocker?",
      options: [
        "Account security",
        "Game score",
        "Shopping cart",
        "Movie ticket",
      ],
      answer: 0,
    },

    {
      question: "In what form are documents available through DigiLocker?",
      options: [
        "Digital form",
        "Food form",
        "Clothing form",
        "Furniture form",
      ],
      answer: 0,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  // Handle answer
  const handleAnswer = (index) => {
    setSelected(index);

    const correct =
      index === questions[current].answer;

    setTimeout(() => {
      if (current < questions.length - 1) {
        if (correct) {
          setScore((oldScore) => oldScore + 1);
        }

        setCurrent((oldCurrent) => oldCurrent + 1);
        setSelected(null);
      } else {
        const finalScore =
          score + (correct ? 1 : 0);

        setScore(finalScore);

        // Module is completed only if score is 3 or more
        localStorage.setItem(
          `digilockerCompleted_${userEmail}`,
          finalScore >= 3 ? "true" : "false"
        );

        setFinished(true);
      }
    }, 500);
  };

  // Quiz Result
  if (finished) {
    return (
      <div className="quiz-page">

        <div className="quiz-result">

          {score >= 3 ? (
            <>
              <CheckCircle
                size={55}
                className="quiz-success-icon"
              />

              <h1>
                DigiLocker Quiz Completed
              </h1>

              <h2>
                Score: {score}/{questions.length}
              </h2>

              <p>
                Congratulations! You have successfully
                passed the DigiLocker quiz.
              </p>

              <p>
                Your DigiLocker training module has been
                marked as completed.
              </p>

              <button
                className="quiz-dashboard-button"
                onClick={() => navigate("/dashboard")}
              >
                Go to Dashboard
                <ArrowRight size={18} />
              </button>
            </>
          ) : (
            <>
              <h1>
                Quiz Completed
              </h1>

              <h2>
                Score: {score}/{questions.length}
              </h2>

              <p>
                You need at least 3 correct answers
                to pass the DigiLocker quiz.
              </p>

              <button
                className="quiz-retry-button"
                onClick={() => window.location.reload()}
              >
                <RotateCcw size={18} />
                Try Again
              </button>

              <button
                className="quiz-dashboard-button"
                onClick={() => navigate("/dashboard")}
              >
                Back to Dashboard
                <ArrowRight size={18} />
              </button>
            </>
          )}

        </div>

      </div>
    );
  }

  const question = questions[current];

  return (
    <div className="quiz-page">

      <div className="quiz-box">

        {/* Quiz Header */}
        <span>
          DIGILOCKER TRAINING
        </span>

        <h1>
          DigiLocker Quiz
        </h1>

        <p>
          Test your knowledge of DigiLocker
          digital services.
        </p>

        <p>
          Question {current + 1} of {questions.length}
        </p>


        {/* Progress Bar */}
        <div className="quiz-progress">

          <div
            style={{
              width: `${
                ((current + 1) /
                  questions.length) *
                100
              }%`,
            }}
          ></div>

        </div>


        {/* Question */}
        <h2>
          {question.question}
        </h2>


        {/* Options */}
        <div className="quiz-options">

          {question.options.map(
            (option, index) => (

              <button
                key={index}
                onClick={() =>
                  handleAnswer(index)
                }
                className={
                  selected === index
                    ? "quiz-option selected"
                    : "quiz-option"
                }
                disabled={
                  selected !== null
                }
              >
                {String.fromCharCode(
                  65 + index
                )}
                . {option}
              </button>

            )
          )}

        </div>

      </div>

    </div>
  );
}

export default DigiLockerQuiz;