import React, { useState } from "react";

const Navbar = ({
  onGenerateArray,
  onStartSorting,
  onStop,
  onAlgorithmChange,
  onArraySizeChange,
  onSpeedChange,
}) => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("Bubble");
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(50);

  const handleAlgorithmChange = (e) => {
    const algo = e.target.value;
    setSelectedAlgorithm(algo);
    if (onAlgorithmChange) onAlgorithmChange(algo);
  };

  const handleArraySizeChange = (e) => {
    const value = Number(e.target.value)
    setArraySize(value)
    if(onArraySizeChange) onArraySizeChange(value);
  };
  
  const handleSpeedChange = (e) => {
    const value = Number(e.target.value);
    setSpeed(value);
    if (onSpeedChange) onSpeedChange(value);
  };

  return (
    <div className="h-20 w-full bg-gray-700 px-8 flex justify-between items-center shadow-md text-white">
      {/* Title */}
      <h1 className="font-semibold text-2xl tracking-wide">Sorting Visualizer</h1>

      <div className="flex items-center gap-6">
        {/* Algorithm Dropdown */}
        <select
          className="px-3 py-2 rounded bg-amber-300 text-black font-medium outline-none"
          value={selectedAlgorithm}
          onChange={handleAlgorithmChange}
        >
          <option>Bubble</option>
          <option>Insertion</option>
          <option>Merge</option>
          <option>Quick</option>
          <option>Selection</option>
        </select>

        {/* Array Size Slider */}
        <div className="flex flex-col items-center text-sm">
          <label className="text-gray-200">Array Size: {arraySize}</label>
          <input
            type="range"
            min="10"
            max="100"
            value={arraySize}
            onChange={handleArraySizeChange}
            className="w-40 accent-amber-400"
          />
        </div>

        {/* Speed Slider */}
        <div className="flex flex-col items-center text-sm">
          <label className="text-gray-200">Speed: {speed}</label>
          <input
            type="range"
            min="1"
            max="100"
            value={speed}
            onChange={handleSpeedChange}
            className="w-40 accent-amber-400"
          />
        </div>

        {/* Buttons */}
        <button
          onClick={onGenerateArray}
          className="bg-amber-300 hover:bg-amber-400 text-black font-medium px-4 py-2 rounded transition-transform active:scale-95"
        >
          Generate New Array
        </button>

        <button
          onClick={onStartSorting}
          className="bg-green-400 hover:bg-green-500 text-black font-medium px-4 py-2 rounded transition-transform active:scale-95"
        >
          Start Sorting
        </button>

        <button
          onClick={onStop}
          className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded transition-transform active:scale-95"
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Navbar;
