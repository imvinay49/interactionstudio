import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of our React application.</p>
      </div>

      <img
        src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Library-Sites-NTO-SFRASharedLibrary/default/dwbc0ae950/AdobeStock_207497778.png"
        height="500px"
      />
      <button onClick={() => navigate("/about")}>Go to About Page</button>
    </>
  );
};

export default Home;
