import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function decrementHandler() {
    setCount(count - 1);
  }

  function incrementHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center flex-col gap-10">
      <div className="text-black text-2xl font-medium">
        Increment & Decrement
      </div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button
          onClick={decrementHandler}
          className="border-r-2 text-center border-[#bfbfbf] w-20 text-5xl "
        >
          -
        </button>

        <div className="font-bold text-5xl gap-12">{count}</div>

        <button
          onClick={incrementHandler}
          className="border-l-2 text-center border-[#bfbfbf] w-20 text-5xl "
        >
          +
        </button>
      </div>

      <button
        onClick={resetHandler}
        className="bg-white text-black px-10 py-2 rounded-md text-lg"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
