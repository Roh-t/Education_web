// src/components/MyWork.jsx
import React from "react";
import chatgpt from "../images/chatgpt.jpeg";
import youtube from "../images/youtube.png";
import shorts from "../images/shorts.png";

const channels = [
  {
    title: "Dhruv Rathee",
    handle: "@dhruvrathee",
    subscribers: "12M+ Subscribers",
    videos: "540 Videos",
    img: chatgpt,
    icon: youtube,
    link: "#",
  },
  {
    title: "Dhruv Rathee Vlogs",
    handle: "@DhruvRatheeVlogs",
    subscribers: "2M+ Subscribers",
    videos: "189 Videos",
    img: chatgpt,
    icon: youtube,
    link: "#",
  },
  {
    title: "Dhruv Rathee Shorts",
    handle: "@DRshorts",
    subscribers: "2M+ Subscribers",
    videos: "233 Videos",
    img: chatgpt,
    icon: shorts,
    link: "#",
  },
];

const MyWork = () => {
  return (
    <section
      className="bg-neutral-900 text-white py-20 px-4 sm:px-6 lg:px-12"
      aria-labelledby="mywork-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto text-center">
        <header>
          <h2
            id="mywork-heading"
            className="text-3xl sm:text-4xl font-bold mb-12"
          >
            MY WORK
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {channels.map((channel, idx) => (
            <article
              key={idx}
              className="bg-neutral-800 rounded-2xl p-4 flex flex-col items-center text-center shadow-lg"
            >
              <figure className="relative w-full h-72 rounded-xl overflow-hidden mb-4">
                <img
                  src={channel.img}
                  alt={`Cover for ${channel.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <img
                  src={channel.icon}
                  alt={`${channel.title} platform icon`}
                  className="absolute top-2 left-2 w-10 h-10"
                  loading="lazy"
                />
                <figcaption className="sr-only">{channel.title}</figcaption>
              </figure>

              <h3 className="text-lg sm:text-xl font-semibold">
                {channel.title}
              </h3>
              <p className="text-gray-400 text-sm">{channel.handle}</p>
              <p className="text-gray-400 text-sm mt-1">
                {channel.subscribers} · {channel.videos}
              </p>

              <a
                href={channel.link}
                className="mt-4 inline-block border border-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-white hover:text-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={`View ${channel.title} channel`}
              >
                VIEW CHANNEL
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
