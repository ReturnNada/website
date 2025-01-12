import { Link } from "react-router";

import NavigationBar from "../NavBar";

function NoiseDetectorPage() {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>
        Noise Detector
      </h1>
      <Link to={"/Projects/"}>Back</Link>
    </div>
  );
}

export default NoiseDetectorPage;
