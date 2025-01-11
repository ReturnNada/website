import "@google/model-viewer";
import MSXV_CB_Breakout_Rev_1 from "../../MSXV_CB_Breakout_Rev_1/MSXV_CB_Breakout_Rev_1.glb";

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
    </>
  );
};

export default CircuitPage;
