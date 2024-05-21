import "./App.css";
import Letter from "./Letter";
import { useState } from "react";

function App() {
  const [outputString, setOutputString] = useState("");

  const handleLetterClick = (letter) => {
    let text = outputString + letter;
    const regex = /(.)\1{2,}/g;

    text = text.replace(regex, (match) =>
      "_".repeat(Math.ceil(match.length / 3))
    );

    setOutputString(text);
  };

  const keyboardLayout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div className="flex flex-col gap-5 items-center justify-evenly h-screen bg-white">
      <h1 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#3581F0] to-black">
        Alphabet Tile Interaction
      </h1>
      {/* Result */}
      <div className="flex flex-col gap-3">
        <p
          className={`p-2 border border-slate-300 rounded w-96 h-20 overflow-y-auto break-words ${
            outputString === "" ? "text-slate-400" : "text-black"
          }`}
          id="outputString"
        >
          {outputString === "" ? "Press Any Key..." : outputString}
        </p>

        {/* Button to clear the result field */}
        <button
          className="btn btn-sm btn-outline mx-auto"
          onClick={() => {
            setOutputString("");
          }}
        >
          Clear
        </button>
      </div>

      {/* Keyboard */}
      <div className="bg-slate-50 px-5 py-2 rounded shadow">
        {keyboardLayout.map((item, i) => (
          <div key={i} className="flex justify-center mb-2">
            {item.map((letter) => (
              <Letter
                key={letter}
                letter={letter}
                onClick={handleLetterClick}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
