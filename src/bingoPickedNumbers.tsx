import React from "react";
import useStore from "../src/store/store";
import { motion } from "framer-motion";
const BingoPickedNumbers = () => {
  const { bingoPickedNumbers } = useStore();

  // Function to get the color based on the bingo letter
  const getBingoColor = (letter: string): string => {
    switch (letter) {
      case "B":
        return "#1E90FF"; // Blue
      case "I":
        return "#FF4500"; // Red
      case "N":
        return "#000000"; // Black
      case "G":
        return "#32CD32"; // Green
      case "O":
        return "#FFD700"; // Yellow
      default:
        return "#FFFFFF";
    }
  };

  // Function to check if a number has been picked
  const isNumberPicked = (number: number) => {
    return bingoPickedNumbers.some((item) => item.bingoNumber === number);
  };

  // Function to render numbers for each Bingo letter column
  const renderNumbers = (start: number, end: number, letter: string) => {
    const color = getBingoColor(letter); // Get the color for the column (B, I, N, G, O)
    const numbers = [];
    for (let i = start; i <= end; i++) {
      const isPicked = isNumberPicked(i);
      numbers.push(
        <div key={i} className="flex w-full justify-center">
          <motion.div
            className={`w-10 h-10 flex items-center justify-center rounded-full text-black ${
              isPicked ? `bg-${color} text-white` : "bg-transparent"
            }`}
            style={isPicked ? { backgroundColor: color } : {}}
            initial={{ opacity: 0, scale: 0 }} // Initial state for animation
            animate={{ opacity: 1, scale: 1 }} // Final state after animation
            transition={{ duration: 0.5 }} // Animation duration
          >
            {i}
          </motion.div>
        </div>
      );
    }
    return numbers;
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {/* B column */}
      <div className="p-2">
        <div
          className="text-4xl text-center font-bold text-white"
          style={{ backgroundColor: "#1E90FF" }}
        >
          B
        </div>
        <div className="grid grid-cols-1 gap-2 mt-4">
          {renderNumbers(1, 15, "B")}
        </div>
      </div>

      {/* I column */}
      <div className="p-2">
        <div
          className="text-4xl text-center font-bold text-white"
          style={{ backgroundColor: "#FF4500" }}
        >
          I
        </div>
        <div className="grid grid-cols-1 gap-2 mt-4">
          {renderNumbers(16, 30, "I")}
        </div>
      </div>

      {/* N column */}
      <div className="p-2">
        <div
          className="text-4xl text-center font-bold text-white"
          style={{ backgroundColor: "#000000" }}
        >
          N
        </div>
        <div className="grid grid-cols-1 gap-2 mt-4">
          {renderNumbers(31, 45, "N")}
        </div>
      </div>

      {/* G column */}
      <div className="p-2">
        <div
          className="text-4xl text-center font-bold text-white"
          style={{ backgroundColor: "#32CD32" }}
        >
          G
        </div>
        <div className="grid grid-cols-1 gap-2 mt-4">
          {renderNumbers(46, 60, "G")}
        </div>
      </div>

      {/* O column */}
      <div className="p-2">
        <div
          className="text-4xl text-center font-bold text-white"
          style={{ backgroundColor: "#FFD700" }}
        >
          O
        </div>
        <div className="grid grid-cols-1 gap-2 mt-4">
          {renderNumbers(61, 75, "O")}
        </div>
      </div>
    </div>
  );
};

export default BingoPickedNumbers;
