import "../../App.css";
import NavigationBar from "../NavBar";

function WhatNextPage() {
  return (
    <>
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>
        What's Next?
      </h1>
      <br />
      <br />
      <p
        className="toppy projectText"
        style={{
          justifySelf: "center",
        }}
      >
        In the future, I would like to pursue opportunities in quantum
        computing, whether it be research opportunities under professors or
        professional work experience.
      </p>
    </>
  );
}

export default WhatNextPage;
