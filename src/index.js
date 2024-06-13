import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Avatar />
      <Info />
      <Skills />
    </div>
  );
}
function Avatar() {
  return <img className="img" alt='mohamed mahmoud'src="pic/mohamed-1.jpg" />;
}
function Info() {
  return (
    <div className="info">
      <h2>Mohamed Mahmoud</h2>
      <p>
        Front-End Web Developer Looking for opportunity as React engineer , my hobbies playing football ,lifting weights and
        travelling 
      </p>
    </div>
  );
}
function Skills() {
  return (
    <div className="skills">
      <button className="btn btn-1">HTML+CSS 💪</button>
      <button className="btn btn-2">JavaScript 💪</button>
      <button className="btn btn-3">Web Design 💪</button>
      <button className="btn btn-4">Git and GitHup 👍</button>
      <button className="btn btn-5">React 👍</button>
      <button className="btn btn-6">Sevelt 👶</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
