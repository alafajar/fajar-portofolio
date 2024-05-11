"use client";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 xl:px-48">
      {/* Image Container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image
          src="/hero.png"
          alt="hero image"
          fill
          className="object-contain"
        />
      </div>
      {/* Text Container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center items-center gap-8">
        {/* Title */}
        <h1 className="text-4xl font-bold md:text-6xl">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui
          assumenda numquam a eius, obcaecati illo placeat, quam asperiores
          facilis nobis libero cupiditate ex doloremque molestiae repudiandae
          reiciendis! Nihil, fugiat!
        </p>
        {/* Buttons */}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
