import { useState } from "react";

export default function App() {
  const [bgColor, setBgColor] = useState("bg-white");

  return (
    <div className={`${bgColor} h-screen flex justify-center items-center gap-4 transition-colors duration-300`}>
      
      <button
        onMouseEnter={() => setBgColor("bg-red-500")}
        onMouseLeave={() => setBgColor("bg-white")}
        className="bg-red-500 text-white px-4 py-2  rounded-4xl cursor-pointer"
      >
        Red
      </button>

      <button
        onMouseEnter={() => setBgColor("bg-yellow-300")}
        onMouseLeave={() => setBgColor("bg-white")}
        className="bg-yellow-300 text-white px-4 py-2 rounded-4xl cursor-pointer"
      >
        Yellow
      </button>

      <button
        onMouseEnter={() => setBgColor("bg-blue-500")}
        onMouseLeave={() => setBgColor("bg-white")}
        className="bg-blue-500 text-white px-4 py-2 rounded-4xl cursor-pointer"
      >
        Blue
      </button>

      <button
        onMouseEnter={() => setBgColor("bg-green-500")}
        onMouseLeave={() => setBgColor("bg-white")}
        className="bg-green-500 text-white px-4 py-2 rounded-4xl cursor-pointer"
      >
        Green
      </button>

      <button
        onMouseEnter={() => setBgColor("bg-[#F2C14E]")}
        onMouseLeave={() => setBgColor("bg-white")}
        className="bg-[#F2C14E] text-white px-4 py-2 rounded-4xl cursor-pointer"
      >
        Tuscan Sun
      </button>

      <button
        onMouseEnter={() => setBgColor("bg-teal-500")}
        onMouseLeave={() => setBgColor("bg-white")}
        className="bg-teal-500 text-white px-4 py-2 rounded-4xl cursor-pointer"
      >
        Teal
      </button>

      <button
        onMouseEnter={() => setBgColor("bg-[#B4436C]")}
        onMouseLeave={() => setBgColor("bg-[#F4F4F9]")}
        className="bg-[#B4436C] text-white px-4 py-2 rounded-4xl cursor-pointer"
      >
        Berry Crush
      </button>

    </div>
  );
}