import React from "react";

const YouTubeIntroCard = () => {
  return (
    <section
      className="relative bg-black text-white py-28 sm:py-32 px-4 sm:px-6 overflow-hidden"
      aria-labelledby="youtube-blueprint-heading"
      role="region"
    >
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Cutout Image Positioned Above the Card */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          aria-hidden="true"
        >
          <img
            src="https://images.unsplash.com/photo-1560264418-c4445382edbc"
            alt="Educator presenting YouTube course"
            className="h-60 sm:h-72 md:h-80 object-contain"
            loading="lazy"
          />
        </div>

        {/* Main Intro Card */}
        <article
          className="bg-gradient-to-b from-zinc-900 to-black rounded-3xl px-6 sm:px-10 md:px-16 pt-40 pb-10 text-center shadow-xl"
        >
          <header>
            <h1
              id="youtube-blueprint-heading"
              className="text-red-600 text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              The YouTube Blueprint
            </h1>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Make Content Creation Your Career
            </h2>
          </header>

          <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
            Have you ever dreamt of becoming a full-time content creator? This is your
            blueprint to getting there. Whether you want to take up content creation
            as a full-time career or just as a side hustle, this all-in-one course
            is your perfect starting point.
          </p>

          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Watch YouTube Course Trailer"
          >
            Watch Trailer
          </button>
        </article>
      </div>

      {/* Optional Background Overlay */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-20 z-0 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
};

export default YouTubeIntroCard;
