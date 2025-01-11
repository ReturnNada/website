import { Link } from "react-router";
import CardView from "../CardView";
import NavigationBar from "../NavBar";

function ProjectPage() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <h1
        style={{
          paddingTop: "100px",
          justifySelf: "center",
        }}
      >
        Projects
      </h1>
      <CardView></CardView>
      <footer
        style={{
          backgroundColor: "#ffffff",
          paddingBottom: 50,
          justifySelf: "center",
          flex: 1,
        }}
      >
        All Rights Reserved
      </footer>
      <Link to={"/website/"}>Back</Link>
    </>
  );
}

export default ProjectPage;
