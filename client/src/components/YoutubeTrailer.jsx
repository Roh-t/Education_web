import React from "react";

const YoutubeTrailer = () => {
  return (
    <section
      className="bg-black text-white px-4 lg:px-20 py-20"
      aria-labelledby="watch-trailer"
      role="region"
    >
      {/* Section Heading */}
      <header>
        <h2
          id="watch-trailer"
          className="text-3xl sm:text-4xl font-bold mb-12 text-left"
        >
          Watch Trailer
        </h2>
      </header>

      {/* YouTube Video Embed */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-16 shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube course trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <article className="bg-neutral-900 rounded-2xl p-6">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
            Learn from my Media Experience
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-5">
            I’ve worked with Netflix, NDTV, Deutsche Welle, BBC, Brut, Spotify,
            and more. From travel videos to documentaries, explainers, and
            podcasts — my experience in media production is unmatched among
            Indian YouTubers.
          </p>
          <div className="flex gap-3 flex-wrap" aria-label="Media partners logos">
            {[
              "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=80&q=80",
              "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=80&q=80",
              "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=80&q=80",
              "https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=80&q=80",
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Partner logo ${idx + 1}`}
                className="rounded-md object-cover w-20 h-10"
                loading="lazy"
              />
            ))}
          </div>
        </article>

        {/* Card 2 */}
        <article className="bg-neutral-900 rounded-2xl p-6">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
            YouTube Royalty: The Massive Milestones
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-5">
            Learn how I grew multiple top-tier channels in different niches —
            each crossing millions of followers with strategic content and
            consistency.
          </p>
          <div className="flex gap-4 flex-wrap" aria-label="Channel milestones">
            <div className="bg-neutral-800 text-white rounded-full px-5 py-3 text-center">
              <p className="font-bold text-lg">3M+</p>
              <p className="text-xs text-gray-400">@dhruvratheevlogs</p>
            </div>
            <div className="bg-red-600 text-white rounded-full px-5 py-3 text-center">
              <p className="font-bold text-lg">25M+</p>
              <p className="text-xs">@dhruvrathee</p>
            </div>
            <div className="bg-neutral-800 text-white rounded-full px-5 py-3 text-center">
              <p className="font-bold text-lg">4M+</p>
              <p className="text-xs text-gray-400">@otherchannel</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default YoutubeTrailer;
