import { useEffect, useState } from "react";
import { getQuestions } from "../services/api";
import CodeWriteQuestion from "../components/CodeWriteQuestion";
import CodeMCQQuestion from "../components/CodeMCQQuestion";


export default function Questions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions().then(setQuestions);
  }, []);

  return (
    <div>
      <h1>Sorular</h1>

      {questions.map(q => (
        <div key={q.id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <p><b>{q.question}</b></p>

          {q.type === "code_mcq" && (
            <pre>{q.code}</pre>
          )}
        </div>
      ))}
    </div>
  );
}
