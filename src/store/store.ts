import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Define the shape of the state
interface BingoPickedNumbers {
  bingoNumber: number;
  color: "#1E90FF" | "#FF4500" | "#000000" | "#32CD32" | "#FFD700";
}

interface StoreState {
  pickedNumberStore: number | null;
  setPickedNumberStore: (number: number) => void;
  bingoPickedNumbers: BingoPickedNumbers[];
  addBingoPickedNumber: (number: number, color: string) => void;
  undoBingoPickedNumber: () => void; // Undo action
  clearState: () => void;
}

// Create the Zustand store with persistence middleware
const useStore = create(
  persist<StoreState>(
    (set) => ({
      pickedNumberStore: null,
      setPickedNumberStore: (number) => set({ pickedNumberStore: number }),
      bingoPickedNumbers: [],
      addBingoPickedNumber: (number, color) =>
        //@ts-ignore
        set((state) => ({
          bingoPickedNumbers: [
            { bingoNumber: number, color },
            ...state.bingoPickedNumbers,
          ],
        })),
      undoBingoPickedNumber: () =>
        set((state) => ({
          bingoPickedNumbers: state.bingoPickedNumbers.slice(1), // Remove the first item to undo the last action
        })),
      clearState: () =>
        set({ pickedNumberStore: null, bingoPickedNumbers: [] }),
    }),
    {
      name: "zustandStore", // Name of the key in localStorage
      storage: createJSONStorage(() => localStorage), // Use localStorage with JSON parsing and stringifying
    }
  )
);

export default useStore;
