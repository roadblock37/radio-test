import React from "react";
import TileContainer from "./components/tileContainer";
import Employee from "./components/employee";

function App() {
  return (
    <section className="tile-grid">
      <Employee />
      <TileContainer />
    </section>
  );
}

export default App;
