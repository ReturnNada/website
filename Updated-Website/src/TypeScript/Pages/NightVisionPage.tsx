import { Link } from "react-router";

import NavigationBar from "../NavBar";
import "../../App.css";

function NightVisionPage() {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>
        Night Vision
      </h1>
      <br />
      <br />
      <p className="toppy projectText">
        I got tired of needing to use a flashlight to see in the dark, so I
        decided to build a pair of Night Vision goggles using a Raspberry Pi
        Zero W, an IR camera, an LCD display, and a trusty hard hat. Uses python
        scripting.
      </p>
      <Link to={"/website/Projects/"}>Back</Link>
    </div>
  );
}

export default NightVisionPage;
