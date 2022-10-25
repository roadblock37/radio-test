import React from "react";
import { useState } from "react";
import Button from "./components/button";
import Tile from "./components/tile";
import Data from "./data";
import TileContainer from "./components/tileContainer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { defaultState } = useSelector((store) => store.hours);
  return (
    <section>
      <TileContainer />
    </section>
  );
}

export default App;
