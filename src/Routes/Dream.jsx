import React, { useState, useEffect, useRef } from "react";

import Bubble from "../Components/Chat/Bubble";
import ReversibleVideo from "../Components/ReversibleVideo/ReversibleVideo";

import UserAvatar from "../assets/characters/user_avatar.png";

import Zeus from "../assets/characters/Greek/zeus.webp";
import ZeusAnimation from "../assets/characters/Greek/zeus.mp4";
import ZeusAvatar from "../assets/characters/Greek/zeus_avatar.webp";

import Odin from "../assets/characters/Nordic/odin.webp";
import OdinAnimation from "../assets/characters/Nordic/odin.mp4";
import OdinAvatar from "../assets/characters/Nordic/odin_avatar.webp";

import Thoth from "../assets/characters/Egyptian/thoth.jpg";
import ThothAnimation from "../assets/characters/Egyptian/thoth.mp4";
import ThothAvatar from "../assets/characters/Egyptian/thoth_avatar.webp";

const formatDate = (dateString) => {
  const date = new Date(dateString);

  // GG-AA-YYYY formatı
  const formattedDate = date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // SS:DD formatı
  const formattedTime = date.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${formattedDate} ${formattedTime}`;
};

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

const generateRandomMessage = () => {
  const randomMessages = [
    "This is a really interesting dream.",
    "I've heard this before, you should be careful.",
    "Your dreams could come true, they just need the right time.",
    "This could be a sign.",
  ];

  // Rastgele bir mesaj döndürelim
  return randomMessages[Math.floor(Math.random() * randomMessages.length)];
};

const Dream = () => {
  const chatContainerRef = useRef(null);

  const [selectedCulture, setSelectedCulture] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleReturn = () => {
    setIsChatOpen(false);
    setSelectedCharacter(null);
    setSelectedCulture(null);
    setMessages([]);
  };

  const handleStartChat = () => {
    setIsChatOpen(true);
    setMessages([
      {
        id: 1,
        text: `Hello, I am ${selectedCharacter}, the interpreter of dreams. What would you like to know about your dream?`,
        isSystemMessage: true,
        sender: selectedCharacter,
        timestamp: formatDate(new Date().toISOString()),
      },
    ]);
  };

  const handleSendMessage = () => {
    if (isThinking || !inputValue.trim()) return;

    setIsThinking(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length + 1,
        text: inputValue,
        sender: "User",
        isSystemMessage: false,
        timestamp: formatDate(new Date().toISOString()),
      },
    ]);
    setInputValue("");
  };

  useEffect(() => {
    if (isThinking) {
      const timer = setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: prevMessages.length + 1,
            text: generateRandomMessage(),
            sender: selectedCharacter,
            isSystemMessage: true,
            timestamp: formatDate(new Date().toISOString()),
          },
        ]);
        setIsThinking(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isThinking, selectedCharacter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 text-white py-6 px-4 md:py-12 md:px-36">
      <div
        className={`container flex flex-col mx-auto space-y-1 ${
          isChatOpen ? "w-full animate-widen" : "w-full animate-narrow"
        }`}
      >
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-t-md px-6 py-4 border-b border-purple-400/20">
          <h1 className="font-semibold text-2xl text-purple-300">
            Interpret Your Dream
          </h1>
        </div>

        {isChatOpen && (
          <div className="bg-slate-800/40 backdrop-blur-sm px-6 py-4 flex items-center border-b border-purple-400/20">
            <button
              className="bg-purple-600 hover:bg-purple-500 duration-300 text-center text-white p-2 font-semibold rounded-full my-2 mr-4 hover:scale-105 transition-transform"
              onClick={handleReturn}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 7L10 12L15 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex items-center gap-4">
              <img
                src={
                  characterInfos.find((char) => char.name === selectedCharacter)
                    ?.avatar
                }
                alt={selectedCharacter}
                className="w-12 h-12 rounded-full ring-2 ring-purple-500/50"
              />
              <h1 className="font-semibold text-white text-lg">
                Discussing dreams with{" "}
                <span className="text-purple-300">{selectedCharacter}</span>
              </h1>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:space-x-4 bg-slate-800/40 backdrop-blur-sm min-h-96 px-6 py-6">
          <div className="basis-full lg:basis-1/2 flex flex-col items-center justify-center mb-4 lg:mb-0">
            {selectedCharacter && (
              <ReversibleVideo
                className="w-full md:w-3/4 rounded-full shadow-lg shadow-zinc-800 transition-opacity duration-500 ease-in opacity-100 animate-fade-in"
                selectedCharacter={selectedCharacter}
                src={
                  characterInfos.find(
                    (character) => character.name === selectedCharacter
                  ).animation
                }
              />
            )}
            {!selectedCharacter && (
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-2 shadow-lg shadow-primary/10">
                  <svg
                    className="w-12 h-12 text-primary-lighter"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-primary-lighter">
                  Welcome to Dream Interpretation
                </h2>
                <p className="text-gray-300 max-w-md leading-relaxed">
                  Choose a culture and a divine interpreter to unravel the
                  mysteries hidden within your dreams. Each interpreter brings
                  unique wisdom from their ancient traditions.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  <div className="flex items-center gap-2 bg-dark-lighter/40 px-4 py-2 rounded-full">
                    <svg
                      className="w-5 h-5 text-primary-lighter"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm text-gray-300">
                      Select your preferred culture
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-dark-lighter/40 px-4 py-2 rounded-full">
                    <svg
                      className="w-5 h-5 text-primary-lighter"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                    <span className="text-sm text-gray-300">
                      Choose your dream interpreter
                    </span>
                  </div>
                </div>
              </div>
            )}
            {selectedCharacter && (
              <p className="p-2 text-white text-sm mt-2">
                {
                  cultureInfos.find(
                    (culture) =>
                      culture.name ===
                      characterInfos.find(
                        (character) => character.name === selectedCharacter
                      ).culture
                  )?.description
                }
              </p>
            )}
          </div>
          {!isChatOpen ? (
            <div className="basis-full lg:basis-1/2 flex flex-col px-2 md:px-4 py-2 shadow-sm shadow-zinc-700">
              <div className="flex flex-col justify-center">
                <div className="bg-purple-600 text-center text-white py-2 px-4 font-semibold rounded-md my-2">
                  Choose Culture
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {characterInfos
                    .map((character) => character.culture)
                    .filter(
                      (value, index, self) => self.indexOf(value) === index
                    )
                    .map((culture) => (
                      <button
                        key={culture}
                        className={`py-2 px-4 rounded-md transition-all ease-out hover:bg-purple-500 duration-500 hover:text-white ${
                          selectedCulture === culture
                            ? "bg-purple-600 text-white"
                            : "bg-slate-700 text-white hover:bg-purple-500/80"
                        }`}
                        onClick={() => setSelectedCulture(culture)}
                      >
                        {culture}
                      </button>
                    ))}
                </div>
              </div>

              {selectedCulture && (
                <div className="flex flex-col justify-center mt-4">
                  <div className="bg-purple-600 text-center text-white py-2 px-4 font-semibold rounded-md my-2">
                    Choose Commentator
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
                    {characterInfos
                      .filter(
                        (character) => character.culture === selectedCulture
                      )
                      .map((character) => (
                        <div
                          key={character.name}
                          className={`flex flex-col items-center rounded-md p-2 cursor-pointer transition-all duration-500 ease-out ${
                            selectedCharacter === character.name
                              ? "ring-4 ring-purple-500 bg-slate-700/50"
                              : "ring-2 ring-slate-600 hover:ring-purple-400/50 bg-slate-800/50"
                          }`}
                          onClick={() => setSelectedCharacter(character.name)}
                        >
                          <img
                            src={character.avatar}
                            alt={character.name}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-2"
                          />
                          <span className="text-white text-sm md:text-base">
                            {character.name}
                          </span>
                          <span className="text-xs md:text-sm text-white mt-1 text-center">
                            {character.description}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {selectedCharacter && (
                <div className="flex justify-center mt-4 transition-opacity duration-500 ease-in opacity-100 animate-fade-in">
                  <button
                    onClick={handleStartChat}
                    className="bg-purple-600 hover:bg-purple-500 duration-500 text-center text-white py-2 px-4 font-semibold rounded-md my-2"
                  >
                    Interpret my dream, {selectedCharacter}!
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div
              className="basis-full lg:basis-1/2 flex flex-col px-2 md:px-4 py-2 shadow-sm shadow-zinc-700 h-[400px] lg:h-[670px] overflow-y-auto"
              ref={chatContainerRef}
            >
              {messages.map((message) => (
                <Bubble
                  key={message.id}
                  characterName={message.sender}
                  timespan={message.timestamp}
                  message={message.text}
                  characterImage={
                    message.isSystemMessage
                      ? characterInfos.find(
                          (character) => character.name === selectedCharacter
                        ).avatar
                      : UserAvatar
                  }
                  sendedByCharacter={message.isSystemMessage}
                  setIsThinking={setIsThinking}
                />
              ))}
            </div>
          )}
        </div>

        {isChatOpen && (
          <div className="bg-slate-800/40 backdrop-blur-sm px-6 py-4 rounded-b-md flex items-center gap-4">
            <input
              type="text"
              placeholder="Share your dream..."
              className="flex-1 bg-slate-700/50 text-white py-3 px-6 rounded-full border-2 border-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className="whitespace-nowrap bg-gradient-to-r from-primary-dark to-primary 
                        text-center text-white py-3 px-8 font-semibold rounded-full 
                        transition-all duration-300 
                        hover:shadow-lg hover:shadow-primary/25 
                        hover:scale-105 
                        active:scale-95
                        disabled:opacity-50 disabled:cursor-not-allowed
                        flex items-center justify-center gap-2"
              disabled={isThinking}
            >
              {isThinking ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Thinking...</span>
                </>
              ) : (
                <>
                  <span>Ask {selectedCharacter}</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dream;
