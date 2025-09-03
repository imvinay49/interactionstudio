import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    header: "Welcome to the Home Page",
    subheader: "This is the home page of out React application.",
    imageURL:
      "https://www.northerntrailoutfitters.com/on/demandware.static/-/Library-Sites-NTO-SFRASharedLibrary/default/dwd9df3c9c/images/homepage/home-promo-01-800-600.png",
  });

  useEffect(() => {
    window.updateHome = setData;
  }, []);

  return (
    // <>
    //   <div className="home">
    //     <h1>Welcome to the Home Page</h1>
    //     <p>This is the home page of our React application.</p>
    //   </div>

    //   <img
    //     src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Library-Sites-NTO-SFRASharedLibrary/default/dwbc0ae950/AdobeStock_207497778.png"
    //     height="500px"
    //   />
    //   <button onClick={() => navigate("/about")}>Go to About Page</button>
    // </>

    <>
      <div className="home">
        <h1>
          <h1>{data.header}</h1>
          <p>{data.subheader}</p>
        </h1>
      </div>

      <div id="craousel">
        <img src={data.imageURL} height="500px" />
      </div>
      <button onClick={() => navigate("/about")}>Go to About Page</button>
      <div id="banner"></div>
    </>
  );
};

export default Home;
