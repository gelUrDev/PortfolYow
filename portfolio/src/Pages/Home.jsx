import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import NavBar from "../Components/NavBar";
import RadialGradient from "../Components/DesignComponents/RadialGradient";
import PrimaryButton from "../Components/PrimaryButton";
import Services from "../Components/Services.jsx";
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
                <img
                  src="https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/527931502_770641445523861_7170122326929535224_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEPQd_Xuv8XTa-OWJEbwZoVEUZvMUg3W1gRRm8xSDdbWOLnmHZykzcCwrIuyP0F9DFv-FZrsQbl2WpNv4J5wdwF&_nc_ohc=ejsROD1U7VEQ7kNvwHVRfOq&_nc_oc=AdlT2n-xTUKJyx_PA7_fWGPd-lUkZSKDvu1XPc8Rj7VohhvTj-PoD-_ZObVSBt4wJy4&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=Pjcrz4BCu1c7sa8slxhqTQ&oh=00_AfnVTd2mTfEhci0He44qOjDSOBX2tyZTp_29I8giNqLdSg&oe=69488F15"
                  alt=""
                />
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
