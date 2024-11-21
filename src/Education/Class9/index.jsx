import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Class9() {
  const navigate = useNavigate();
  return (
    <>
      
        <div className=" grid grid-cols-2 mt-12 gap-4 ml-40 w-[70%] h-52">
          <div
            onClick={() => navigate("/Class9physics")}
            className=" bg-gradient-to-r  from-indigo-400 to-cyan-400  h-60 w-[92%%] text-center"
          >
            <p className=" font-bold text-3xl text-center p-20 text-neutral-900">
              Physics
            </p>
          </div>
          <div
            onClick={() => navigate("/Class9Chemistry")}
            className=" bg-gradient-to-r  from-indigo-400 to-cyan-400  p-1 h-60 w-[80%%] text-center"
          >
            <p className=" font-bold text-3xl text-center p-20 text-neutral-900">
              Chemistry
            </p>
          </div>
          <div
            onClick={() => navigate("/Class9Biology")}
            className=" bg-gradient-to-r  from-indigo-400 to-cyan-400  p-1 h-60 w-[92%%] text-center"
          >
            <p className=" font-bold text-3xl text-center p-20 text-neutral-900">
              Biology
            </p>
          </div>
          <div
            onClick={() => navigate("/Class9maths")}
            className=" bg-gradient-to-r  from-indigo-400 to-cyan-400  p-1 h-60 w-[92%%] text-center"
          >
            <p className=" font-bold text-3xl text-center p-20 text-neutral-900">
              Maths
            </p>
          </div>
        </div>
      
    </>
  );
}

export default Class9;
