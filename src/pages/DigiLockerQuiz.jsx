import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function DigiLockerQuiz() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("registeredUser") || "{}"
  );

  const userEmail = user?.email || "guest";

  const questions = [
    {
      question: "What is the main purpose of DigiLocker?",
      options: [
        "Access digital documents",
        "Play online games",
        "Shop online",
        "Watch movies",
      ],
      answer: 0,
    },
    {
      question: "What can be accessed through DigiLocker?",
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
      question: "In what form are documents available in DigiLocker?",
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

  const handleAnswer = (index) => {
    setSelected(index);

    const correct =
      index === questions[current].answer;

    setTimeout(() => {
      if (current < questions.length - 1) {
        if (correct) {
          setScore((old) => old + 1);
        }

        setCurrent((old) => old + 1);
        setSelected(null);
      } else {
        const finalScore =
          score + (correct ? 1 : 0);

        setScore(finalScore);

        localStorage.setItem(
          `digilockerCompleted_${userEmail}`,
          finalScore >= 3 ? "true" : "false"
        );

        setFinished(true);
      }
    }, 500);
  };

  if (finished) {
    return (
      <div className="quiz-page">
        <div className="quiz-result">

          <h1>DigiLocker Quiz Completed 🎉</h1>

          <h2>
            Score: {score}/{questions.length}
          </h2>

          {score >= 3 ? (
            <>
              <p>
                Congratulations! You passed the
                DigiLocker quiz.
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
              <p>
                You need at least 3 correct answers.
              </p>

              <button
                className="quiz-dashboard-button"
                onClick={() => window.location.reload()}
              >
                Try Again
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

        <span>DIGILOCKER TRAINING</span>

        <h1>DigiLocker Quiz</h1>

        <p>
          Question {current + 1} of {questions.length}
        </p>

        <div className="quiz-progress">
          <div
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

        <h2>{question.question}</h2>

        <div className="quiz-options">

          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={
                selected === index
                  ? "quiz-option selected"
                  : "quiz-option"
              }
              disabled={selected !== null}
            >
              {String.fromCharCode(65 + index)}. {option}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}

export default DigiLockerQuiz;