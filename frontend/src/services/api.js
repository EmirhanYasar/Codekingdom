const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3000";


export async function getQuestions() {
const res = await fetch(`${API_BASE}/api/questions`);
if (!res.ok) throw new Error("Failed to fetch questions");
return res.json();
}
export async function getQuestions() {
  const res = await fetch("http://localhost:3000/api/questions");
  return res.json();
}
