import React, { useEffect } from "react";
import Carousel from "../Components/Carousel/Carousel";
import { ReactTyped } from "react-typed";

import ZodiacWheel from "../assets/home/zodiac_wheel.png";
import Moon from "../assets/home/moon.png";
import Cloud from "../assets/home/cloud.png";
import Cloud2 from "../assets/home/cloud2.png";

import DreamInterpreterCharacter from "../assets/home/dream_interpreter.jpg";
import HoroscopeReaderCharacter from "../assets/home/horoscope_reader.jpg";
import FortuneTellerCharacter from "../assets/home/fortune_teller.jpg";
import DailyLifeAnalyserCharacter from "../assets/home/daily_life_analyser.jpg";

import goldIcon from "../assets/gold_icon.svg";

const Home = () => {
  useEffect(() => {
    const starsContainer = document.querySelector("#stars-container");
    const starCount = 400; // Yıldız sayısını belirliyoruz

    // Yıldız oluşturma fonksiyonu
    function createStar() {
      const star = document.createElement("div");
      star.classList.add("star");

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 3; // Yıldız boyutunu rastgele ayarlıyoruz

      const moveX = Math.random() * 200 - 100; // X ekseninde rastgele hareket
      const moveY = Math.random() * 200 - 100; // Y ekseninde rastgele hareket

      const duration = Math.random() * 15 + 10; // Hareket süresi rastgele
      const delay = Math.random() * 20 + "s"; // Animasyon gecikmesi rastgele

      // Yıldızın ekran konumunu ve animasyon özelliklerini ayarlıyoruz
      star.style.top = `${y}vh`;
      star.style.left = `${x}vw`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = delay;
      star.style.transform = `translate(${moveX}px, ${moveY}px)`;

      starsContainer.appendChild(star); // Yıldızı ekliyoruz
    }

    // Yıldızları başlatan fonksiyon
    function initializeStars() {
      starsContainer.innerHTML = ""; // Mevcut yıldızları temizliyoruz
      for (let i = 0; i < starCount; i++) {
        createStar(); // Yıldızları yaratıyoruz
      }
    }

    initializeStars(); // Başlangıçta yıldızları oluşturuyoruz

    // Yıldızları 20 saniyede bir yeniden oluşturacak interval
    const interval = setInterval(() => {
      initializeStars(); // Her 20 saniyede bir yıldızları yeniden oluşturuyoruz
    }, 5000); // 20 saniyede bir yeniden oluştur

    return () => clearInterval(interval); // Cleanup: interval temizleniyor
  }, []);

  return (
    <>
      {/* Section 1 */}
      <div className="relative bg-zinc-950/95 overflow-hidden">
        {/* Yıldız arka planı */}
        <div id="stars-container" className="absolute inset-0 z-0"></div>

        <section className="relative py-12 mx-auto max-w-screen-xl pb-12 px-4 items-center md:flex md:flex-row md:space-x-16 md:px-8 z-10 flex flex-col-reverse gap-y-8">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-white font-bold text-4xl xl:text-5xl">
              With special comments for you
              <span className="text-violet-500 block"> Fortune Teller X</span>
            </h1>

            <h1 class="text-2xl font-semibold bg-gradient-to-b from-violet-400 to-violet-200 bg-clip-text text-transparent leading-normal">
              <ReactTyped
                strings={[
                  "Dream Interpretation",
                  "Fortune Telling",
                  "Tarot Reading",
                  "Horoscope Interpretation",
                  "Relationship Analysis",
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
              />
            </h1>
            <div className="pt-2 md:mx-auto w-full items-center justify-center space-y-2 sm:space-x-2 sm:space-y-0 sm:flex  lg:justify-start">
              <div className="w-full space-y-3">
                <input
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-lg focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-950 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 focus:outline-none border-b-2 focus:border-violet-500"
                  placeholder="Enter your email address"
                />
              </div>
              <button
                href="javascript:void(0)"
                className="whitespace-nowrap mx-auto px-7 py-3 w-full md:basis-1/2 lg:basis-1/4"
              >
                Get started
              </button>
            </div>
          </div>
          <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3 hover:scale-105 duration-500">
            <img
              src={ZodiacWheel}
              className="w-64 mx-auto lg:w-full rounded-xl animate-spin-slow"
            />
          </div>
        </section>
      </div>

      {/* Section 2 */}
      <section class="bg-white dark:bg-zinc-900 relative">
        <div>
          <img
            src={Moon}
            className="absolute w-16 md:w-24 -top-24 right-2 lg:right-2 xl:right-52 lg:w-32 mt-16 mr-16"
          />
          {/* <img
            src={Cloud}
            className="absolute -top-24 left-[30rem] w-32 mt-16 mr-16"
          /> */}
          <img
            src={Cloud}
            className="absolute w-16 md:w-24 -top-24 left-12 lg:left-16 xl:left-72 lg:w-32 mt-16 mr-16"
          />
        </div>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Team
            </h2>
            <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Let's get to know our characters who will accompany you on this
              path.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* <!-- 1 --> */}
            <div class="bg-zinc-950 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div class="mb-8">
                <h3 class="text-2xl font-semibold text-white">
                  Dream Interpretation
                </h3>
                <p class="mt-4 text-gray-400">
                  Unlock the secrets of your dreams through divine insight.
                  Every dream holds a key to your future!
                </p>
              </div>
              <div class="mb-8">
                <img src={DreamInterpreterCharacter} alt="Dream Interpreter" />
                {/* <span class="text-xl font-medium text-gray-400">/mo</span> */}
              </div>
              <ul class="mb-8 space-y-4 text-gray-400">
                <li class="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6h-3V4a2 2 0 00-2-2h-6a2 2 0 00-2 2v2H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zM9 4h6v2H9V4zm11 14H4v-6h16v6zm0-8H4V8h16v2z" />
                  </svg>

                  <span>Career Transitions</span>
                </li>

                <li class="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>

                  <span>Relationship Dynamics</span>
                </li>

                <li class="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 10a2 2 0 110 4 2 2 0 010-4zm6 0a2 2 0 110 4 2 2 0 010-4zm-12 0a2 2 0 110 4 2 2 0 010-4z" />
                  </svg>

                  <span>And Many More</span>
                </li>
              </ul>
              <button href="#" class="block w-full ">
                Get Started
              </button>
            </div>

            {/* <!-- 2 --> */}
            <div class="bg-zinc-950 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div class="mb-8">
                <h3 class="text-2xl font-semibold text-white">
                  Horoscope Reading
                </h3>
                <p class="mt-4 text-gray-400">
                  Discover the cosmic forces shaping your destiny today. Let the
                  stars reveal your path to success and love!
                </p>
              </div>
              <div class="mb-8">
                <img src={HoroscopeReaderCharacter} alt="Dream Interpreter" />
                {/* <span class="text-xl font-medium text-gray-400">/mo</span> */}
              </div>
              <ul class="mb-8 space-y-4 text-gray-400">
                <li class="flex items-center space-x-2">
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M6 16.5l-3 2.94V11h3m5 3.66l-1.57-1.34L8 14.64V7h3m5 6l-3 3V3h3m2.81 9.81L17 11h5v5l-1.79-1.79L13 21.36l-3.47-3.02L5.75 22H3l6.47-6.34L13 18.64" />
                  </svg>

                  <span>Financial Opportunities</span>
                </li>

                <li class="flex items-center space-x-2">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 2.42l-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 11-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 11-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 01-.052-.45l-.04.08a.25.25 0 11-.447-.224l.235-.468zM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398z"
                    />
                  </svg>

                  <span>Love and Romance</span>
                </li>

                <li class="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 10a2 2 0 110 4 2 2 0 010-4zm6 0a2 2 0 110 4 2 2 0 010-4zm-12 0a2 2 0 110 4 2 2 0 010-4z" />
                  </svg>

                  <span>And Many More</span>
                </li>
              </ul>
              <button href="#" class="block w-full">
                Get Started
              </button>
            </div>

            {/* <!-- 3 --> */}
            <div class="bg-zinc-950 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div class="mb-8">
                <h3 class="text-2xl font-semibold text-white">
                  Fortune Telling
                </h3>
                <p class="mt-4 text-gray-400">
                  Explore the unknown with a personalized fortune reading. Your
                  future is waiting to unfold. Let us guide you!
                </p>
              </div>
              <div class="mb-8">
                <img src={FortuneTellerCharacter} alt="Dream Interpreter" />
                {/* <span class="text-xl font-medium text-gray-400">/mo</span> */}
              </div>
              <ul class="mb-8 space-y-4 text-gray-400">
                <li class="flex items-center space-x-2">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="#ffffff"
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g>
                          <g>
                            <path d="M344.277,343.424c-0.819,0.708-20.011,17.707-20.011,49.109V435.2c0,4.71,3.814,8.533,8.533,8.533 c4.719,0,8.533-3.823,8.533-8.533v-42.667c0-23.33,13.594-35.738,14.566-36.634l59.733-59.733 c3.388-3.388,7.612-5.35,11.895-5.521c4.352-0.188,8.09,1.382,11.204,4.488c3.106,3.115,4.668,6.989,4.489,11.204 c-0.171,4.284-2.133,8.508-5.521,11.895L395.034,360.9c-3.337,3.337-3.337,8.73,0,12.066c3.336,3.337,8.73,3.337,12.066,0 l42.667-42.658c6.426-6.426,10.155-14.694,10.513-23.279c0.367-8.969-2.995-17.485-9.481-23.962 c-6.485-6.477-14.891-9.813-23.97-9.481c-8.576,0.358-16.845,4.087-23.262,10.513L344.277,343.424z"></path>
                            <path d="M93.867,435.2c2.185,0,4.369-0.836,6.033-2.5c3.337-3.337,3.337-8.73,0-12.066l-68.753-68.71 c-0.572-0.503-14.08-12.553-14.08-36.19v-128c0-9.412,7.654-17.067,17.067-17.067c9.412,0,17.067,7.654,17.067,17.067v67.558 c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-67.558c0-18.825-15.309-34.133-34.133-34.133 C15.309,153.6,0,168.909,0,187.733v128c0,31.863,19.277,48.495,19.567,48.7L87.834,432.7 C89.498,434.364,91.682,435.2,93.867,435.2z"></path>
                            <path d="M51.721,307.029c0.358,8.585,4.087,16.853,10.513,23.27l42.667,42.667c3.337,3.337,8.73,3.337,12.066,0 c3.336-3.337,3.336-8.73,0-12.066L74.3,318.225c-3.388-3.379-5.35-7.603-5.521-11.887c-0.179-4.215,1.382-8.09,4.489-11.204 c3.115-3.106,6.878-4.676,11.204-4.488c4.284,0.171,8.508,2.133,11.895,5.521l60.134,60.109 c0.572,0.521,14.165,12.928,14.165,36.258V435.2c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-42.667 c0-31.403-19.191-48.401-19.567-48.7L108.433,284.1c-6.417-6.426-14.686-10.155-23.262-10.513 c-9.114-0.316-17.493,3.004-23.97,9.481C54.716,289.545,51.354,298.061,51.721,307.029z"></path>
                            <path d="M256,110.933c9.412,0,17.067,7.654,17.067,17.067c0,4.71,3.814,8.533,8.533,8.533c4.719,0,8.533-3.823,8.533-8.533 c0-15.855-10.914-29.107-25.6-32.922v-1.212c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v1.212 c-14.686,3.814-25.6,17.067-25.6,32.922c0,18.825,15.309,34.133,34.133,34.133c9.412,0,17.067,7.654,17.067,17.067 s-7.654,17.067-17.067,17.067c-9.412,0-17.067-7.654-17.067-17.067c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533 c0,15.855,10.914,29.107,25.6,32.922v1.212c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-1.212 c14.686-3.814,25.6-17.067,25.6-32.922c0-18.825-15.309-34.133-34.133-34.133c-9.412,0-17.067-7.654-17.067-17.067 C238.933,118.588,246.588,110.933,256,110.933z"></path>
                            <path d="M196.267,460.8H59.733c-4.719,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533 v-25.6h119.467v25.6c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-34.133C204.8,464.623,200.986,460.8,196.267,460.8 z"></path>
                            <path d="M452.267,460.8H315.733c-4.719,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.814,8.533,8.533,8.533 s8.533-3.823,8.533-8.533v-25.6h119.467v25.6c0,4.71,3.814,8.533,8.533,8.533c4.719,0,8.533-3.823,8.533-8.533v-34.133 C460.8,464.623,456.986,460.8,452.267,460.8z"></path>
                            <path d="M256,34.133c-65.877,0-119.467,53.589-119.467,119.467S190.123,273.067,256,273.067S375.467,219.477,375.467,153.6 S321.877,34.133,256,34.133z M256,256c-56.465,0-102.4-45.935-102.4-102.4c0-56.465,45.935-102.4,102.4-102.4 s102.4,45.935,102.4,102.4C358.4,210.065,312.465,256,256,256z"></path>
                            <path d="M477.867,153.6c-18.825,0-34.133,15.309-34.133,34.133v67.558c0,4.71,3.814,8.533,8.533,8.533 c4.719,0,8.533-3.823,8.533-8.533v-67.558c0-9.412,7.654-17.067,17.067-17.067s17.067,7.654,17.067,17.067v128 c0,23.637-13.508,35.686-14.566,36.634L412.1,420.634c-3.337,3.337-3.337,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5 c2.185,0,4.369-0.836,6.033-2.5l67.738-67.78c0.819-0.691,20.096-17.323,20.096-49.186v-128 C512,168.909,496.691,153.6,477.867,153.6z"></path>
                            <path d="M409.6,153.6C409.6,68.907,340.693,0,256,0S102.4,68.907,102.4,153.6S171.307,307.2,256,307.2S409.6,238.293,409.6,153.6 z M256,290.133c-75.281,0-136.533-61.252-136.533-136.533S180.719,17.067,256,17.067S392.533,78.319,392.533,153.6 S331.281,290.133,256,290.133z"></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>

                  <span>Future Wealth</span>
                </li>

                <li class="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>

                  <span>Personal Growth</span>
                </li>

                <li class="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 10a2 2 0 110 4 2 2 0 010-4zm6 0a2 2 0 110 4 2 2 0 010-4zm-12 0a2 2 0 110 4 2 2 0 010-4z" />
                  </svg>

                  <span>And Many More</span>
                </li>
              </ul>
              <button href="#" class="block w-full ">
                Get Started
              </button>
            </div>

            {/* <!-- 4 --> */}
            <div class="bg-zinc-950 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div class="mb-8">
                <h3 class="text-2xl font-semibold text-white">
                  Daily Life Analysis
                </h3>
                <p class="mt-4 text-gray-400">
                  Gain powerful insights at any hour. Receive tailored guidance
                  to navigate the day’s challenges and opportunities!
                </p>
              </div>
              <div class="mb-8">
                <img src={DailyLifeAnalyserCharacter} alt="Dream Interpreter" />
                {/* <span class="text-xl font-medium text-gray-400">/mo</span> */}
              </div>
              <ul class="mb-8 space-y-4 text-gray-400">
                <li class="flex items-center space-x-2">
                  <svg
                    version="1.1"
                    id="Uploaded_to_svgrepo_com"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 32 32"
                    xmlSpace="preserve"
                    fill="#ffffff"
                    className="h-6 w-6 text-white"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <style type="text/css">
                        {`.puchipuchi_een{fill:#ffffff;}`}
                      </style>
                      <path
                        className="puchipuchi_een"
                        d="M21,24c0,0.552-0.447,1-1,1h-8c-0.553,0-1-0.448-1-1s0.447-1,1-1h8C20.553,23,21,23.448,21,24z M20,26h-8
          c-0.553,0-1,0.448-1,1s0.447,1,1,1h8c0.553,0,1-0.448,1-1S20.553,26,20,26z M15,29v1c0,0.552,0.448,1,1,1s1-0.448,1-1v-1H15z
          M26,11c0,5-5,8-5,10c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1c0-2-5-5-5-10C6,5.477,10.477,1,16,1S26,5.477,26,11z M17,4
          c0-0.552-0.447-1-1-1c-4.411,0-8,3.589-8,8c0,0.552,0.447,1,1,1s1-0.448,1-1c0-3.309,2.691-6,6-6C16.553,5,17,4.552,17,4z"
                      />
                    </g>
                  </svg>

                  <span>Decision-Making</span>
                </li>

                <li class="flex items-center space-x-2">
                  <svg
                    fill="#ffffff"
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 496.968 496.968"
                    xml:space="preserve"
                    className="h-6 w-6 text-white"
                  >
                    <g>
                      <path d="M489.985,220.36c0,0-61.891-59.957-81.202-81.201c-5.469-6.016-13.005-10.272-21.751-10.272H363.36c-2.172,0-3.994,1.637-4.226,3.796c-0.661,6.15-6.893,10.968-14.189,10.968s-13.527-4.817-14.189-10.968c-0.231-2.159-2.054-3.796-4.226-3.796H302.86c-8.224,0-15.372,3.791-20.792,9.174c-0.029,0.028-0.064,0.046-0.093,0.075 C263.762,156.658,208.5,211.61,208.5,211.61l-84.407-43.612c-9.753-21.157-31.49-36.081-52.24-34.158l-7.5,0.692c-24.041,2.22-40.714,24.962-39.647,54.077c1.171,31.943,11.751,127.517,11.858,128.479c0.241,2.17,2.078,3.781,4.219,3.781c0.131,0,0.263-0.006,0.395-0.018l8.282-0.765L3.611,448.912c-6.004,16.79,2.772,35.334,19.563,41.339c3.587,1.282,7.251,1.891,10.858,1.89c13.28-0.001,25.758-8.245,30.473-21.434l14.109-38.857l5.354,35.455c2.217,16.185,16.117,27.951,32.017,27.951c1.456,0,2.93-0.099,4.412-0.302c17.667-2.422,30.07-18.764,27.647-36.446l-20.507-145.632l14.265-1.317c1.158-0.107,2.221-0.684,2.943-1.596c0.721-0.912,1.037-2.08,0.874-3.231l-10.235-72.48l49.062,25.349c3.798,1.963,8.052,3.001,12.303,3.001c0.001,0,0,0,0.001,0c3.733,0,7.335-0.766,10.628-2.18c2.731,1.029,5.581,1.542,8.414,1.542c6.2,0,12.313-2.408,16.883-6.98l41.989-41.988v74.021c0,2.348,1.902,4.25,4.25,4.25h2.523v168.071c0,17.122,13.931,31.052,31.053,31.052c17.122,0,31.053-13.93,31.053-31.052V347.23h2.807v112.108c0,17.122,13.931,31.052,31.053,31.052c17.122,0,31.053-13.93,31.053-31.052V291.267h2.523c2.348,0,4.25-1.902,4.25-4.25v-73.658l40.982,40.777c4.656,4.655,10.772,6.982,16.888,6.982c6.116,0,12.232-2.328,16.889-6.983C499.296,244.823,499.296,229.672,489.985,220.36z M415.228,157.623l19.568,19.568l-19.568,19.568V157.623z M323.11,137.386c2.771,8.637,11.521,14.764,21.836,14.764c10.314,0,19.064-6.127,21.836-14.764h20.25c10.86,0,19.696,8.835,19.696,19.695v125.686H283.164v-21.191h52.588c2.348,0,4.25-1.902,4.25-4.25c0-2.348-1.902-4.25-4.25-4.25h-52.588v-95.994c0-10.86,8.836-19.695,19.696-19.695H323.11z M274.664,198.42l-20.478-20.477l20.478-20.478V198.42z M69.954,430.797l-7.167-2.559c-2.21-0.787-4.642,0.363-5.431,2.574c-0.79,2.21,0.363,4.643,2.574,5.432l7.123,2.543l-4.129,11.372l-44.717-16.907l40.583-114.027l9.913-0.916l-17.546,48.983c-0.792,2.21,0.358,4.644,2.568,5.435c0.474,0.17,0.957,0.25,1.433,0.25c1.744,0,3.379-1.082,4.001-2.817l18.882-52.712l34.22-3.16L69.954,430.797z M26.035,482.247c-12.377-4.426-18.847-18.097-14.419-30.479l3.739-10.506l44.667,16.889l-3.514,9.676C52.082,480.203,38.411,486.674,26.035,482.247z M119.753,318.552l14.4,102.265l-7.136,0.832c-2.331,0.272-4.001,2.382-3.729,4.714c0.252,2.164,2.089,3.758,4.216,3.758c0.164,0,0.33-0.009,0.498-0.028l7.337-0.855l1.55,11.008l-47.206,7.978l-4.997-33.093L119.753,318.552z M119.243,486.532c-13.031,1.788-25.07-7.359-26.863-20.439l-1.429-9.465l47.123-7.964l1.551,11.014C141.409,472.7,132.266,484.748,119.243,486.532z M131.028,264.19l-13.277,1.189c-2.338,0.21-4.063,2.274-3.854,4.612c0.198,2.209,2.15,3.753,4.356,3.751c0.213,0,0.429-0.008,0.641-0.023l13.271-1.206l-0.523,3.465L74.892,263.885l-1.985-13.32l-12.53,1.12c-2.339,0.21-4.063,2.274-3.854,4.612c0.198,2.209,2.151,3.753,4.356,3.751c0.213,0,0.429-0.008,0.641-0.023l12.467-1.126l6.668,44.268L131.028,264.19z M224.515,296.03c-0.062,0.203-0.122,0.408-0.183,0.608l-13.477,45.747l-0.632,2.031c-0.464,1.477,0.362,2.871,1.866,3.331c1.502,0.461,2.88-0.362,3.331-1.866l0.632-2.031l12.145-40.77l0.052-0.175l-2.444-0.59c-1.206-0.297-2.04-1.401-1.743-2.607c0.297-1.206,1.401-2.04,2.607-1.743l2.44,0.592C223.823,295.437,224.203,295.649,224.515,296.03z" />
                    </g>
                  </svg>

                  <span>Social Interactions</span>
                </li>

                <li class="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 10a2 2 0 110 4 2 2 0 010-4zm6 0a2 2 0 110 4 2 2 0 010-4zm-12 0a2 2 0 110 4 2 2 0 010-4z" />
                  </svg>

                  <span>And Many More</span>
                </li>
              </ul>
              <button href="#" class="block w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comments */}
      <section className="bg-white dark:bg-zinc-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-2">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              User Comments
            </h2>
            <p className="font-light text-gray-500 lg:mb-2 sm:text-xl dark:text-gray-400">
              Check out the feedback we received from our users!
            </p>
          </div>
          {/* Carousel Container */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-6xl items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800">
              <Carousel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
