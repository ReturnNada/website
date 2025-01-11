import "@google/model-viewer";
import MSXV_CB_Breakout_Rev_1 from "../../MSXV_CB_Breakout_Rev_1/MSXV_CB_Breakout_Rev_1.glb";
import PCB_AntiSparkV3 from "../../PCB_AntiSparkV3/PCB_AntiSparkV3.glb";
import PCB_Battery_Tester from "../../PCB_Battery_Tester/PCB_Battery_Tester.glb";

const CircuitPage: React.FC = () => {
  return (
    <>
      <h1>Circuits</h1>
      <model-viewer
        src={MSXV_CB_Breakout_Rev_1}
        alt="A 3D model"
        camera-controls
        style={{
          width: "33%",
        }}
      ></model-viewer>
      <model-viewer
        src={PCB_AntiSparkV3}
        alt="A 3D model"
        camera-controls
        style={{
          width: "33%",
        }}
      ></model-viewer>
      <model-viewer
        src={PCB_Battery_Tester}
        alt="A 3D model"
        camera-controls
        style={{
          width: "33%",
        }}
      ></model-viewer>
    </>
  );
};

export default CircuitPage;
