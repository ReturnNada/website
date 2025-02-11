import NavigationBar from "../NavBar";
import "../../App.css";
import Robot1 from "../../assets/Robot1.jpg";

function RobotPage() {
  return (
    <div className="cardAnim">
      <NavigationBar />
      <h1 style={{ textAlign: "center", paddingTop: "100px" }}>Robot</h1>
      <br />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img
          src={Robot1}
          style={{
            width: "66vh",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
      <br />
      <p
        className="toppy projectText"
        style={{
          width: "66%",
          justifySelf: "center",
          paddingBottom: "50px",
        }}
      >
        In my high school engineering class, LockHeed Martin would use their
        talent pool for recruiting us into their annual "E-Week" competition. It
        followed a similar format to VEX competitions, except for the fact that
        VEX competitions don't take place on the campus of a high-security
        aerospace company sponsored by the US Government. I was the lead
        programmer and did most of the wiring for our competition robot, which
        was able to handle simple tasks like motor driving and lifting with
        logic from an Arduino Uno. The spaghetti wiring, alligator-clip method
        of plugging in the lipo battery, and flashy shades ensured that if our
        robot went down, it would be in style (it didn't).
      </p>
    </div>
  );
}

export default RobotPage;
