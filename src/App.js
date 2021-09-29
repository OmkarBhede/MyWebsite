import React from "react";
import page1 from "./0001.jpg";
import page2 from "./0002.jpg";
import resume from "./resume.pdf";

function App() {
  return (
    <div className="bg-gray-400 md:px-24 pt-2 md:pt-10">
      <div className="md:mx-24 shadow-7xl mx-2  md:pb-10 pb-4">
        <img className="rounded-t-3xl " src={page1}></img>
        <img className="rounded-b-3xl" src={page2}></img>
      </div>
      <div className="flex items-center justify-center md:pb-10 pb-4">
        <a
          href={resume}
          download
          target="_blank"
          className=" flex items-center bg-purple-600 hover:bg-purple-700 rounded-lg shadow-xl  md:text-lg text-white px-4 py-2"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default App;
