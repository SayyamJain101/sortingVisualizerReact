import React from "react";

const SortingVisualizer = ({ array }) => {
  return (
    <div className="flex items-end justify-center h-full pb-10 gap-1 transition-all">
      {array.map((value, idx) => (
        <div
          key={idx}
          style={{
            height: `${value}px`,
            width: `${600 / array.length}px`,
          }}
          className="bg-amber-400 rounded-t transition-all duration-75"
        ></div>
      ))}
    </div>
  );
};

export default SortingVisualizer;
