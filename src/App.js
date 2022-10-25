import React from "react";
import Button from "./components/button";
import TileContainer from "./components/tileContainer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { defaultState } = useSelector((store) => store.hours);
  return (
    <section>
      <Button />
      <TileContainer />
    </section>
  );
}

export default App;
