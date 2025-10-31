import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import SortingVisualizer from "./components/SortingVisualizer";
import { getBubbleSortAnimations } from "./algorithms/bubbleSort";
import { getSelectionSortAnimations } from "./algorithms/selectionSort";
import { getInsertionSortAnimations } from "./algorithms/insertionSort";
import { getMergeSortAnimations } from "./algorithms/mergeSort";
import { getQuickSortAnimations } from "./algorithms/quickSort";

const App = () => {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("Bubble");
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [isSorting, setIsSorting] = useState(false);

  // ✅ Store all timeout IDs
  const timeoutsRef = useRef([]);

  // ✅ Generate a new random array
  const generateNewArray = () => {
    const newArray = Array.from(
      { length: arraySize },
      () => Math.floor(Math.random() * 400) + 10
    );
    setArray(newArray);
  };

  // ✅ Regenerate array when size changes
  useEffect(() => {
    generateNewArray();
  }, [arraySize]);

  // ✅ Sorting handler
  const handleStartSorting = async () => {
    if (isSorting) return;
    setIsSorting(true);

    // Clear any previous timeouts
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];

    let animations = [];

    switch (algorithm) {
      case "Bubble":
        animations = getBubbleSortAnimations([...array]);
        break;
      case "Selection":
        animations = getSelectionSortAnimations([...array]);
        break;
      case "Insertion":
        animations = getInsertionSortAnimations([...array]);
        break;
      case "Merge":
        animations = getMergeSortAnimations([...array]);
        break;
      case "Quick":
        animations = getQuickSortAnimations([...array]);
        break;
      default:
        break;
    }

    // Apply animations visually
    for (let i = 0; i < animations.length; i++) {
      const newArray = animations[i];
      const timeoutId = setTimeout(() => {
        setArray([...newArray]);
      }, i * (200 - speed));
      timeoutsRef.current.push(timeoutId);
    }

    // Stop sorting after completion
    const finalTimeout = setTimeout(() => setIsSorting(false), animations.length * (200 - speed));
    timeoutsRef.current.push(finalTimeout);
  };

  // ✅ Stop sorting handler
  const handleStopSorting = () => {
    setIsSorting(false);
    // Clear all active timeouts
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];
  };

  const handleAlgorithmChange = (algo) => setAlgorithm(algo);
  const handleArraySizeChange = (size) => setArraySize(size);
  const handleSpeedChange = (spd) => setSpeed(spd);

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      <Navbar
        onGenerateArray={generateNewArray}
        onStartSorting={handleStartSorting}
        onStop={handleStopSorting}
        onAlgorithmChange={handleAlgorithmChange}
        onArraySizeChange={handleArraySizeChange}
        onSpeedChange={handleSpeedChange}
      />
      <SortingVisualizer array={array} />
    </div>
  );
};

export default App;
