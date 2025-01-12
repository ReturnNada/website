import { Link } from "react-router";

import NavigationBar from "../NavBar";

function RobotPage() {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>Robot</h1>
      <Link to={"/website/Projects/"}>Back</Link>
    </div>
  );
}

export default RobotPage;
