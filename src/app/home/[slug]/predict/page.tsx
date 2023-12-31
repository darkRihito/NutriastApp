"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Illust from "/public/assets/illust/medical.svg";
import toast from "react-hot-toast";
import LoaderComponent from "../../../components/loader/loader";

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [alco, setSelectedAlchoholValue] = useState<number>(0.0);
  const [active, setSelectedActivityValue] = useState<number>(0.0);
  const [smoke, setSelectedSmokerValue] = useState<number>(0.0);
  const [cholesterol, setSelectedCholesterolValue] = useState<number>(0.0);
  const [gluc, setSelectedGlucoseValue] = useState<number>(0.0);
  ("");
  const [ap_lo, setSelectedAploValue] = useState<number>(0.0);
  const [ap_hi, setSelectedAphiValue] = useState<number>(0.0);

  // Define a function to handle the radio button selection.
  const handleAlchoholChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      setSelectedAlchoholValue(numericValue);
    } else {
    }
  };
  const handleActivityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      setSelectedActivityValue(numericValue);
    } else {
    }
  };
  const handleSmokerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      setSelectedSmokerValue(numericValue);
    } else {
    }
  };
  const handleCholesterolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      setSelectedCholesterolValue(numericValue);
    } else {
    }
  };
  const handleGlucoseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      setSelectedGlucoseValue(numericValue);
    } else {
    }
  };
  const handleAploChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      setSelectedAploValue(numericValue);
    } else {
    }
  };
  const handleAphiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      setSelectedAphiValue(numericValue);
    } else {
    }
  };

  // Define the sendHandler function to send the selected value to the API.
  const sendHandler = async () => {
    setLoading(true);
    const dataToSend = {
      alco,
      active,
      smoke,
      cholesterol,
      gluc,
      ap_lo,
      ap_hi,
    };
    const headers = {
      "Content-Type": "application/json",
      withCredentials: true,
    };
    const response = await axios.post("http://localhost:5000/predict", dataToSend, headers);
    localStorage.removeItem("cachedData");
    toast.success(response.data.message);
    router.push(`/home/${params.slug}`);
    setLoading(false);
  };

  return (
    <>
      {/* Loader */}
      {loading ? (
        <>
          <div className="z-30 flex justify-center items-center fixed top-0 w-screen h-screen bg-slate-700 opacity-20">
            <LoaderComponent />
          </div>
        </>
      ) : (
        ""
      )}
      <Link href={`/home/${params.slug}`}>
        <div className="ps-4 md:ps-0 mx-auto absolute top-0 left-0 right-0 mt-8 md:mt-14 w-full max-w-5xl scale-95">
          <button type="button" className=" font-medium text-xl text-center flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span className="">Back</span>
          </button>
        </div>
      </Link>
      <div className="px-4 max-w-5xl mx-auto scale-95">
        <div className="text-2xl lg:text-3xl font-semibold text-center mt-24 mb-4">Cardiovascular Prediction</div>
        <div className="text-md lg:text-xl text-center mb-4">Up to 73% Accuration using Machine Learning, with 70.000 record data!</div>
        <div className="text-md lg:text-xl text-center">Cardiovascular disease impacts the heart and blood vessels, and includes conditions like heart disease, heart failure, and stroke.</div>
      </div>
      <div className="mt-12 max-w-2xl mx-auto px-6 lg:px-0 scale-95">
        <Image src={Illust} alt="Logo Nutriast" />
      </div>
      <div className="px-4 mb-28 scale-95">
        <div id="global-container" className="flex flex-col justify-center items-center">
          <div className="">
            <div className="max-w-2xl mx-auto w-full text-xl lg:text-2xl font-semibold mt-12 mb-4">Lets check your risk!</div>
            {/* Cholesterol */}
            <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">How high your cholesterol level?</h3>
            <ul className="grid w-full gap-2 lg:gap-6 grid-cols-3">
              <li>
                <input type="radio" id="chol-low" name="chol" value={1} onChange={handleCholesterolChange} className="hidden peer" required />
                <label
                  htmlFor="chol-low"
                  className="inline-flex items-start justify-between w-full h-full p-2 sm:p-6 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-md lg:text-lg font-semibold">Level 1</div>
                    <div className="w-full">Low cholesterol</div>
                  </div>
                  {/* SVG */}
                </label>
              </li>
              <li>
                <input type="radio" id="chol-medium" name="chol" value={2} onChange={handleCholesterolChange} className="hidden peer" />
                <label
                  htmlFor="chol-medium"
                  className="inline-flex items-start justify-between w-full h-full p-2 sm:p-6 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-md lg:text-lg font-semibold">Level 2</div>
                    <div className="w-full">Medium Cholesterol</div>
                  </div>
                  {/* SVG */}
                </label>
              </li>
              <li>
                <input type="radio" id="chol-high" name="chol" value={3} onChange={handleCholesterolChange} className="hidden peer" />
                <label
                  htmlFor="chol-high"
                  className="inline-flex items-start justify-between w-full h-full p-2 sm:p-6 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-md lg:text-lg font-semibold">Level 3</div>
                    <div className="w-full">High Cholesterol</div>
                  </div>
                  {/* SVG */}
                </label>
              </li>
            </ul>
            {/* Glucose */}
            <h3 className="mb-4 mt-4 text-lg font-medium text-gray-900 dark:text-white">How about your Glucose level?</h3>
            <ul className="grid w-full gap-2 lg:gap-6 grid-cols-3">
              <li>
                <input type="radio" id="gluc-low" name="gluc" value={1} onChange={handleGlucoseChange} className="hidden peer" required />
                <label
                  htmlFor="gluc-low"
                  className="inline-flex items-start justify-between w-full h-full p-2 sm:p-6 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-md lg:text-lg font-semibold">Level 1</div>
                    <div className="w-full">Low Glucose</div>
                  </div>
                  {/* SVG */}
                </label>
              </li>
              <li>
                <input type="radio" id="gluc-medium" name="gluc" value={2} onChange={handleGlucoseChange} className="hidden peer" />
                <label
                  htmlFor="gluc-medium"
                  className="inline-flex items-start justify-between w-full h-full p-2 sm:p-6 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-md lg:text-lg font-semibold">Level 2</div>
                    <div className="w-full">Medium Glucose</div>
                  </div>
                  {/* SVG */}
                </label>
              </li>
              <li>
                <input type="radio" id="gluc-high" name="gluc" value={3} onChange={handleGlucoseChange} className="hidden peer" />
                <label
                  htmlFor="gluc-high"
                  className="inline-flex items-start justify-between w-full h-full p-2 sm:p-6 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-md lg:text-lg font-semibold">Level 3</div>
                    <div className="w-full">High Glucose</div>
                  </div>
                  {/* SVG */}
                </label>
              </li>
            </ul>

            {/* ApHi */}
            <div className="mb-2 mt-4">
              <label htmlFor="ap-hi" className="block ms-1 text-md font-medium text-gray-900">
                Systolic Blood Pressure (Ap-Hi)
              </label>
              <span className="block italic ms-1 text-xs font-medium text-gray-400">If your blood pressure is 120/80. Then fill 120. </span>
              <div className="flex items-center border py-2 px-3 rounded-md h-12 bg-white">
                {/* SVG */}
                <input type="number" placeholder="ex : 120" id="ap-hi" onChange={handleAphiChange} className="pl-4 w-full outline-none text-lg bg-inherit rounded-md h-10" />
              </div>
            </div>

            {/* ApLo */}
            <div className="mb-2 mt-4">
              <label htmlFor="ap-lo" className="block ms-1 text-md font-medium text-gray-900">
                Diastolic Blood Pressure (Ap-Lo)
              </label>
              <span className="block italic ms-1 text-xs font-medium text-gray-400">If your blood pressure is 120/80. Then fill 80. </span>

              <div className="flex items-center border py-2 px-3 rounded-md h-12 bg-white">
                {/* SVG */}
                <input type="number" placeholder="ex : 80" id="ap-lo" onChange={handleAploChange} className="pl-4 w-full outline-none text-lg bg-inherit rounded-md h-10" />
              </div>
            </div>

            {/* Smoke */}
            <h3 className="mb-4 mt-4 text-lg font-medium text-gray-900 dark:text-white">Are you a smoker?</h3>
            <ul className="grid w-full gap-2 lg:gap-6 grid-cols-2">
              <li>
                <input type="radio" id="no-smoke" name="smoke" value={0} onChange={handleSmokerChange} className="hidden peer" required />
                <label
                  htmlFor="no-smoke"
                  className="inline-flex items-start justify-between w-full h-full p-2 sm:p-6 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-md lg:text-lg font-semibold">No</div>
                    <div className="w-full">I dont like smoke</div>
                  </div>
                  {/* SVG */}
                </label>
              </li>
              <li>
                <input type="radio" id="yes-smoke" name="smoke" value={1} onChange={handleSmokerChange} className="hidden peer" />
                <label
                  htmlFor="yes-smoke"
                  className="inline-flex items-start justify-between w-full h-full p-2 sm:p-6 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-md lg:text-lg font-semibold">Yes</div>
                    <div className="w-full">Im smoking</div>
                  </div>
                  {/* SVG */}
                </label>
              </li>
            </ul>
            {/* Alchohol */}
            <h3 className="mb-4 mt-4 text-lg font-medium text-gray-900 dark:text-white">Are you an alcoholist?</h3>
            <ul className="grid w-full gap-2 lg:gap-6 grid-cols-2">
              <li>
                <input type="radio" id="no-alcho" name="alcho" value={0} className="hidden peer" onChange={handleAlchoholChange} />
                <label
                  htmlFor="no-alcho"
                  className="inline-flex items-start justify-between w-full h-full p-2 sm:p-6 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-md lg:text-lg font-semibold">No</div>
                    <div className="w-full">I hate alchohol</div>
                  </div>
                  {/* SVG */}
                </label>
              </li>
              <li>
                <input type="radio" id="yes-alcho" name="alcho" value={1} className="hidden peer" onChange={handleAlchoholChange} />
                <label
                  htmlFor="yes-alcho"
                  className="inline-flex items-start justify-between w-full h-full p-2 sm:p-6 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-md lg:text-lg font-semibold">Yes</div>
                    <div className="w-full">Sometime i drunk</div>
                  </div>
                  {/* SVG */}
                </label>
              </li>
            </ul>
            {/* Activity */}
            <h3 className="mb-4 mt-4 text-lg font-medium text-gray-900 dark:text-white">How was your everyday activity?</h3>
            <ul className="grid w-full gap-2 lg:gap-6 grid-cols-3">
              <li>
                <input type="radio" id="light-activity" name="activity" value={1} onChange={handleActivityChange} className="hidden peer" required />
                <label
                  htmlFor="light-activity"
                  className="inline-flex items-start justify-between w-full h-full p-2 sm:p-6 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-md lg:text-lg font-semibold">Light</div>
                    <div className="w-full">Not much activity</div>
                  </div>
                  {/* SVG */}
                </label>
              </li>
              <li>
                <input type="radio" id="med-activity" name="activity" value={2} onChange={handleActivityChange} className="hidden peer" />
                <label
                  htmlFor="med-activity"
                  className="inline-flex items-start justify-between w-full h-full p-2 sm:p-6 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-md lg:text-lg font-semibold">Medium</div>
                    <div className="w-full">Normal dayworker</div>
                  </div>
                  {/* SVG */}
                </label>
              </li>
              <li>
                <input type="radio" id="hard-activity" name="activity" value={3} onChange={handleActivityChange} className="hidden peer" />
                <label
                  htmlFor="hard-activity"
                  className="inline-flex items-start justify-between w-full h-full p-2 sm:p-6 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-md lg:text-lg font-semibold">Hard</div>
                    <div className="w-full">Like an athlete</div>
                  </div>
                  {/* SVG */}
                </label>
              </li>
            </ul>
          </div>
          {/* Button */}
          <button
            type="button"
            onClick={sendHandler}
            className="mt-14 inline-flex items-center text-gray-700 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-semibold rounded-full text-lg px-14 py-3 text-center"
          >
            Predict Now!
            <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
