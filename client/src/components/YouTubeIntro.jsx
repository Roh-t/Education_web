import React from "react";

const YouTubeIntro = () => {
  return (
    <section
      className="bg-black text-white relative overflow-hidden"
      aria-labelledby="youtube-intro-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-6 sm:px-10 py-16 gap-10">
        {/* Text Content */}
        <article className="lg:w-1/2">
          <header>
            <h1
              id="youtube-intro-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              <span className="text-red-600">The YouTube Blueprint</span>
              <br />
              Make Content Creation Your Career!
            </h1>
          </header>

          <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl">
            Have you ever dreamt of becoming a YouTuber? This is your blueprint
            to getting there. Whether you want to take up content creation as a
            full-time career or a part-time job, this all-in-one course is your
            perfect plan of action. Learn to ideate, script, film, and edit
            amazing videos. Then understand the secret to getting lakhs of
            followers and making money as a content creator. It's time to live
            your dream life!
          </p>

          {/* Tags */}
          <ul className="mt-6 flex flex-wrap gap-3 text-sm font-medium" aria-label="Course highlights">
            <li className="bg-neutral-900 border border-gray-700 rounded-full px-4 py-2">
              🎥 7.5 Hours of video content
            </li>
            <li className="bg-neutral-900 border border-gray-700 rounded-full px-4 py-2">
              📘 7 Chapters
            </li>
            <li className="bg-neutral-900 border border-gray-700 rounded-full px-4 py-2">
              🌐 Hindi with English Subtitles
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4" role="group" aria-label="Call to action">
            <button
              className="bg-red-600 text-white px-6 py-3 rounded-full text-base sm:text-lg hover:bg-red-700 transition"
              aria-label="Join the course now"
            >
              Join Now
            </button>
            <button
              className="bg-neutral-800 border border-gray-400 text-white px-6 py-3 rounded-full text-base sm:text-lg hover:bg-gray-700 transition"
              aria-label="See the full course curriculum"
            >
              See curriculum
            </button>
          </div>

          {/* Learner Count & Ratings */}
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2" aria-hidden="true">
                <img
                  loading="lazy"
                  className="w-8 h-8 rounded-full border-2 border-black"
                  src="https://i.pravatar.cc/40?img=1"
                  alt="Learner avatar 1"
                />
                <img
                  loading="lazy"
                  className="w-8 h-8 rounded-full border-2 border-black"
                  src="https://i.pravatar.cc/40?img=2"
                  alt="Learner avatar 2"
                />
                <img
                  loading="lazy"
                  className="w-8 h-8 rounded-full border-2 border-black"
                  src="https://i.pravatar.cc/40?img=3"
                  alt="Learner avatar 3"
                />
              </div>
              <span>10,000+ Learners on Dhruv Rathee Academy</span>
            </div>

            <div className="flex items-center gap-2" aria-label="Course rating">
              <span aria-hidden="true">⭐</span>
              <span>4.9+ (600+ Ratings)</span>
            </div>
          </div>
        </article>

        {/* Image */}
        <figure className="lg:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80"
            alt="Course instructor speaking to the camera"
            className="rounded-xl w-full max-w-md lg:max-w-full object-cover"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
};

export default YouTubeIntro;
