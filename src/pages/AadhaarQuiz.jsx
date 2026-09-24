import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function AadhaarQuiz() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("registeredUser") || "{}"
  );

  const userEmail = user?.email || "guest";

  const questions = [
    {
      question: "How many digits are there in an Aadhaar number?",
      options: ["10", "12", "14", "16"],
      answer: 1,
    },
    {
      question: "Which organization is associated with Aadhaar services?",
      options: ["UIDAI", "RBI", "ISRO", "IRDAI"],
      answer: 0,
    },
    {
      question: "What can Aadhaar be used for?",
      options: [
        "Identity verification",
        "Online gaming",
        "Movie booking",
        "Shopping",
      ],
      answer: 0,
    },
    {
      question: "What type of information can be updated in Aadhaar through supported services?",
      options: [
        "Certain personal details",
        "Game score",
        "Movie rating",
        "Shopping cart",
      ],
      answer: 0,
    },
    {
      question: "What is Aadhaar?",
      options: [
        "A unique identification number",
        "A bank account",
        "A driving licence",
        "A shopping card",
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
          `aadhaarCompleted_${userEmail}`,
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

          <h1>Aadhaar Quiz Completed 🎉</h1>

          <h2>
            Score: {score}/{questions.length}
          </h2>

          {score >= 3 ? (
            <>
              <p>
                Congratulations! You passed the Aadhaar quiz.
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

        <span>AADHAAR TRAINING</span>

        <h1>Aadhaar Quiz</h1>

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

export default AadhaarQuiz;