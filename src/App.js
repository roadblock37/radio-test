import React from "react";
import ButtonContainer from "./components/buttonContainer";
import TileContainer from "./components/tileContainer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { defaultState } = useSelector((store) => store.hours);
  return (
    <section>
      <ButtonContainer />
      <TileContainer />
    </section>
  );
}

export default App;
