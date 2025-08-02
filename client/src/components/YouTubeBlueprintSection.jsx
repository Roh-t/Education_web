import React from "react";
import BlueprintCard from "./BluePrintCard";

const blueprintData = [
  {
    icon: "https://img.icons8.com/ios-filled/50/fa314a/light-on.png",
    title: "Find your Niche and come up with Great Ideas",
    description:
      "The biggest challenge that any new content creator faces is competition. There are so many other YouTubers out there. How can you stand out? The trick is to carve your own niche and come out at the top. I teach you how exactly to do this. As a bonus, I also provide you with 20 amazing niche ideas which exponentially increase your chances of success.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/fa314a/youtube-play.png",
    title: "Learn to Film and Edit like a Pro On Your Smartphone",
    description:
      "Don’t worry, you don’t need to buy expensive equipment when starting out. All you need is your smartphone. I will teach you not just to film aesthetic videos but also edit complete videos. I showcase this with both free video editing software on phone and professional video editing software on computer.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/fa314a/money-bag.png",
    title: "Unlock Monetization and Secrets to YouTube Success",
    description:
      "Why do some YouTubers become great while others don’t? Based on my 10 years of experience as a YouTuber, I will teach you exactly why. You will also learn multiple ways to make money in this career, from the easiest to the best. I want you to be able to make this your full-time profession.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80",
  },
];

const YouTubeBlueprintSection = () => {
  return (
    <section
      className="bg-black text-white px-4 sm:px-6 lg:px-20 py-16"
      role="region"
      aria-labelledby="blueprint-heading"
    >
      <header className="max-w-7xl mx-auto text-center mb-12">
        <h2
          id="blueprint-heading"
          className="text-3xl sm:text-4xl font-bold leading-tight"
        >
          YouTube Blueprint
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mt-2">
          Learn the key pillars of becoming a successful YouTuber
        </p>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blueprintData.map((card, index) => (
          <article
            key={index}
            className="bg-[#161616] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label={card.title}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={card.icon}
                  alt="icon"
                  className="w-6 h-6"
                  loading="lazy"
                />
                <h3 className="text-lg sm:text-xl font-semibold">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </main>
    </section>
  );
};

export default YouTubeBlueprintSection;
