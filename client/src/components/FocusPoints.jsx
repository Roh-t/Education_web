// src/components/FocusPoints.jsx
import React from "react";
import { CheckCircle, ThumbsUp, Monitor, Shield, Award } from "lucide-react";

const focusItems = [
  {
    title: "REAL-WORLD SKILLS",
    description:
      "We teach practical real-world skills that we truly believe can have a positive impact on your life.",
    icon: <Award className="h-8 w-8" aria-hidden="true" />,
  },
  {
    title: "ON-DEMAND COURSE VIDEOS",
    description:
      "You can watch our courses on a mobile or computer as many times as you like, with lifetime access.",
    icon: <Monitor className="h-8 w-8" aria-hidden="true" />,
  },
  {
    title: "EFFECTIVE FORMAT",
    description:
      "Learn in the engaging format that Dhruv Rathee educational videos are known and loved for.",
    icon: <Shield className="h-8 w-8" aria-hidden="true" />,
  },
  {
    title: "STUDENT SATISFACTION",
    description:
      "We care about your learning, development, and experience.",
    icon: <ThumbsUp className="h-8 w-8" aria-hidden="true" />,
  },
  {
    title: "COMPLETION CERTIFICATE",
    description:
      "A certificate of completion lets you show off your accomplishment.",
    icon: <CheckCircle className="h-8 w-8" aria-hidden="true" />,
  },
];

const FocusPoints = () => {
  return (
    <section
      className="bg-neutral-900 text-white py-16 px-4 sm:px-6 lg:px-12"
      role="region"
      aria-labelledby="focus-heading"
    >
      <header className="text-center max-w-3xl mx-auto mb-12">
        <h2
          id="focus-heading"
          className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight"
        >
          WHAT WE FOCUS ON
        </h2>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {focusItems.map((item, index) => (
          <article
            key={index}
            className="bg-black rounded-xl p-6 flex items-start justify-between shadow-md transition hover:shadow-xl"
            aria-label={item.title}
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {item.description}
              </p>
            </div>
            <div
              className="ml-4 p-3 bg-white/10 rounded-lg shrink-0"
              aria-hidden="true"
            >
              {item.icon}
            </div>
          </article>
        ))}
      </main>
    </section>
  );
};

export default FocusPoints;
