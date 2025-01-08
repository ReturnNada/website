import NavBar from "../NavBar";
import CardView from "../CardView";
{
  /*
  Add: 
  -GitHub/LinkedIn logos
  -Routing
  -Footer
*/
}

function App() {
  return (
    <>
      <NavBar></NavBar>
      <h1
        style={{
          paddingTop: 100,
          justifySelf: "center",
        }}
      >
        Welcome
      </h1>
      <h1
        style={{
          justifySelf: "center",
        }}
      >
        to Lucas R's domain
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
    </>
  );
}

export default App;
