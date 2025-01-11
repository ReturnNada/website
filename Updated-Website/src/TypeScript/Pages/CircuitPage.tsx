import "@google/model-viewer";

const CircuitPage: React.FC = () => {
  return (
    <model-viewer
      src="/MSXV_CB_Breakout_Rev_1/MSXV_CB_Breakout_Rev_1.gltf?url"
      alt="A 3D model"
      auto-rotate
      camera-controls
    ></model-viewer>
  );
};

export default CircuitPage;
