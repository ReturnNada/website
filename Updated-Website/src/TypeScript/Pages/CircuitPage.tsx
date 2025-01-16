import "@google/model-viewer";

import NavigationBar from "../NavBar";
import MSXV_CB_Breakout_Rev_1 from "../../MSXV_CB_Breakout_Rev_1/MSXV_CB_Breakout_Rev_1.glb";
import PCB_AntiSparkV3 from "../../PCB_AntiSparkV3/PCB_AntiSparkV3.glb";
import PCB_Battery_Tester from "../../PCB_Battery_Tester/PCB_Battery_Tester.glb";

const CircuitPage: React.FC = () => {
  return (
    <div
      className="cardAnim"
      style={{
        height: "125vh",
      }}
    >
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
          height: "250px",
          float: "right",
        }}
      ></model-viewer>
      <h4
        style={{
          verticalAlign: "top",
          paddingLeft: "20px",
          paddingTop: "20px",
        }}
      >
        <u>Breakout Board</u>
        <p>
          Allows for another board hosting an STM32 to interface with other
          electronic components, in a fashion simmilar to the arduino boards.
          This ensures the team knows that the other board would interface
          properly in the final design.
        </p>
      </h4>
      <br />
      <br />
      <br />
      <model-viewer
        src={PCB_AntiSparkV3}
        alt="A 3D model"
        camera-controls
        style={{
          width: "33%",
          height: "250px",
          float: "right",
        }}
      ></model-viewer>
      <h4
        style={{
          verticalAlign: "top",
          paddingLeft: "20px",
          paddingTop: "20px",
        }}
      >
        <u>AntiSpark</u>
        <p>
          Prevents sparking when plugging in a battery, which is necessary due
          to the 10s6p design we chose for it. Set a new safety standard for
          operation.
        </p>
      </h4>
      <br />
      <br />
      <br />
      <br />
      <model-viewer
        src={PCB_Battery_Tester}
        alt="A 3D model"
        camera-controls
        style={{
          width: "33%",
          height: "250px",
          float: "right",
        }}
      ></model-viewer>
      <h4
        style={{
          verticalAlign: "top",
          paddingLeft: "20px",
          paddingTop: "20px",
        }}
      >
        <u>Battery Tester</u>
        <p>
          Set a new voltage testing standard for the batteries used in the car's
          alternate power source. Prevents faulty batteries from being
          erroneously used.
        </p>
      </h4>
    </div>
  );
};

export default CircuitPage;
