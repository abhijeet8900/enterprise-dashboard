import React from "react";

function Loading() {
  return (
    <div
      role="status"
      className="w-full flex flex-col justify-evenly animate-pulse dark:border-gray-700 min-h-[400px] transition delay-150 duration-300 ease-in-out p-8 opacity-70"
    >
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
      <div className="w-48 h-2 mb-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <div className="h-full flex items-stretch justify-evenly flex-col">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loading;
