import { Link } from "react-router";
import NavigationBar from "../NavBar";

function HitboxPage() {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>HitBox</h1>
      <Link to={"/website/Projects/"}>Back</Link>
    </div>
  );
}

export default HitboxPage;
