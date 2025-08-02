import React from "react";

const InfoSection = ({
  badgeText,
  heading,
  description,
  points = [],
  buttonText = "Get Started",
  image,
  reverse = false,
}) => {
  return (
    <section
      role="region"
      aria-labelledby="info-section-heading"
      className={`bg-gradient-to-br from-[#2f1e1e] via-[#1c1b1a] to-[#1c1c1a] text-white px-4 sm:px-6 lg:px-16 py-12 sm:py-20 rounded-3xl shadow-xl`}
    >
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-between gap-10 max-w-7xl mx-auto`}
      >
        {/* Text Content */}
        <article
          className="w-full md:w-1/2 space-y-6"
          aria-label="Information section content"
        >
          <span className="inline-block bg-white text-black text-xs sm:text-sm font-bold py-1 px-3 rounded">
            {badgeText}
          </span>

          <h1
            id="info-section-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-tight"
          >
            {heading}
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>

          <ul className="text-gray-300 text-sm sm:text-base space-y-2 list-none pl-0">
            {points.map((point, idx) => (
              <li key={idx}>✔ {point}</li>
            ))}
          </ul>

          <button
            className="mt-4 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
            aria-label={buttonText}
          >
            {buttonText}
          </button>
        </article>

        {/* Image */}
        <figure className="w-full md:w-1/2 mt-10 md:mt-0">
          <img
            src={image}
            alt="Illustrative section image"
            className="w-full h-auto rounded-xl object-cover"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
};

export default InfoSection;
