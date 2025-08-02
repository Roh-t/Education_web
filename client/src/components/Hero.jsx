import React from "react";
import heroImg from "../images/hero.jpeg";

const Hero = () => {
  return (
    <section
      className="bg-black text-white px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between"
      aria-labelledby="hero-heading"
    >
      {/* Left Content */}
      <header className="max-w-xl w-full space-y-6 mt-10 md:mt-0 md:ml-8">
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
        >
          LEARN WHAT SCHOOL DOESN’T TEACH YOU
        </h1>

        <p className="text-gray-300 text-base sm:text-lg">
          At Dhruv Rathee Academy, you can gain practical knowledge and learn
          real-world skills that will help you transform your life at work,
          school and home.
        </p>

        <button
          className="bg-white text-red-600 px-6 py-4 sm:py-5 rounded-full font-semibold transition duration-300 hover:bg-gray-100"
          aria-label="Explore Courses"
        >
          EXPLORE COURSES
        </button>

        {/* Social Proof */}
        <div className="flex flex-wrap items-center gap-4 pt-6">
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="Learner 1"
              className="w-10 h-10 rounded-full border-2 border-white"
              loading="lazy"
            />
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="Learner 2"
              className="w-10 h-10 rounded-full border-2 border-white"
              loading="lazy"
            />
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="Learner 3"
              className="w-10 h-10 rounded-full border-2 border-white"
              loading="lazy"
            />
          </div>
          <div className="text-sm">
            <p className="text-gray-400">
              10,000+ <span className="text-white">Happy Learners</span>
            </p>
          </div>
          <div className="text-sm">
            <p className="text-yellow-400 font-semibold">
              4.8+ <span className="text-gray-400">(600+ Ratings)</span>
            </p>
            <p className="text-yellow-400 text-lg">★★★★★</p>
          </div>
        </div>
      </header>

      {/* Right Image */}
      <figure className="w-full md:w-[40%]">
        <img
          src={heroImg}
          alt="Person studying with Dhruv Rathee Academy"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          loading="lazy"
        />
      </figure>
    </section>
  );
};

export default Hero;
