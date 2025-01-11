import { Link } from "react-router";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function CircuitPage() {
  return (
    <div>
      <Canvas>
        <Suspense fallback={null}></Suspense>
      </Canvas>
      <Link to={"/website/"}>Back</Link>
    </div>
  );
}

export default CircuitPage;
