import { useEffect, useState } from "react";
import { getQuestions } from "../services/api";
import CodeWriteQuestion from "../components/CodeWriteQuestion";
import CodeMCQQuestion from "../components/CodeMCQQuestion";


export default function Questions() {
const [questions, setQuestions] = useState([]);


useEffect(() => {
getQuestions().then(setQuestions).catch(console.error);
}, []);


return (
<div>
<h1>Sorular</h1>
{questions.map(q => {
if (q.type === "code_write") return <CodeWriteQuestion key={q.id} data={q} />;
if (q.type === "code_mcq") return <CodeMCQQuestion key={q.id} data={q} />;
return null;
})}
</div>
);
}
