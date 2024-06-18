import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
function App() {
  return (
    <div className="container">
      <Avatar />
      <Info />
      {skills.map((sk) => (
        <Skills skillObj={sk} key={sk.skill} />
      ))}
    </div>
  );
}
function Avatar() {
  return <img className="img" alt="mohamed mahmoud" src="pic/mohamed-1.jpg" />;
}
function Info() {
  return (
    <div className="info">
      <h2>Mohamed Mahmoud</h2>
      <p>
        Front-End Engineer Looking for opportunity as React Web-Developer , my hobbies are playing football ,lifting weights
        and travelling
      </p>
    </div>
  );
}
function Skills({ skillObj }) {
  console.log(skillObj);
  return (
    <div className="skills">
      <button className="skills btn" style={{ background: skillObj.color }}>
        {skillObj.skill}
        <span>{skillObj.level === "advanced" ? " 💪" : skillObj.level === "intermediate" ? " 👍" : " 👶"}</span>
      </button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
