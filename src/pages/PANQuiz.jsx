import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PANQuiz() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("registeredUser") || "{}"
  );

  const userEmail = user?.email || "guest";

  const questions = [
    {
      question: "PAN चा full form काय आहे?",
      options: [
        "Permanent Account Number",
        "Personal Account Number",
        "Public Account Number",
        "Private Account Number",
      ],
      answer: 0,
    },
    {
      question: "PAN मध्ये किती characters असतात?",
      options: ["8", "10", "12", "14"],
      answer: 1,
    },
    {
      question: "PAN कोणत्या विभागाकडून जारी केला जातो?",
      options: [
        "Income Tax Department",
        "Railway Department",
        "Education Department",
        "Sports Department",
      ],
      answer: 0,
    },
    {
      question: "PAN चा उपयोग मुख्यतः कशासाठी होतो?",
      options: [
        "Tax-related work",
        "Online gaming",
        "Movie booking",
        "Food ordering",
      ],
      answer: 0,
    },
    {
      question: "PAN कोणत्या प्रकारचा number आहे?",
      options: [
        "Alphanumeric",
        "Only numeric",
        "Only alphabetic",
        "Decimal number",
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
          `panCompleted_${userEmail}`,
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

          <h1>PAN Quiz Completed 🎉</h1>

          <h2>
            Score: {score}/{questions.length}
          </h2>

          {score >= 3 ? (
            <>
              <p>
                Congratulations! You passed the PAN quiz.
              </p>

              <button
                onClick={() => navigate("/dashboard")}
              >
                Go to Dashboard
              </button>
            </>
          ) : (
            <>
              <p>
                You need at least 3 correct answers.
              </p>

              <button
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

        <span>PAN TRAINING</span>

        <h1>PAN Quiz</h1>

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

export default PANQuiz;