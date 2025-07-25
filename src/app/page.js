import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-200">
      <h1 className="text-black mb-2">React</h1>
      <p>
        <a
          href="https://www.youtube.com/watch?v=S7XpTAnSDL4"
          target="_blank"
          className="border-b"
        >
          Watch this video
        </a>
      </p>
    </div>
  );
}
