import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Drushti A",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: 5,
  },
  {
    name: "Meenal G",
    video: "https://www.w3schools.com/html/movie.mp4",
    rating: 5,
  },
  {
    name: "Murli N",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: 5,
  },
];

const testimonials = [
  {
    name: "Sanjay Y.",
    content:
      "This course covered many aspects that other YouTubers typically overlook...",
    rating: 5,
  },
  {
    name: "Rahul P.",
    content:
      "Thank you very much for such an awesome and amazing 'YouTube Blueprint Course.'...",
    rating: 5,
  },
  {
    name: "Faizan M.",
    content:
      "You told me the secrets, I could never have found online. Thank you very much, Dhruv",
    rating: 5,
  },
  {
    name: "Anonymous",
    content:
      "Maine kaafi savings se is course ko kharida aur ye mujhe worth it laga...",
    rating: 5,
  },
  {
    name: "Ayush J.",
    content:
      "The depth in explaining important things, sharing personal knowledge...",
    rating: 5,
  },
];

const StarRating = ({ count }) => (
  <span
    className="text-yellow-400 text-base sm:text-lg"
    aria-label={`${count} star rating`}
  >
    {"★".repeat(count)}
  </span>
);

const YouTubeReviewsSection = () => {
  return (
    <section
      className="bg-black text-white py-20 px-4 sm:px-6 lg:px-16"
      role="region"
      aria-labelledby="reviews-heading"
    >
      {/* Section Heading */}
      <header className="text-center mb-12">
        <h2
          id="reviews-heading"
          className="text-3xl sm:text-4xl font-bold leading-tight"
        >
          Reviews of the Course
        </h2>
      </header>

      {/* Overview + Video Section */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Overview Card */}
        <aside
          className="bg-[#161616] p-6 rounded-xl w-full lg:max-w-[300px]"
          aria-label="Course Overview"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            Our students love us
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mb-4">
            10,000+ people are already part of this community
          </p>
          <div className="flex justify-between items-center text-base font-semibold">
            <span>Students</span>
            <span className="text-yellow-400">4.9 ★</span>
          </div>
        </aside>

        {/* Video Reviews */}
        <main className="w-full">
          {/* Mobile Scrollable Cards */}
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 lg:hidden">
            {reviews.map((review, index) => (
              <article
                key={index}
                className="bg-[#1f1f1f] p-4 rounded-xl min-w-[240px] w-[260px] flex-shrink-0"
                aria-label={`Video review by ${review.name}`}
              >
                <div className="relative">
                  <video
                    src={review.video}
                    controls
                    className="rounded-xl w-full h-52 object-cover"
                    loading="lazy"
                    aria-label={`Video testimonial from ${review.name}`}
                  />
                  <div className="absolute bottom-[-24px] left-2 px-2 py-5 flex items-center gap-1">
                    <StarRating count={review.rating} />
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-bold mt-6">
                  {review.name}
                </h4>
              </article>
            ))}
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-4 mt-6">
            {reviews.map((review, index) => (
              <article
                key={index}
                className="bg-[#1f1f1f] p-4 rounded-xl"
                aria-label={`Video review by ${review.name}`}
              >
                <div className="relative">
                  <video
                    src={review.video}
                    controls
                    className="rounded-xl w-full h-52 object-cover"
                    loading="lazy"
                    aria-label={`Video testimonial from ${review.name}`}
                  />
                  <div className="absolute bottom-[-24px] left-2 px-2 py-5 flex items-center gap-1">
                    <StarRating count={review.rating} />
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-bold mt-6">
                  {review.name}
                </h4>
              </article>
            ))}
          </div>
        </main>
      </div>

      {/* Text Testimonials */}
      <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        aria-label="Student Testimonials"
      >
        {testimonials.map((t, idx) => (
          <article
            key={idx}
            className="bg-[#161616] p-6 rounded-xl"
            aria-label={`Testimonial from ${t.name}`}
          >
            <FaQuoteLeft className="text-red-500 text-xl sm:text-2xl mb-4" />
            <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
              {t.content}
            </p>
            <div className="font-bold text-white mb-1">{t.name}</div>
            <StarRating count={t.rating} />
          </article>
        ))}
      </section>
    </section>
  );
};

export default YouTubeReviewsSection;
