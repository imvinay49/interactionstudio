import React from "react";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        <h1>Welcome to the Content Page</h1>
        <p>This is the content page of our React application.</p>
      </div>
      <button onClick={() => navigate("/")}>Go to Home Page</button>
      <button onClick={() => navigate("/about")}>Go to About Page</button>
    </>
  );
};

export default Content;
