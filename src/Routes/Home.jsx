import React from "react";

import character_taci from "../assets/character_taci.png";
import Carousel from "../Components/Carousel/Carousel";

const Home = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="bg-zinc-800">
        <section className="py-16 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-white font-bold text-4xl xl:text-5xl">
              With special comments for you
              <span className="text-yellow-500 block">
                {" "}
                Fortune Teller Taci
              </span>
            </h1>
            <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
              Ask Taci and his team about everything you are curious about, from
              dream interpretation to fortune telling. Take a look at all our
              services now!
            </p>
            <div className="pt-10 md:w-11/12 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <div class="w-full space-y-3">
                <input
                  type="text"
                  class="py-3 px-4 block w-full border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Enter your email address"
                />
              </div>
              <a
                href="javascript:void(0)"
                className="whitespace-nowrap mx-auto px-7 py-3 md:w-3/4 bg-yellow-500 text-gray-100 text-center rounded-md shadow-md block sm:w-auto"
              >
                Get started
              </a>
              {/* <a
                href="javascript:void(0)"
                className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
              >
                Try it out
              </a> */}
            </div>
          </div>
          <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
            <img
              src={character_taci}
              className="w-full mx-auto sm:w-10/12  lg:w-full rounded-xl"
            />
          </div>
        </section>
      </div>

      {/* Section 2 */}
      <section class="bg-white dark:bg-zinc-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Fortune Teller Team
            </h2>
            <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Let's get to know our characters who will accompany you on this
              path.
            </p>
          </div>
          <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1">
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Bonnie Avatar"
                />
              </a>
              <div class="p-5 m-auto">
                <h3 class="md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Character 0</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400 md:text-lg">
                  Relationship Expert
                </span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                  It instantly interprets the fortune-telling pictures you send
                  and informs you.
                </p>
                <a
                  href="javascript:void(0)"
                  className="px-7 py-3 w-full bg-yellow-500 text-gray-100 text-center rounded-md shadow-md block sm:w-auto md:text-lg"
                >
                  Meet the Character 0
                </a>
              </div>
              <a href="#">
                <img
                  class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                  alt="Bonnie Avatar"
                />
              </a>
            </div>
          </div>
          <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Bonnie Avatar"
                />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Taci</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">
                  Fortune Telling Expert
                </span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  It instantly interprets the fortune-telling pictures you send
                  and informs you.
                </p>
                <a
                  href="javascript:void(0)"
                  className="px-7 py-3 w-full bg-yellow-500 text-gray-100 text-center rounded-md shadow-md block sm:w-auto"
                >
                  Meet the Taci
                </a>
              </div>
            </div>
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Avatar"
                />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Character 2</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">
                  Horoscope Expert
                </span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Taci's closest friend. Comments on your personality and zodiac
                  sign with the information you enter.
                </p>
                <a
                  href="javascript:void(0)"
                  className="px-7 py-3 w-full bg-yellow-500 text-gray-100 text-center rounded-md shadow-md block sm:w-auto"
                >
                  Meet the Character 2
                </a>
              </div>
            </div>
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="Michael Avatar"
                />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Character 3</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">
                  Dream Expert
                </span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Our expert character on dreams. Tell us your dream and we will
                  tell you in detail what it means.
                </p>
                <a
                  href="javascript:void(0)"
                  className="px-7 py-3 w-full bg-yellow-500 text-gray-100 text-center rounded-md shadow-md block sm:w-auto"
                >
                  Meet the Character 3
                </a>
              </div>
            </div>
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                  alt="Sofia Avatar"
                />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Character 4</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">
                  Karma Analysis Expert
                </span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Let's interpret together the tendencies and results resulting
                  from your past life and your current life behaviors.
                </p>
                <a
                  href="javascript:void(0)"
                  className="px-7 py-3 w-full bg-yellow-500 text-gray-100 text-center rounded-md shadow-md block sm:w-auto"
                >
                  Meet the Character 4
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comments */}
      <section className="bg-white dark:bg-zinc-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              User Comments
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Check out the feedback we received from our users!
            </p>
          </div>
          {/* Carousel Container */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-4xl items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-900">
              <Carousel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
