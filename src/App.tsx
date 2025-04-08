import React from "react";
import "./App.css";
import BingoPickedNumbers from "./bingoPickedNumbers";
import Prize from "./components/prize";
import Ball from "./components/ball";

function App() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-5 grid-rows-5 gap-4 h-screen p-2">
        <div className="col-span-3 row-span-5">
          <BingoPickedNumbers />
        </div>
        <div className="col-span-2 col-start-4 flex items-center">
          <Prize />
        </div>
        <div className="col-span-2 row-span-4 col-start-4 row-start-2">
          <Ball />
        </div>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
