import NavBar from "./NavBar";
import CardView from "./CardView";

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
        Welcome to Lucas R's domain
      </h1>
      <CardView></CardView>
    </>
  );
}

export default App;
