import { useState } from "react";
// import useSound from 'use-sound';
import pedro from "./assets/pedro.mp3";
import "./App.css";

function App() {
  const audio = document.getElementById("audio_tag");
  const [play, setPlay] = useState(false);
  return (
    <div className="App bg-[#121212] flex justify-evenly items-center flex-col h-screen">
      <audio id="audio_tag" src={pedro} />
      {play ? (
        <button
          onClick={() => {
            setPlay(false);
            audio.pause();
          }}
          className="absolute top-0 right-0 mt-10 mr-10  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Mute
          </span>
        </button>
      ) : (
        <button
          onClick={() => {
            setPlay(true);
            audio.play();
            audio.loop = true;
          }}
          className="absolute top-0 right-0 mt-10 mr-10  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Unmute
          </span>
        </button>
      )}
      <div className="font-bold text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
        Website Under Development.
      </div>
      <img
        className="mask mask-circle"
        src={require("./assets/pedro.webp")}
        alt="loading..."
      />
    </div>
  );
}

export default App;
