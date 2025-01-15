import { Link } from "react-router";

import NavigationBar from "../NavBar";
import "../../App.css";

function SketcheePage() {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>Sketchee</h1>
      <br />
      <br />
      <p className="toppy projectText">
        The biggest issue plaguing the art industry is artist's block,
      </p>
      <Link to={"/website/Projects/"}>Back</Link>
    </div>
  );
}

export default SketcheePage;
