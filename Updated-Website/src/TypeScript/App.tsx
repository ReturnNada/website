import { useState } from "react";
import ListGroup from "./ListGroup";
import NavBar from "./NavBar";
import CardView from "./CardView";

function App() {
  let items = ["Item1", "Item2", "Item3", "Item4", "Item5"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

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
