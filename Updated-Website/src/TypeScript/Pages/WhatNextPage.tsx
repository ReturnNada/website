import { Link } from "react-router";

import NavigationBar from "../NavBar";

function WhatNextPage() {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>
        What's Next?
      </h1>
      <Link to={"/Projects/"}>Back</Link>
    </div>
  );
}

export default WhatNextPage;
