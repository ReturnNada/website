import { Link } from "react-router";

import NavigationBar from "../NavBar";
import "../../App.css";

function RobotPage() {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>Robot</h1>
      <br />
      <br />
      <p className="toppy">
        In my high school engineering class, LockHeed Martin would use their
        talent pool for recruiting us into their annual "E-Week" competition. It
        followed a similar format to VEX competitions, except for the fact that
        VEX competitions don't take place on the campus of a high-security
        aerospace company sponsored by the US Government. I was the lead
        programmer and did most of the wiring for our competition robot, which
        was able to handle simple tasks like motor driving and lifting with
        logic from an Arduino Uno. The spaghetti wiring, alligator-clip method
        of plugging in the lipo battery, and flashy shades ensured that if our
        robot went down, it would be in style (unfortunately it didn't).
      </p>
      <br />
      <br />
      <Link to={"/website/Projects/"}>Back</Link>
    </div>
  );
}

export default RobotPage;
