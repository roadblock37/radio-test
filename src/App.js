import React from "react";
import { useState } from "react";
import Button from "./components/button";
import Tile from "./components/tile";
import Data from "./data";

function App() {
  const [hours, setHours] = useState(Data);
  return (
    <>
      <Tile hours={hours} />
    </>
  );
}

export default App;
