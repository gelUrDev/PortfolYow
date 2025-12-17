import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import NavBar from "../Components/NavBar";
import RadialGradient from "../Components/DesignComponents/RadialGradient";
import PrimaryButton from "../Components/PrimaryButton";
import Services from "../Components/Services.jsx"
import "./PagesStyle/Home.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="gradient">
      <RadialGradient height={"500px"} width={"500px"} />
    </div>
    <div className="gradient2">
      <RadialGradient height={"900px"} width={"1000px"} />
    </div>
    <NavBar />

    <div className="margin">
      <div className="heroSection">
        <div className="leftSection">
          <div className="greet">
            <h1>
              Hi, I'm <br /> Argel Balani
            </h1>
            <h2>
              Front-end Developer <span>& UI/UX Designer</span>
            </h2>
            <p>
              Creative and detail-oriented IT student passionate about building
              user-friendly, visually appealing, and responsive web experiences.
            </p>
            <div className="heroBtns">
              <PrimaryButton BtnTxt="Hire Me!" />
            </div>
            <hr className="thinLine" />
            <div className="greetInfo">
              <div className="study">
                <h2>3+</h2>
                <p>YEARS OF STUDY</p>
              </div>
              <div className="certs">
                <h2>3</h2>
                <p>CERTIFICATIONS</p>
              </div>
              <div className="elites">
                <h2>ELITES</h2>
                <p>OFFICER</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSection">
          <div className="heroImg">
            <div className="heroImg">
              <div className="heroImg">
                <img src="../src/assets/heroImg.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="serviceSection">
        <Services />
      </div>
    </div>
  </StrictMode>
);
