import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-200">
      <h1 className="text-gray-600 mb-2">React</h1>
      <p>
        <a
          href="https://www.youtube.com/watch?v=S7XpTAnSDL4"
          target="_blank"
          className="border-b text-gray-600 text-sm hover:border-0"
        >
          Watch this video
        </a>
      </p>
    </div>
  );
}
