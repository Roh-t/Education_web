import React, { useState } from "react";

const faqs = [
  {
    question: "Will Dhruv Rathee teach the class himself?",
    answer: "Yes, this course is made up of pre-recorded video lessons by Dhruv Rathee.",
  },
  {
    question: "What is the time validity of this course?",
    answer: "When you buy the course, every week a new chapter will unlock. Once all chapters are unlocked, you will have lifetime access to the course, as long as the course is being operated and sold.",
  },
  {
    question: "Will I get a certificate, as proof of my learning?",
    answer: "Yes, after completing the full curriculum, you will receive a certificate signed by Dhruv Rathee.",
  },
  {
    question: "Which language is this course taught in?",
    answer: "The course is primarily taught in English, with subtitles provided.",
  },
  {
    question: "I am facing problems with payment processing when buying this course, what should I do?",
    answer: "Please contact our support team using the help section on the website or email us directly. We'll be happy to assist you!",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12"
      aria-labelledby="faq-heading"
    >
      <header className="max-w-4xl mx-auto text-center mb-10">
        <h2
          id="faq-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mt-2">
          Answers to the most common questions about the course
        </p>
      </header>

      <main className="max-w-4xl mx-auto space-y-5">
        {faqs.map((faq, index) => (
          <article
            key={index}
            className="bg-zinc-900 border border-zinc-700 rounded-lg"
            aria-expanded={activeIndex === index}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-5 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-controls={`faq-answer-${index}`}
              aria-expanded={activeIndex === index}
              id={`faq-question-${index}`}
            >
              <span className="font-semibold text-base sm:text-lg">
                {faq.question}
              </span>
              <span className="text-lg sm:text-xl">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </button>

            {activeIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="px-5 pb-4 text-gray-300 text-sm sm:text-base"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                {faq.answer}
              </div>
            )}
          </article>
        ))}
      </main>
    </section>
  );
};

export default FAQSection;
