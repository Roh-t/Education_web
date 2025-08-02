import React, { useState } from "react";

const curriculumData = [
  {
    title: "Chapter 1 - Let's get Started",
    lessons: [
      { title: "Welcome Video", duration: "08:54" },
      { title: "Should You Quit Your Job?", duration: "04:28" },
      { title: "The Harsh Truths About Social Media Careers", duration: "08:51" },
    ],
  },
  {
    title: "Chapter 2 - Crafting Your Unique Voice",
    lessons: [
      { title: "Understanding Your Strengths", duration: "06:43" },
      { title: "Identifying Your Audience", duration: "07:19" },
    ],
  },
  {
    title: "Chapter 3 - The Filmmaker Within",
    lessons: [
      { title: "Storytelling Basics", duration: "05:55" },
      { title: "Shooting Techniques", duration: "06:38" },
    ],
  },
  {
    title: "Chapter 4 - The Video Editing Suite",
    lessons: [
      { title: "Editing with Free Tools", duration: "09:10" },
      { title: "Advanced PC Editing", duration: "07:42" },
    ],
  },
  {
    title: "Chapter 5 - Decoding Analytics",
    lessons: [
      { title: "Reading YouTube Studio", duration: "08:12" },
      { title: "Making Data-driven Content", duration: "05:48" },
    ],
  },
  {
    title: "Chapter 6 - Earning Money as a Content Creator",
    lessons: [
      { title: "Ad Revenue and Sponsorships", duration: "07:34" },
      { title: "Affiliate & Merch Sales", duration: "06:29" },
    ],
  },
  {
    title: "Chapter 7 - Road to a Million Followers",
    lessons: [
      { title: "Growth Hacks", duration: "08:00" },
      { title: "Building a Loyal Community", duration: "06:50" },
    ],
  },
];

const CourseCurriculum = () => {
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (index) => {
    setOpenChapter(openChapter === index ? null : index);
  };

  return (
    <section className="bg-zinc-900 text-white px-4 py-16 lg:px-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-red-600">
        The YouTube Blueprint <span className="text-white">Course Curriculum</span>
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {curriculumData.map((chapter, index) => (
            <div key={index} className="mb-4 bg-zinc-800 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg hover:bg-zinc-700 transition"
                onClick={() => toggleChapter(index)}
              >
                {chapter.title}
                <span className="text-sm bg-zinc-700 px-3 py-1 rounded-full">
                  Module {index + 1}
                </span>
              </button>
              {openChapter === index && (
                <ul className="px-6 pb-4 space-y-2">
                  {chapter.lessons.map((lesson, i) => (
                    <li key={i} className="flex justify-between items-center text-zinc-300">
                      <div className="flex items-center gap-2">
                        <span>🎬</span>
                        <span>{lesson.title}</span>
                      </div>
                      <span className="text-sm text-zinc-400">{lesson.duration}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 bg-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"
            alt="Instructor"
            className="rounded-xl mb-4 w-full object-cover h-48"
          />
          <h3 className="text-lg font-bold mb-1">The YouTube Blueprint</h3>
          <p className="text-sm mb-4">Make Content Creation Your Career in 2024</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg w-full mb-4">
            Join Now
          </button>

          <div className="bg-zinc-700 rounded-xl text-left px-4 py-3 w-full">
            <div className="text-sm font-semibold mb-3">
              📦 <strong>7 Chapters</strong> | ⏱️ 7.5 Hours of video content
            </div>
            <ul className="text-sm space-y-2 text-green-400">
              <li>✅ Single user license</li>
              <li>✅ Easy payment method</li>
              <li>✅ Full access to course + updates</li>
              <li>✅ Learn anytime, anywhere</li>
              <li>✅ Weekly new chapters</li>
              <li>✅ 24/7 email support</li>
              <li>✅ Best value price</li>
              <li>✅ Certificate of Completion</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;