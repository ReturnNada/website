import { Link } from "react-router";
import NavigationBar from "../NavBar";
import "../../App.css";

function HitboxPage() {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>(s)HitBox</h1>
      <br />
      <br />
      <p className="toppy projectText">
        Some players in the fighting game community prefer to compete with
        controllers following a box format, so I decided to make a custom one of
        my own to see if I liked it. Using a raspberry pi pico, the leftover
        cardboard packaging of a CASIO calculator, a plastic container, 20
        keycaps, tape, failed solders, and prayers, this device is
        cross-compatible with the Nintendo Switch and Computers for Smash
        Ultimate and Melee, respectively.
      </p>
      <br />
      <br />
      <Link to={"/website/Projects/"}>Back</Link>
    </div>
  );
}

export default HitboxPage;
