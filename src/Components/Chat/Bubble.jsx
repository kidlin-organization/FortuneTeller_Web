import React from "react";
import { ReactTyped } from "react-typed";

const Bubble = ({
  characterName,
  message,
  timespan,
  sendedByCharacter,
  characterImage,
  setIsThinking,
}) => {
  return (
    <div
      className={`flex items-start ${
        !sendedByCharacter && "flex-row-reverse"
      } gap-4 mb-6`}
    >
      <img
        className="w-10 h-10 rounded-full ring-2 ring-violet-500/30"
        src={characterImage}
        alt={`${characterName}'s avatar`}
      />
      <div
        className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 ${
          sendedByCharacter
            ? "rounded-r-2xl rounded-bl-2xl bg-violet-500/10"
            : "rounded-l-2xl rounded-br-2xl bg-zinc-800/50"
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-violet-400">
            {characterName}
          </span>
          <span className="text-xs text-gray-400">{timespan}</span>
        </div>
        <p className="text-sm font-normal py-2 text-gray-100">
          <ReactTyped
            strings={[message]}
            typeSpeed={40}
            showCursor={false}
            onComplete={() => setIsThinking(false)}
          />
        </p>
      </div>
    </div>
  );
};

export default Bubble;
