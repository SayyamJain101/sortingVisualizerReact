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

  const timeoutsRef = useRef([]);

  const generateNewArray = () => {
    const newArray = Array.from(
      { length: arraySize },
      () => Math.floor(Math.random() * 400) + 10
    );
    setArray(newArray);
  };

  useEffect(() => {
    generateNewArray();
  }, [arraySize]);

  const handleStartSorting = async () => {
    if (isSorting) return;
    setIsSorting(true);

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

    for (let i = 0; i < animations.length; i++) {
      const newArray = animations[i];
      const timeoutId = setTimeout(() => {
        setArray([...newArray]);
      }, i * (200 - speed));
      timeoutsRef.current.push(timeoutId);
    }

    const finalTimeout = setTimeout(() => setIsSorting(false), animations.length * (200 - speed));
    timeoutsRef.current.push(finalTimeout);
  };

  const handleStopSorting = () => {
    setIsSorting(false);
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
