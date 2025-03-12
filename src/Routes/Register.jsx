import React, { useState } from "react";

import character_X from "../assets/character_taci.png";

const Register = () => {
  const [stepNo, setStepNo] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    dateOfBirth: "",
    timeOfBirth: "",
    nationality: "",
    relationshipStatus: "",
    educationalStatus: "",
    occupation: "",
    favouriteNumber: "",
    interests: [],
    lifeGoals: [],
    personalityTrait: "",
    favouriteColor: "",
    petOwnership: "",
    religiousBelief: "",
    beliefInPreviousLife: "",
    beliefInAfterLife: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: [...prevState[name], value],
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [name]: prevState[name].filter((item) => item !== value),
        }));
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    console.log(formData);
  };

  return (
    <div class="bg-gradient-to-b from-zinc-700 from-30% via-zinc-800  to-zinc-900">
      <div class="font-[sans-serif]  md:h-screen">
        <div class="grid md:grid-cols-2 items-center -gap-8 h-full">
          <div class="max-md:order-1 p-4">
            <img
              src={character_X}
              class="hidden md:block lg:max-w-[85%] w-full h-full object-contain mx-auto rounded-xl"
              alt="login-image"
            />
          </div>

          <div class="items-center md:p-8 p-6 h-full lg:w-11/12 m-auto lg:ml-auto">
            {/* Progress Bar */}
            <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base mb-16">
              <li class="flex md:w-full items-center text-yellow-400 dark:text-yellow-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <svg
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="me-2">1</span>
                  Login <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                </span>
              </li>
              <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span
                  class={`flex items-center after:content-['/'] sm:after:hidden after:mx-2 ${
                    stepNo >= 2 && "text-yellow-400 dark:text-yellow-500"
                  } after:text-gray-200 dark:after:text-gray-500`}
                >
                  {stepNo >= 2 && (
                    <svg
                      class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                  )}
                  <span class="me-2">2</span>
                  Personal{" "}
                  <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                </span>
              </li>
              <li
                class={`flex items-center ${
                  stepNo >= 3 && "text-yellow-400 dark:text-yellow-500"
                } after:text-gray-200 dark:after:text-gray-500`}
              >
                {stepNo >= 3 && (
                  <svg
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                )}
                <span class="me-2">3</span>
                Character{" "}
                <span class="hidden sm:inline-flex sm:ms-2">Info</span>
              </li>
            </ol>

            {/* End of Progress Bar */}
            <div class="flex justify-center my-2 mx-4 md:mx-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                class="max-w-lg w-full mx-auto bg-zinc-900 rounded-lg shadow-md"
              >
                <div class="mb-12">
                  <h3 class="text-3xl font-bold text-yellow-400">
                    Create an account
                  </h3>
                </div>
                {stepNo === 1 && (
                  <>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <label class="text-white text-xs block mb-2">
                          Name
                        </label>
                        <div class="relative flex items-center">
                          <input
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                            placeholder="Enter firstname"
                          />
                        </div>
                      </div>

                      <div>
                        <label class="text-white text-xs block mb-2">
                          Surname
                        </label>
                        <div class="relative flex items-center">
                          <input
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                            placeholder="Enter surname"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <label class="text-white text-xs block mb-2">
                        Gender
                      </label>
                      <select
                        class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option
                          class="text-black"
                          value="none-prefer-not-to-specify"
                        >
                          None/Prefers not to Specify
                        </option>
                        <option class="text-black" value="male">
                          Male
                        </option>
                        <option class="text-black" value="female">
                          Female
                        </option>
                      </select>
                    </div>

                    <div class="mt-8">
                      <label class="text-white text-xs block mb-2">Email</label>
                      <div class="relative flex items-center">
                        <input
                          name="email"
                          type="text"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          placeholder="Enter email"
                        />
                      </div>
                    </div>
                    <div class="mt-8">
                      <label class="text-white text-xs block mb-2">
                        Password
                      </label>
                      <div class="relative flex items-center">
                        <input
                          name="password"
                          type="password"
                          required
                          value={formData.password}
                          onChange={handleChange}
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          placeholder="Enter password"
                        />
                      </div>
                    </div>
                  </>
                )}

                {stepNo === 2 && (
                  <>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <label class="text-white text-xs block mb-2">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          name="dateOfBirth"
                          required
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label class="text-white text-xs block mb-2">
                          Time of Birth (Approximate Value)
                        </label>
                        <input
                          type="time"
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          name="timeOfBirth"
                          required
                          value={formData.timeOfBirth}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-8">
                      <div>
                        <label class="text-white text-xs block mb-2">
                          Nationality
                        </label>
                        <select
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          name="nationality"
                          required
                          value={formData.nationality}
                          onChange={handleChange}
                        >
                          <option class="text-black" value="turkey">
                            Turkey
                          </option>
                          <option class="text-black" value="usa">
                            USA
                          </option>
                          <option class="text-black" value="uk">
                            UK
                          </option>
                          <option class="text-black" value="germany">
                            Germany
                          </option>
                        </select>
                      </div>
                      <div>
                        <label class="text-white text-xs block mb-2">
                          Relationship Status
                        </label>
                        <select
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          name="relationshipStatus"
                          required
                          value={formData.relationshipStatus}
                          onChange={handleChange}
                        >
                          <option
                            class="text-black"
                            value="none-prefer-not-to-specify"
                          >
                            None/Prefers not to Specify
                          </option>
                          <option class="text-black" value="yes">
                            Yes
                          </option>
                          <option class="text-black" value="no">
                            No
                          </option>
                          <option class="text-black" value="mixed">
                            Mixed
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-8">
                      <div>
                        <label class="text-white text-xs block mb-2">
                          Educational Status
                        </label>
                        <select
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          name="educationalStatus"
                          required
                          value={formData.educationalStatus}
                          onChange={handleChange}
                        >
                          <option
                            class="text-black"
                            value="none-prefer-not-specify"
                          >
                            None/Prefers not to Specify
                          </option>
                          <option class="text-black" value="primary-school">
                            Primary School Graduate
                          </option>
                          <option class="text-black" value="secondary-school">
                            Secondary School Graduate
                          </option>
                          <option class="text-black" value="high-school">
                            High School Graduate/Continuing
                          </option>
                          <option class="text-black" value="associate-degree">
                            Associate Degree Graduate/Continuing
                          </option>
                          <option class="text-black" value="bachelor-degree">
                            Bachelor's Degree Graduate/Continuing
                          </option>
                          <option class="text-black" value="master-degree">
                            Master's Degree Graduate/Continuing
                          </option>
                          <option class="text-black" value="doctorate-degree">
                            Doctorate Graduate/Continuing
                          </option>
                        </select>
                      </div>

                      <div>
                        <label class="text-white text-xs block mb-2">
                          Occupation
                        </label>
                        <select
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          name="occupation"
                          required
                          value={formData.occupation}
                          onChange={handleChange}
                        >
                          <option
                            class="text-black"
                            value="none-prefer-not-to-specify"
                          >
                            None/Prefers not to Specify
                          </option>
                          <option class="text-black" value="software-engineer">
                            Software Engineer
                          </option>
                          <option class="text-black" value="data-scientist">
                            Data Scientist
                          </option>
                          <option class="text-black" value="web-developer">
                            Web Developer
                          </option>
                          <option class="text-black" value="graphic-designer">
                            Graphic Designer
                          </option>
                          <option class="text-black" value="project-manager">
                            Project Manager
                          </option>
                          <option class="text-black" value="product-manager">
                            Product Manager
                          </option>
                          <option
                            class="text-black"
                            value="marketing-specialist"
                          >
                            Marketing Specialist
                          </option>
                          <option
                            class="text-black"
                            value="sales-representative"
                          >
                            Sales Representative
                          </option>
                          <option class="text-black" value="customer-service">
                            Customer Service Representative
                          </option>
                          <option class="text-black" value="financial-analyst">
                            Financial Analyst
                          </option>
                          <option class="text-black" value="human-resources">
                            Human Resources
                          </option>
                          <option class="text-black" value="operations-manager">
                            Operations Manager
                          </option>
                          <option class="text-black" value="research-scientist">
                            Research Scientist
                          </option>
                          <option
                            class="text-black"
                            value="medical-professional"
                          >
                            Medical Professional
                          </option>
                          <option class="text-black" value="lawyer">
                            Lawyer
                          </option>
                          <option class="text-black" value="teacher">
                            Teacher
                          </option>
                          <option class="text-black" value="engineer">
                            Engineer
                          </option>
                          <option class="text-black" value="accountant">
                            Accountant
                          </option>
                          <option class="text-black" value="architect">
                            Architect
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-8">
                      <div>
                        <label
                          style={{
                            color: "white",
                            fontSize: "0.75rem",
                            marginBottom: "0.5rem",
                            display: "block",
                          }}
                        >
                          Favourite Number
                        </label>
                        <input
                          type="number"
                          style={{
                            WebkitAppearance: "none",
                            MozAppearance: "textfield",
                            width: "100%",
                            backgroundColor: "transparent",
                            color: "white",
                            borderBottom: "1px solid #D1D5DB",
                            outline: "none",
                            padding: "0.75rem 0.5rem",
                          }}
                          name="favouriteNumber"
                          placeholder="Enter your favourite number"
                          min="0"
                          step="1"
                          required
                          value={formData.favouriteNumber}
                          onChange={handleChange}
                        />
                        <style jsx>{`
                          /* Remove the number input spinners */
                          input[type="number"]::-webkit-inner-spin-button,
                          input[type="number"]::-webkit-outer-spin-button {
                            -webkit-appearance: none;
                            margin: 0;
                          }
                        `}</style>
                      </div>

                      <div>
                        <label class="text-white text-xs block mb-2">
                          Nationality
                        </label>
                        <select
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          name="nationality"
                          required
                          value={formData.nationality}
                          onChange={handleChange}
                        >
                          <option class="text-black" value="turkey">
                            Turkey
                          </option>
                          <option class="text-black" value="usa">
                            USA
                          </option>
                          <option class="text-black" value="uk">
                            UK
                          </option>
                          <option class="text-black" value="germany">
                            Germany
                          </option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {stepNo === 3 && (
                  <>
                    <div className="grid grid-cols-2 gap-8 mt-8">
                      <div>
                        <label class="text-white text-xs block mb-2">
                          Interests/Hobbies
                        </label>
                        <div class="flex flex-col gap-2">
                          <label class="text-white text-xs block">
                            <input
                              type="checkbox"
                              name="interests"
                              value="reading"
                              class="mr-2"
                              onChange={handleChange}
                              checked={formData.interests.includes("reading")}
                            />
                            Reading
                          </label>
                          <label class="text-white text-xs block">
                            <input
                              type="checkbox"
                              name="interests"
                              value="sports"
                              class="mr-2"
                              onChange={handleChange}
                              checked={formData.interests.includes("sports")}
                            />
                            Sports
                          </label>
                          <label class="text-white text-xs block">
                            <input
                              type="checkbox"
                              name="interests"
                              value="traveling"
                              class="mr-2"
                              onChange={handleChange}
                              checked={formData.interests.includes("traveling")}
                            />
                            Traveling
                          </label>
                          <label class="text-white text-xs block">
                            <input
                              type="checkbox"
                              name="interests"
                              value="music"
                              class="mr-2"
                              onChange={handleChange}
                              checked={formData.interests.includes("music")}
                            />
                            Music
                          </label>
                          {/* Add more hobbies as needed */}
                        </div>
                      </div>

                      <div>
                        <label class="text-white text-xs block mb-2">
                          Life Goals
                        </label>
                        <div class="flex flex-col gap-2">
                          <label class="text-white text-xs block">
                            <input
                              type="checkbox"
                              name="lifeGoals"
                              value="travel-the-world"
                              class="mr-2"
                              onChange={handleChange}
                              checked={formData.lifeGoals.includes(
                                "travel-the-world"
                              )}
                            />
                            Travel the world
                          </label>
                          <label class="text-white text-xs block">
                            <input
                              type="checkbox"
                              name="lifeGoals"
                              value="start-a-business"
                              class="mr-2"
                              onChange={handleChange}
                              checked={formData.lifeGoals.includes(
                                "start-a-business"
                              )}
                            />
                            Start a business
                          </label>
                          <label class="text-white text-xs block">
                            <input
                              type="checkbox"
                              name="lifeGoals"
                              value="write-a-book"
                              class="mr-2"
                              onChange={handleChange}
                              checked={formData.lifeGoals.includes(
                                "write-a-book"
                              )}
                            />
                            Write a book
                          </label>
                          <label class="text-white text-xs block">
                            <input
                              type="checkbox"
                              name="lifeGoals"
                              value="learn-a-new-skill"
                              class="mr-2"
                              onChange={handleChange}
                              checked={formData.lifeGoals.includes(
                                "learn-a-new-skill"
                              )}
                            />
                            Learn a new skill
                          </label>
                          {/* Add more life goals as needed */}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-8">
                      <div>
                        <label class="text-white text-xs block mb-2">
                          Personality Trait
                        </label>
                        <select
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          name="personalityTrait"
                          required
                          value={formData.personalityTrait}
                          onChange={handleChange}
                        >
                          <option class="text-black" value="introvert">
                            Introvert
                          </option>
                          <option class="text-black" value="extrovert">
                            Extrovert
                          </option>
                          <option class="text-black" value="ambivert">
                            Ambivert
                          </option>
                          <option class="text-black" value="optimist">
                            Optimist
                          </option>
                          <option class="text-black" value="pessimist">
                            Pessimist
                          </option>
                          {/* Add more traits as needed */}
                        </select>
                      </div>

                      <div>
                        <label class="text-white text-xs block mb-2">
                          Favourite Color
                        </label>
                        <select
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          name="favouriteColor"
                          required
                          value={formData.favouriteColor}
                          onChange={handleChange}
                        >
                          <option class="text-black" value="red">
                            Red
                          </option>
                          <option class="text-black" value="blue">
                            Blue
                          </option>
                          <option class="text-black" value="green">
                            Green
                          </option>
                          <option class="text-black" value="yellow">
                            yellow
                          </option>
                          <option class="text-black" value="yellow">
                            yellow
                          </option>
                          {/* Add more colors as needed */}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-8">
                      <div>
                        <label class="text-white text-xs block mb-2">
                          Pet Ownership
                        </label>
                        <select
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          name="petOwnership"
                          required
                          value={formData.petOwnership}
                          onChange={handleChange}
                        >
                          <option class="text-black" value="yes">
                            Yes
                          </option>
                          <option class="text-black" value="no">
                            No
                          </option>
                        </select>
                      </div>

                      <div>
                        <label class="text-white text-xs block mb-2">
                          Religious Belief
                        </label>
                        <select
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          name="religiousBelief"
                          required
                          value={formData.religiousBelief}
                          onChange={handleChange}
                        >
                          <option
                            class="text-black"
                            value="none-prefer-not-to-specify"
                          >
                            None/Prefers not to Specify
                          </option>
                          <option class="text-black" value="christianity">
                            Christianity
                          </option>
                          <option class="text-black" value="islam">
                            Islam
                          </option>
                          <option class="text-black" value="judaism">
                            Judaism
                          </option>
                          <option class="text-black" value="buddhism">
                            Buddhism
                          </option>
                          <option class="text-black" value="hinduism">
                            Hinduism
                          </option>
                          {/* Add more beliefs as needed */}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-8">
                      <div>
                        <label class="text-white text-xs block mb-2">
                          Belief in Previous Life
                        </label>
                        <select
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          name="beliefInPreviousLife"
                          required
                          value={formData.beliefInPreviousLife}
                          onChange={handleChange}
                        >
                          <option class="text-black" value="yes">
                            Yes
                          </option>
                          <option class="text-black" value="no">
                            No
                          </option>
                        </select>
                      </div>

                      <div>
                        <label class="text-white text-xs block mb-2">
                          Belief in After Life
                        </label>
                        <select
                          class="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                          name="beliefInAfterLife"
                          required
                          value={formData.beliefInAfterLife}
                          onChange={handleChange}
                        >
                          <option class="text-black" value="yes">
                            Yes
                          </option>
                          <option class="text-black" value="no">
                            No
                          </option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div
                  class={`mt-12 flex ${
                    stepNo == 1 ? "justify-end" : "justify-between"
                  } `}
                >
                  {stepNo > 1 && (
                    <button
                      onClick={() => setStepNo((prev) => prev - 1)}
                      class="text-white text-xs font-bold bg-yellow-400 px-6 py-3 rounded-md"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={() => setStepNo((prev) => prev + 1)}
                    class="text-white text-xs font-bold bg-yellow-400 px-6 py-3 rounded-md"
                  >
                    {stepNo < 3 ? "Next" : "Register"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
