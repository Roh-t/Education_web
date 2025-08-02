import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Testimonials from "../components/Testimonials";
import FocusPoints from "../components/FocusPoints";
import About from "../components/About";
import MyWork from "../components/Mywork";
import Footer from "../components/Footer";

// ✅ Images with proper import path
import heroImg from "../images/hero.jpeg";
import chatgptImg from "../images/chatgpt.jpeg";
import productivityImg from "../images/4.jpeg";

const infoSectionsData = [
  {
    badgeText: "CONTENT CREATION",
    heading: "THE YOUTUBE BLUEPRINT: MAKE CONTENT CREATION YOUR CAREER!",
    description:
      "Have you ever dreamt of becoming a Youtuber? This is your blueprint to getting there. Whether you want to take up content creation full-time or part-time, this all-in-one course is your perfect plan of action.",
    points: [
      "Find your niche based on your passion and skills.",
      "Learn to ideate, script, film, and edit videos.",
      "Understand the secret to getting lakhs of followers.",
      "Discover ways to earn money as a creator.",
    ],
    buttonText: "GET STARTED",
    image: heroImg,
    reverse: false,
  },
  {
    badgeText: "AI",
    heading: "MASTER CHATGPT: TRANSFORM YOUR LIFE WITH AI CHATBOTS",
    description:
      "Artificial Intelligence is changing the world. Learn to use the power of ChatGPT at its full potential to level up your productivity at work, school and at home. Discover the basics of machine learning and prompt engineering.",
    points: [
      "Understand AI, Machine Learning and Prompt Engineering.",
      "Learn to use ChatGPT at school, university, work, and at home.",
      "Prompt sheet resources to help you get started with AI Chatbots.",
      "Get ahead and prepare yourself for the skills of the future.",
    ],
    buttonText: "GET STARTED",
    image: chatgptImg,
    reverse: true,
  },
  {
    badgeText: "PRODUCTIVITY",
    heading: "HOW TO DO A MILLION THINGS ALL AT ONCE",
    description:
      "Become a Master of Time Management and Productivity. Learn from me as I teach you how to plan your day, track your time, achieve your goals and live your dream life!",
    points: [
      "✔ Practical tips to manage your time and boost productivity",
      "✔ Assignments to help you practice what you learn",
      "✔ Balance your life and spend time on the things you love",
    ],
    buttonText: "GET STARTED",
    image: productivityImg,
    reverse: false,
  },
];

const Home = () => {
  return (
    <main>
      {/* ✅ Semantic and Responsive */}
      <header>
        <Hero />
      </header>

      {/* ✅ Informational Sections */}
      <section aria-labelledby="courses-section" className="space-y-16 px-4 sm:px-6 lg:px-12 py-12 max-w-7xl mx-auto">
        {infoSectionsData.map((section, index) => (
          <article key={index}>
            <InfoSection {...section} />
          </article>
        ))}
      </section>

      {/* ✅ Testimonials */}
      <section aria-labelledby="testimonials" className="px-4 sm:px-6 lg:px-12 py-12 max-w-7xl mx-auto">
        <Testimonials />
      </section>

      {/* ✅ Focus Points */}
      <section aria-labelledby="focus-points" className="px-4 sm:px-6 lg:px-12 py-12 max-w-7xl mx-auto">
        <FocusPoints />
      </section>

      {/* ✅ About Section */}
      <section aria-labelledby="about-section" className="px-4 sm:px-6 lg:px-12 py-12 max-w-7xl mx-auto">
        <About />
      </section>

      {/* ✅ Work Showcase */}
      <section aria-labelledby="my-work" className="px-4 sm:px-6 lg:px-12 py-12 max-w-7xl mx-auto">
        <MyWork />
      </section>

      {/* ✅ Footer */}
      <footer className="mt-10 border-t border-neutral-800">
        <Footer />
      </footer>
    </main>
  );
};

export default Home;
