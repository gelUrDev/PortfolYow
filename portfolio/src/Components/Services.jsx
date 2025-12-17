import "./ComponentStyle/Services.css";
import Card from "./Card.jsx";

function Services() {
  return (
    <div className="services">
      <div className="topCont">
        <p>WHAT I DO</p>
        <h1>My Services</h1>
      </div>
      <div className="cardCont">
        <div className="serviceCard">
          <div className="logo"></div>
          <div className="texts">
            <h3>Front-end Development</h3>
            <p>
              Building responsive and interactive websites using HTML, CSS,
              JavaScript, and React JS tailored to your needs.
            </p>
          </div>
        </div>
        <div className="serviceCard">
          <div className="logo"></div>
          <div className="texts">
            <h3>UI/UX</h3>
            <p>
              Building responsive and interactive websites using HTML, CSS,
              JavaScript, and React JS tailored to your needs.
            </p>
          </div>
        </div>
        <div className="serviceCard">
          <div className="logo"></div>
          <div className="texts">
            <h3>Graphic Design</h3>
            <p>
              Building responsive and interactive websites using HTML, CSS,
              JavaScript, and React JS tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
