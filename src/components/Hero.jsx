import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>Are you ready for some</p>
        <h1 className="uppercase font-bold text4xl sm:text-5xl md:text-6xl lg:text-7xl">
          GYM <span className="text-blue-400 font-medium">GAINS</span>?!
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        Below is a super simple way for you to generate a{" "}
        <span className="text-blue-400 font-medium">Personalised Workout</span>{" "}
        from a large database with just a few simple inputs.{" "}
        <span className="text-blue-400 font-medium">
          Click the Button Below
        </span>{" "}
        to get started and see an exercise plan that is
        <span className="text-blue-400 font-medium"> Perfectly Suited </span>to
        your goals!
      </p>

      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Acquire Wisdom"}
      />
    </div>
  );
}
