import React from "react";

import greekZeusAnimation from "../assets/animations/greek_zeus.mp4";
import Bubble from "../Components/Chat/Bubble";
import zeusHead from "../assets/characters/zeus_head.webp";
import userAvatar from "../assets/characters/user_avatar.png";

const Dream = () => {
  return (
    <div class="min-h-screen bg-zinc-800 items-center py-12 px-36 space-y-2">
      <div className="container flex flex-col w-full space-y-2">
        {/* <!-- Başlık ve Menü Alanı --> */}
        <div className="flex py-2 px-4 flex-row space-x-2 bg-zinc-900 rounded-t-md">
          {/* <!-- Sol Kısım --> */}
          <div className="flex space-x-2 basis-2/3 items-center">
            <label className="text-white">
              Choose the culture in which your dream will be interpreted:
            </label>
            <select
              class="bg-yellow-500 text-black py-2 px-2 rounded-md hover:cursor-pointer
            "
            >
              <option className="bg-zinc-800 text-white" value="yunan">
                Yunan Kültürü
              </option>
              <option className="bg-zinc-800 text-white" value="misir">
                Mısır Kültürü
              </option>
              <option className="bg-zinc-800 text-white" value="yunan">
                Yunan Kültürü
              </option>
              <option className="bg-zinc-800 text-white" value="misir">
                Mısır Kültürü
              </option>
            </select>
          </div>
          {/* <!-- Sağ Kısım --> */}
          <div className="flex basis-1/3 items-center space-x-2 justify-end">
            <label className="text-white">Commented by:</label>
            <div className="border border-yellow-600 bg-yellow-500 rounded-md py-1 px-4">
              Commenter 1
            </div>
          </div>
        </div>

        {/* <!-- İçerik Alanı --> */}
        <div className="flex py-8 px-8 flex-row space-x-4 bg-zinc-900 text-white">
          <div className="flex basis-1/3 flex-col justify-center items-center">
            {/* <!-- Video Player --> */}
            <video
              class="w-full rounded-full shadow-lg shadow-zinc-800"
              autoplay
              loop
              muted
            >
              <source src={greekZeusAnimation} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex basis-2/3 flex-col space-y-2">
            <Bubble
              characterName={"Character 1"}
              message={"Test message content 1"}
              sendedByCharacter={true}
              characterImage={zeusHead}
              timespan={"12:00"}
            />
            <Bubble
              characterName={"Character 1"}
              message={"Test message content 1"}
              sendedByCharacter={false}
              characterImage={userAvatar}
              timespan={"12:01"}
            />
            <Bubble
              characterName={"Character 1"}
              message={"Test message content 1"}
              sendedByCharacter={true}
              characterImage={zeusHead}
              timespan={"12:02"}
            />
          </div>
        </div>

        {/* <!-- Alt Buton Alanı --> */}
        <div className="flex py-4 px-4 flex-row space-x-2 bg-zinc-900 rounded-b-md">
          {/* <!-- Sol Kısım --> */}
          <div className="flex space-x-2 basis-10/12 items-center">
            <input
              type="text"
              id="first_name"
              class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500"
              placeholder="Your dream"
              required
            />
          </div>
          {/* <!-- Sağ Kısım --> */}
          <div className="flex basis-2/12 items-center space-x-2 justify-end">
            <button className="py-2 px-4 w-full rounded-md bg-yellow-500 hover:bg-yellow-400 text-black duration-300">
              Interprets your dream
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dream;
