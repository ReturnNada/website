import { Link } from "react-router";

import NavigationBar from "../NavBar";

function QIRPage() {
  return (
    <div className="cardAnim">
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>QIR</h1>
      <Link to={"/website/Projects/"}>Back</Link>
    </div>
  );
}

export default QIRPage;
