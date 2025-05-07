import useStore from "../store/store";
import { motion } from "framer-motion";
const Ball = () => {
  const {
    pickedNumberStore,
    setPickedNumberStore,
    bingoPickedNumbers,
    addBingoPickedNumber,
    clearState,
    undoBingoPickedNumber, // Add undoBingoPickedNumber to state management
  } = useStore();

  const getBingoLetter = (number: number): string => {
    if (number >= 1 && number <= 15) return "B";
    if (number >= 16 && number <= 30) return "I";
    if (number >= 31 && number <= 45) return "N";
    if (number >= 46 && number <= 60) return "G";
    if (number >= 61 && number <= 75) return "O";
    return "";
  };

  const getBingoColor = (
    number: number
  ): "#1E90FF" | "#FF4500" | "#000000" | "#32CD32" | "#FFD700" => {
    if (number >= 1 && number <= 15) return "#1E90FF"; // Blue
    if (number >= 16 && number <= 30) return "#FF4500"; // Red
    if (number >= 31 && number <= 45) return "#000000"; // Black
    if (number >= 46 && number <= 60) return "#32CD32"; // Green
    if (number >= 61 && number <= 75) return "#FFD700"; // Yellow
    return "#000000";
  };

  const generateRandomNumber = () => {
    if (bingoPickedNumbers.length >= 75) return;

    let newNumber: number;
    do {
      newNumber = Math.floor(Math.random() * 75) + 1;
    } while (bingoPickedNumbers.some((item) => item.bingoNumber === newNumber)); // Check if number already picked

    const color = getBingoColor(newNumber);
    setPickedNumberStore(newNumber);
    addBingoPickedNumber(newNumber, color);
  };

  const handleUndo = () => {
    undoBingoPickedNumber(); // Undo the last picked number
  };

  return (
    <div className="w-full h-full p-6 flex flex-col justify-evenly items-center ">
      <div className="text-4xl text-center font-bold">Ball</div>
      {pickedNumberStore !== null && (
        <div className="flex gap-10 items-center">
          <div className="text-8xl font-bold">
            {getBingoLetter(pickedNumberStore)}
          </div>
          <div className="text-8xl font-bold">{pickedNumberStore}</div>
        </div>
      )}
      <div className="mt-6 flex items-center gap-10">
        <button
          onClick={generateRandomNumber}
          className="px-6 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-sm text-md cursor-pointer"
        >
          Pick
        </button>
        <button
          onClick={clearState}
          className="px-6 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded-sm text-md cursor-pointer"
        >
          Reset
        </button>
        <button
          onClick={handleUndo}
          className="px-6 py-1 bg-yellow-600 hover:bg-yellow-700 text-white rounded-sm text-md cursor-pointer"
        >
          Undo
        </button>
      </div>

      <div className="mt-8 text-center">
        <div className="text-lg font-semibold mb-2">Picked Numbers:</div>
        <div className="max-w-xl flex flex-wrap gap-2 justify-center">
          {bingoPickedNumbers.slice(0, 5).map(({ bingoNumber, color }) => (
            <motion.span
              key={bingoNumber}
              className="w-10 h-10 flex items-center justify-center rounded-full text-white"
              style={{ backgroundColor: color }}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {getBingoLetter(bingoNumber)}
              {bingoNumber}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ball;
