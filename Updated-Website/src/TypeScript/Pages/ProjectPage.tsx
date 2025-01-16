import CardView from "../CardView";
import NavigationBar from "../NavBar";

function ProjectPage() {
  return (
    <div
      style={{
        backgroundColor: "#ebeff5",
      }}
    >
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
          paddingBottom: 50,
          justifySelf: "center",
          flex: 1,
        }}
      >
        All Rights Reserved
      </footer>
    </div>
  );
}

export default ProjectPage;
