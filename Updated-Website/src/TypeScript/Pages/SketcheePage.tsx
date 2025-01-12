import { Link } from "react-router";

import NavigationBar from "../NavBar";

function SketcheePage() {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>Sketchee</h1>
      <Link to={"/website/Projects/"}>Back</Link>
    </div>
  );
}

export default SketcheePage;
