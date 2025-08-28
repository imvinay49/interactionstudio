import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="about">
        <h1>Welcome to the About Page</h1>
        <p>This is the about page of our React application.</p>
      </div>
      <button onClick={() => navigate("/content")}>Go to Content Page</button>
      <button onClick={() => navigate("/")}>Go to Home Page</button>
    </>
  );
};

export default About;
