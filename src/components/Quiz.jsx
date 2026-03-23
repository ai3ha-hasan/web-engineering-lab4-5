import { useState } from 'react';

const questions = [
  { q: "React is a...?", a: "Library", options: ["Library", "Framework"] },
  { q: "UseState is a...?", a: "Hook", options: ["Class", "Hook"] }
];

export default function Quiz() {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAns = (opt) => {
    if (opt === questions[idx].a) setScore(score + 1);
    if (idx + 1 < questions.length) setIdx(idx + 1);
    else setFinished(true);
  };

  if (finished) return <h3>Quiz Over! Score: {score}/{questions.length}</h3>;

  return (
    <div style={{ padding: '20px', border: '1px solid orange' }}>
      <h2>7. Quiz App</h2>
      <p>{questions[idx].q}</p>
      {questions[idx].options.map(opt => (
        <button key={opt} onClick={() => handleAns(opt)} style={{ margin: '5px' }}>{opt}</button>
      ))}
    </div>
  );
}