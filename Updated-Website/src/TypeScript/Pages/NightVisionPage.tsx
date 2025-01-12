import { Link } from "react-router";

import NavigationBar from "../NavBar";

function NightVisionPage() {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>
        Night Vision
      </h1>
      <Link to={"/website/Projects/"}>Back</Link>
    </div>
  );
}

export default NightVisionPage;
