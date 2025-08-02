// src/components/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "PRITHU H.",
    quote:
      "The entire course was so well-structured. A much needed break from the toxic productivity culture...",
    stars: 5,
  },
  {
    name: "RAGHAV GOEL",
    quote:
      "I believe conducting the course in Hindi Language was the best part. All the concepts were explained simply...",
    stars: 5,
  },
  {
    name: "HARSH S.",
    quote:
      "The lessons were given and organised in a fantastic way. Dhruv has the capacity to maintain attention...",
    stars: 5,
  },
  {
    name: "KEYUR KUMBHARE",
    quote:
      "This course proved to be a game changer and helped me in killing the habit of procrastination...",
    stars: 5,
  },
  {
    name: "JED L.",
    quote:
      "Course is short, simple and to the point. After taking this course, I truly agree this is how I want to live...",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      className="bg-black text-white px-4 sm:px-6 lg:px-12 py-16"
      role="region"
      aria-labelledby="testimonials-heading"
    >
      <header className="max-w-4xl mx-auto mb-12 text-center">
        <h2
          id="testimonials-heading"
          className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight"
        >
          HERE’S WHAT OUR CURRENT STUDENTS HAVE TO SAY...
        </h2>
      </header>

      <main className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <article
          aria-label="Success Rate"
          className="border border-white/20 rounded-xl flex flex-col justify-center items-center py-12 text-center"
        >
          <div className="text-4xl font-bold mb-2">92%</div>
          <p className="text-sm px-6">of customers were served successfully*</p>
        </article>

        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </main>
    </section>
  );
};

const TestimonialCard = ({ name, quote, stars }) => {
  return (
    <article
      className="bg-neutral-900 p-6 rounded-xl shadow-md"
      aria-label={`Testimonial from ${name}`}
    >
      <blockquote className="text-white text-sm mb-6">
        <div className="text-4xl mb-2 text-white">“</div>
        <p className="leading-relaxed">{quote}</p>
      </blockquote>
      <footer className="flex items-center gap-3 mt-auto">
        <div
          className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-white font-semibold"
          aria-hidden="true"
        >
          {name[0]}
        </div>
        <div>
          <div className="text-white font-bold text-sm">{name}</div>
          <div
            className="text-yellow-400 text-sm"
            aria-label={`${stars} out of 5 stars`}
          >
            {"★".repeat(stars)}
            {"☆".repeat(5 - stars)}
          </div>
        </div>
      </footer>
    </article>
  );
};

export default Testimonials;
