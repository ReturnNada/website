import NavigationBar from "../NavBar";
import CQ24 from "../../assets/CQ24.jpg";
import outsideWaterloo from "../../assets/outsideWaterloo.jpg";

import "../../App.css";

function AboutPage() {
  return (
    <div>
      <NavigationBar />
      <h1
        style={{
          paddingTop: "100px",
        }}
        className="toppy"
      >
        About
      </h1>
      <br />
      <br />
      <img
        src={outsideWaterloo}
        style={{
          width: "33%",
          float: "right",
          height: "auto",
        }}
        className="toppy"
      />
      <img
        src={CQ24}
        style={{
          width: "33%",
          float: "right",
        }}
        className="toppy"
      />
      <p
        className="toppy"
        style={{
          fontSize: "24px",
        }}
      >
        I'm Lucas Robson, a Candidate for Bachelor of Applied Science in
        Computer Engineering at the Universtiy of Waterloo. Wanting to get
        involved with projects that were hardware-based, I participated in two
        design teams, and experimented with different microcontrollers, giving
        me ample experience in the circuit manufacturing and implementation
        processes (you can read more about these experiences in the "Projects"
        Page). In the future, I'd like to get involved in the field of Quantum
        Computing, specifically with the hardware implementation methods of
        qubit logic. Feel free to contact me using the Dashboard above!
      </p>
    </div>
  );
}

export default AboutPage;
