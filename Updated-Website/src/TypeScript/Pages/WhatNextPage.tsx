import "../../App.css";
import NavigationBar from "../NavBar";

function WhatNextPage() {
  return (
    <div className="cardAnim">
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
        professional work experience. Currently, I want to continue creating
        things that implement custom PCB design and coding, with some potential
        projects being a Vinyl Record Player, a functioning Spartan Laser
        replica (non-lethal, trust me), and a lamp with a dual-function as a
        projector.
      </p>
    </div>
  );
}

export default WhatNextPage;
