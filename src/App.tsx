import React from "react";
import "./App.css";
import BingoPickedNumbers from "./bingoPickedNumbers";
import Prize from "./components/prize";
import Ball from "./components/ball";

function App() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-5 auto-rows-auto gap-4 h-screen p-2">
        {/* Prize - top on mobile, top-right on desktop */}
        <div className="flex items-center justify-center md:col-span-2 md:col-start-4">
          <Prize />
        </div>

        {/* Ball - just below Prize on mobile, below on right side on desktop */}
        <div className="flex items-center justify-center md:col-span-2 md:row-span-4 md:col-start-4 md:row-start-2">
          <Ball />
        </div>

        {/* Bingo Picked Numbers - full width on mobile, left side on desktop */}
        <div className="md:col-span-3 md:row-span-5">
          <BingoPickedNumbers />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
