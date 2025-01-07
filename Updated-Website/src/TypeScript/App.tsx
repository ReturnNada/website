import { useState } from "react";
import ListGroup from "./ListGroup";
import NavBar from "./NavBar";

function App() {
  let items = ["Item1", "Item2", "Item3", "Item4", "Item5"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <NavBar></NavBar>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
