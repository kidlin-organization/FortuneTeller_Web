import React from "react";
import goldIcon from "../assets/gold_icon.svg";

const Pricing = () => {
  return (
    <>
      <section class="bg-zinc-800 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-extrabold text-white sm:text-5xl">
              Pricing Plans
            </h2>
            <p class="mt-4 text-xl text-gray-400">
              Choose the payment package that suits you
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* <!-- Free Plan --> */}
            <div class="bg-zinc-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div class="mb-8">
                <h3 class="text-2xl font-semibold text-white">
                  A Pocketful of Gold
                </h3>
                <p class="mt-4 text-gray-400">
                  Get started with our basic features.
                </p>
              </div>
              <div class="mb-8">
                <span class="text-5xl font-extrabold text-white">39,99₺</span>
                {/* <span class="text-xl font-medium text-gray-400">/mo</span> */}
              </div>
              <ul class="mb-8 space-y-4 text-gray-400">
                <li class="flex items-center">
                  <img src={goldIcon} alt="gold icon" class="h-6 w-6 mr-2" />
                  <span>150 gold</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>3 standard services</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-red-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 12h12"
                    />
                  </svg>
                  <span>0 premium services</span>
                </li>
              </ul>
              <a
                href="#"
                class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-yellow-500 hover:bg-yellow-400"
              >
                Get Started
              </a>
            </div>

            {/* <!-- Starter Plan --> */}
            <div class="bg-zinc-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div class="mb-8">
                <h3 class="text-2xl font-semibold text-white">Gold Pile</h3>
                <p class="mt-4 text-gray-400">
                  Join our package full of benefits.
                </p>
              </div>
              <div class="mb-8">
                <span class="text-5xl font-extrabold text-white">199,99₺</span>
                {/* <span class="text-xl font-medium text-gray-400">/mo</span> */}
              </div>
              <ul class="mb-8 space-y-4 text-gray-400">
                <li class="flex items-center">
                  <img src={goldIcon} alt="gold icon" class="h-6 w-6 mr-2" />
                  <span>700 gold</span>
                </li>
                <div className="flex flex-row">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 19l14-14"
                    />
                    <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
                    <circle cx="16.5" cy="16.5" r="1.5" fill="currentColor" />
                  </svg>
                  <span>17 discount</span>
                </div>

                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>14 standard services</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>1 premium service</span>
                </li>
              </ul>
              <a
                href="#"
                class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-yellow-500 hover:bg-yellow-400"
              >
                Get Started
              </a>
            </div>

            {/* <!-- Pro Plan --> */}
            <div class="bg-zinc-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div class="mb-8">
                <h3 class="text-2xl font-semibold text-white">Bag of Gold</h3>
                <p class="mt-4 text-gray-400">
                  Interact freely without worrying about overage.
                </p>
              </div>
              <div class="mb-8">
                <span class="text-5xl font-extrabold text-white">399,99₺</span>
                {/* <span class="text-xl font-medium text-gray-400">/mo</span> */}
              </div>
              <ul class="mb-8 space-y-4 text-gray-400">
                <li class="flex items-center">
                  <img src={goldIcon} alt="gold icon" class="h-6 w-6 mr-2" />
                  <span>1800 gold</span>
                </li>
                <div className="flex flex-row">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 19l14-14"
                    />
                    <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
                    <circle cx="16.5" cy="16.5" r="1.5" fill="currentColor" />
                  </svg>
                  <span>40 discount</span>
                </div>

                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>36 standard services</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>2 premium services</span>
                </li>
              </ul>
              <a
                href="#"
                class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-yellow-500 hover:bg-yellow-400"
              >
                Get Started
              </a>
            </div>

            {/* <!-- Enterprise Plan --> */}
            <div class="bg-zinc-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div class="mb-8">
                <h3 class="text-2xl font-semibold text-white">Gold Sack</h3>
                <p class="mt-4 text-gray-400">
                  Join our most advantageous package.
                </p>
              </div>
              <div class="mb-8">
                <span class="text-5xl font-extrabold text-white">799,99₺</span>
              </div>
              <ul class="mb-8 space-y-4 text-gray-400">
                <li class="flex items-center">
                  <img src={goldIcon} alt="gold icon" class="h-6 w-6 mr-2" />
                  <span>3750 gold</span>
                </li>
                <div className="flex flex-row">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 19l14-14"
                    />
                    <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
                    <circle cx="16.5" cy="16.5" r="1.5" fill="currentColor" />
                  </svg>
                  <span>45 discount</span>
                </div>

                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>75 standard services</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>3 premium services</span>
                </li>
              </ul>
              <a
                href="#"
                class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-yellow-500 hover:bg-yellow-400"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
