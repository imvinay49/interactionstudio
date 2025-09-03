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

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Library-Sites-NTO-SFRASharedLibrary/default/dwd9df3c9c/images/homepage/home-promo-01-800-600.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Library-Sites-NTO-SFRASharedLibrary/default/dwa2d9f633/images/homepage/home-new-styles-hero-450-600@2x.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default About;
