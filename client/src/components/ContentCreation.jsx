import React from "react";
import heroImg from "../images/hero.jpeg"; // Ensure this path is correct

const ContentCreation = () => {
  return (
    <main
      role="main"
      className="px-4 sm:px-6 lg:px-12 py-10 sm:py-16 md:py-20 bg-gradient-to-br from-[#2f1e1e] via-[#1c1b1a] to-[#1c1c1a] text-white rounded-3xl shadow-xl"
    >
      <section
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto"
        aria-labelledby="content-creation-heading"
      >
        {/* Left: Text Content */}
        <article className="w-full md:w-1/2 space-y-6" aria-label="Content Creation Overview">
          <span className="inline-block bg-white text-black text-xs sm:text-sm font-bold py-1 px-3 rounded">
            CONTENT CREATION
          </span>

          <h1
            id="content-creation-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-tight"
          >
            THE YOUTUBE BLUEPRINT: <br />
            MAKE CONTENT CREATION YOUR CAREER!
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Have you ever dreamt of becoming a YouTuber? This is your blueprint to
            getting there. Whether you want to take up content creation as a full-time
            career or a part-time job, this all-in-one course is your perfect plan of action.
          </p>

          <ul className="text-gray-300 text-sm sm:text-base space-y-2 list-none pl-0">
            <li>✔ Find your niche based on your passion and skills.</li>
            <li>✔ Learn to ideate, script, film, and edit videos.</li>
            <li>✔ Understand the secret to getting lakhs of followers.</li>
            <li>✔ Discover ways to earn money as a creator.</li>
          </ul>

          <button
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
            aria-label="Get Started with the YouTube Blueprint"
          >
            GET STARTED
          </button>
        </article>

        {/* Right: Image */}
        <figure className="w-full md:w-1/2">
          <img
            src={heroImg}
            alt="Dhruv Rathee promoting YouTube content creation"
            className="w-full h-auto rounded-xl object-cover"
            loading="lazy"
          />
        </figure>
      </section>
    </main>
  );
};

export default ContentCreation;
