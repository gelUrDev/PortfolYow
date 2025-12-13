import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import NavBar from "../Components/NavBar";
import RadialGradient from "../Components/DesignComponents/RadialGradient";

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
      {/* Hero txt */}
      <div className="greet">
        <h1>
          Hi, I'm <br /> Argel Balani
        </h1>
        <h2>
        Front-end Developer <span>& UI/UX Designer</span>
      </h2>
      <p>
        Creative and detail-oriented IT student
         passionate about building user-friendly, 
         visually appealing, and responsive web experiences.
      </p>
      </div>
      
    </div>
  </StrictMode>
);
