import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Avatar />
      <Info />
      <Skills emoji1="💪" emoji2="👍" emoji3="👶" />
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
        Front-End Web Developer Looking for opportunity as React engineer , my hobbies playing football ,lifting weights and
        travelling
      </p>
    </div>
  );
}
function Skills(props) {
  return (
    <div className="skills">
      <button className="btn btn-1">HTML+CSS {props.emoji1}</button>
      <button className="btn btn-2">JavaScript {props.emoji1}</button>
      <button className="btn btn-3">Web Design {props.emoji1}</button>
      <button className="btn btn-4">Git and GitHup {props.emoji2}</button>
      <button className="btn btn-5">React {props.emoji2}</button>
      <button className="btn btn-6">Sevelt {props.emoji3}</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
