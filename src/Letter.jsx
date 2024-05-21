import React from "react";

const Letter = ({ letter, onClick }) => {
  return (
    <button
      className="kbd m-[2px] md:m-1 hover:shadow-md"
      onClick={() => onClick(letter)}
    >
      {letter}
    </button>
  );
};

export default Letter;
