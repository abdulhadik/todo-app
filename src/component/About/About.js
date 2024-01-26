import React from "react";
import './about.css';
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="header"><header>
            <Link to="/todoapp">TODO.APP</Link>
            
          </header>
    <div className="about-Div">
      <h1>About TODO APP</h1>
      <p>
        A to-do app, short for a to-do list application, is a software tool that
        helps users manage and organize their tasks and activities. These
        applications are designed to increase productivity and assist
        individuals in keeping track of what needs to be done.
      </p>
    </div>
    </div>
  );
}
export default About;
