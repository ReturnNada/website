import "@google/model-viewer";
import { Link } from "react-router-dom";

import NavigationBar from "../NavBar";
import MSXV_CB_Breakout_Rev_1 from "../../MSXV_CB_Breakout_Rev_1/MSXV_CB_Breakout_Rev_1.glb";
import PCB_AntiSparkV3 from "../../PCB_AntiSparkV3/PCB_AntiSparkV3.glb";
import PCB_Battery_Tester from "../../PCB_Battery_Tester/PCB_Battery_Tester.glb";

const CircuitPage: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <h1
        style={{
          paddingTop: "100px",
          justifySelf: "center",
        }}
      >
        Circuits
      </h1>
      <br />
      <br />
      <model-viewer
        src={MSXV_CB_Breakout_Rev_1}
        alt="A 3D model"
        camera-controls
        style={{
          width: "33%",
          height: "300px",
          display: "inline-block",
        }}
      ></model-viewer>
      <h4
        style={{
          display: "inline-block",
          verticalAlign: "top",
          paddingLeft: "20px",
          paddingTop: "20px",
        }}
      >
        <u>Breakout Board</u>
        <p>Board</p>
      </h4>

      <br />
      <model-viewer
        src={PCB_AntiSparkV3}
        alt="A 3D model"
        camera-controls
        style={{
          width: "33%",
          height: "300px",
          display: "inline-block",
        }}
      ></model-viewer>
      <h4
        style={{
          display: "inline-block",
          verticalAlign: "top",
          paddingLeft: "20px",
          paddingTop: "20px",
        }}
      >
        <u>AntiSpark</u>
        <p>Board</p>
      </h4>
      <br />
      <model-viewer
        src={PCB_Battery_Tester}
        alt="A 3D model"
        camera-controls
        style={{
          width: "33%",
          height: "300px",
          display: "inline-block",
        }}
      ></model-viewer>
      <h4
        style={{
          display: "inline-block",
          verticalAlign: "top",
          paddingLeft: "20px",
          paddingTop: "20px",
        }}
      >
        <u>Battery Tester</u>
        <p>Board</p>
      </h4>
      <br />
      <Link to={"/website/Projects/"}>Back</Link>
    </>
  );
};

export default CircuitPage;
