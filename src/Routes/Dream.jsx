import React, { useState } from "react";

import Bubble from "../Components/Chat/Bubble";

import Zeus from "../assets/characters/Greek/zeus.webp";
import ZeusAnimation from "../assets/characters/Greek/zeus.mp4";
import ZeusAvatar from "../assets/characters/Greek/zeus_avatar.webp";

import Odin from "../assets/characters/Nordic/odin.webp";
import OdinAnimation from "../assets/characters/Nordic/odin.mp4";
import OdinAvatar from "../assets/characters/Nordic/odin_avatar.webp";

import Thoth from "../assets/characters/Egyptian/thoth.jpg";
import ThothAnimation from "../assets/characters/Egyptian/thoth.mp4";
import ThothAvatar from "../assets/characters/Egyptian/thoth_avatar.webp";

const Dream = () => {
  const cultureInfos = [
    {
      name: "Greek",
      description:
        "Among the storied heights of Olympus, Apollo stands as the beacon of foresight, his oracle a source of divine guidance. With the fire of Prometheus igniting knowledge, mortals are urged to seek their fates with courage. Thus, the legacy of the Greeks endures, shaped by the visions of their gods.",
    },
    {
      name: "Nordic",
      description:
        "In the realm of Norse legends, Odin, the Allfather, sacrifices much to unveil the mysteries of fate, gazing into the depths of the cosmos. His wisdom, coupled with Freyja's foresight, guides warriors and lovers alike, illuminating the paths they tread. Thus, the Norse spirit thrives, fortified by the visions of its deities.",
    },
    {
      name: "Egyptian",
      description:
        "In the land of ancient Egypt, the gods Heka, Horus, and Tooth possess the sacred gift of prophecy, revealing the hidden threads of destiny. Heka’s insight unveils profound truths, while Horus's watchful eye guards the realm against darkness. Thus, the wisdom of the ancients flourishes, entwined with the fabric of their culture.",
    },
  ];
  const characterInfos = [
    {
      name: "Zeus",
      image: Zeus,
      avatar: ZeusAvatar,
      animation: ZeusAnimation,
      culture: "Greek",
      description:
        "As the king of the gods, Zeus wields the power of foresight, allowing him to shape the destinies of both mortals and immortals with his divine thunder.",
    },
    {
      name: "Apollon",
      image: Zeus,
      avatar: ZeusAvatar,
      animation: ZeusAnimation,
      culture: "Greek",
      description:
        "Revered as the god of prophecy, Apollo sees into the future through his sacred oracle, offering wisdom and guidance to those who seek his insight.",
    },
    {
      name: "Prometheus",
      image: Zeus,
      avatar: ZeusAvatar,
      animation: ZeusAnimation,
      culture: "Greek",
      description:
        "As the bringer of fire and knowledge, Prometheus envisions the future of humanity, daring to illuminate the path of progress despite the consequences.",
    },
    {
      name: "Odin",
      image: Odin,
      avatar: OdinAvatar,
      animation: OdinAnimation,
      culture: "Nordic",
      description:
        "The all-seeing Allfather, Odin sacrifices much to gain wisdom, peering into the tapestry of fate to foresee the events that shape the Nine Realms.",
    },
    {
      name: "Freyja",
      image: Odin,
      avatar: OdinAvatar,
      animation: OdinAnimation,
      culture: "Nordic",
      description:
        "As the goddess of love and war, Freyja possesses the gift of foresight, allowing her to see both the joy and tragedy that awaits the hearts of mortals.",
    },
    {
      name: "Völva",
      image: Odin,
      avatar: OdinAvatar,
      animation: OdinAnimation,
      culture: "Nordic",
      description:
        "The ancient seeress, Völva, channels the wisdom of the Norse cosmos, using her prophetic powers to unveil the future and guide her people through the trials ahead.",
    },
    {
      name: "Thoth",
      image: Thoth,
      avatar: ThothAvatar,
      animation: ThothAnimation,
      culture: "Egyptian",
      description:
        "Known for her mystical powers, Thoth claims she can see what lies ahead, unraveling the mysteries of destiny.",
    },
    {
      name: "Heka",
      image: Thoth,
      avatar: ThothAvatar,
      animation: ThothAnimation,
      culture: "Egyptian",
      description:
        "Heka possesses the extraordinary ability to glimpse into the future, revealing secrets hidden from mortals.",
    },
    {
      name: "Horus",
      image: Thoth,
      avatar: ThothAvatar,
      animation: ThothAnimation,
      culture: "Egyptian",
      description:
        "With the keen insight of a falcon, Horus can foresee events yet to unfold, guiding humanity with his visions.",
    },
  ];

  const [selectedCulture, setSelectedCulture] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div className="min-h-screen bg-zinc-800 text-white py-12 px-36">
      <div className="container flex flex-col w-full md:w-3/4 mx-auto space-y-2">
        <div className="bg-zinc-900 rounded-t-md px-4 py-2">
          <h1 className="font-semibold text-yellow-500">
            Interpret Your Dream
          </h1>
        </div>
        <div className="flex space-x-2 bg-zinc-900 h-1/2 mt-1 px-4 min-h-96 py-4">
          <div className="basis-1/2 flex flex-col items-center justify-center">
            {selectedCharacter && (
              <video
                key={selectedCharacter}
                className="w-3/4 rounded-full shadow-lg shadow-zinc-800 transition-opacity duration-500 ease-in opacity-100 animate-fade-in"
                autoPlay
                loop
                muted
              >
                <source
                  src={
                    characterInfos.find(
                      (character) => character.name === selectedCharacter
                    ).animation
                  }
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
            {!selectedCharacter && (
              <h2>Choose the culture and commentator that suits you</h2>
            )}

            {selectedCharacter && (
              <p className="p-2 text-zinc-400 text-sm mt-2">
                {characterInfos.find(
                  (character) => character.name === selectedCharacter
                )?.culture &&
                  cultureInfos.find(
                    (culture) =>
                      culture.name ===
                      characterInfos.find(
                        (character) => character.name === selectedCharacter
                      ).culture
                  )?.description}
              </p>
            )}
          </div>
          <div className="basis-1/2 flex flex-col px-4 py-2 shadow-sm shadow-zinc-700">
            <div className="flex flex-col justify-center">
              <div className="bg-yellow-500 text-center text-zinc-900 py-2 px-4 font-semibold rounded-md my-2">
                Choose Culture
              </div>
              <div className="flex justify-center space-x-2 mt-2">
                {characterInfos
                  .map((character) => character.culture)
                  .filter((value, index, self) => self.indexOf(value) === index)
                  .map((culture) => (
                    <button
                      key={culture}
                      className={`py-2 px-4 rounded-md transition-all duration-500 ease-out hover:bg-yellow-500 hover:bg-yellow-400 duration-500 hover:text-zinc-900
            ${
              selectedCulture === culture
                ? "bg-yellow-500 text-zinc-900"
                : "bg-zinc-800 text-white"
            }`}
                      onClick={() => setSelectedCulture(culture)}
                    >
                      {culture}
                    </button>
                  ))}
              </div>
            </div>

            {selectedCulture && (
              <div className="flex flex-col justify-center mt-4 transition-opacity duration-500 ease-in opacity-100 animate-fade-in">
                <div className="bg-yellow-500 text-center text-zinc-900 py-2 px-4 font-semibold rounded-md my-2">
                  Choose Commentator
                </div>
                <div className="flex justify-center space-x-2 mt-2">
                  {characterInfos
                    .filter(
                      (character) => character.culture === selectedCulture
                    )
                    .map((character) => (
                      <div
                        key={character.name}
                        className={`flex flex-col items-center rounded-md p-2 cursor-pointer flex-1 transition-all duration-500 ease-out
            ${
              selectedCharacter === character.name
                ? "ring-4 ring-yellow-500"
                : "ring-2 ring-zinc-700"
            }`}
                        onClick={() => setSelectedCharacter(character.name)}
                      >
                        <img
                          src={character.avatar}
                          alt={character.name}
                          className="w-16 h-16 rounded-full mb-2"
                        />
                        <span className="text-white">{character.name}</span>
                        <span className="text-sm text-zinc-400 mt-1">
                          {character.description}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {selectedCharacter && (
              <div className="flex justify-center mt-4 transition-opacity duration-500 ease-in opacity-100 animate-fade-in">
                <button className="bg-yellow-500 hover:bg-yellow-400 duration-500 text-center text-zinc-900 py-2 px-4 font-semibold rounded-md my-2">
                  Interpret my dream, {selectedCharacter}!
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dream;
