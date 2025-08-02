import React from "react";
import YouTubeIntro from "../components/YouTubeIntro";
import YouTubeTrailer from "../components/YoutubeTrailer";
import YouTubeBlueprintSection from "../components/YouTubeBlueprintSection";
import CourseCurriculum from "../components/CourseCurriculum";
import YouTubeReviewsSection from "../components/YoutubeReviewsSection";
import InstructorIntro from "../components/InstructorIntro";
import CertificateSection from "../components/CertificateSection";
import FAQSection from "../components/FAQSection";
import YouTubeIntroCard from "../components/YoutubeIntroCard";
import YouTubeFooter from "../components/YoutubeFooter";

const YouTubeBlueprint = () => {
  return (
    <main className="w-full text-gray-900">
      {/* 👇 Removed global bg-white to avoid "breaking line" effect */}
      <article className="flex flex-col">
        <section id="intro" aria-labelledby="intro-heading">
          <YouTubeIntro />
        </section>

        <section id="trailer" aria-labelledby="trailer-heading">
          <YouTubeTrailer />
        </section>

        <section id="blueprint" aria-labelledby="blueprint-heading">
          <YouTubeBlueprintSection />
        </section>

        <section id="curriculum" aria-labelledby="curriculum-heading">
          <CourseCurriculum />
        </section>

        <section id="reviews" aria-labelledby="reviews-heading">
          <YouTubeReviewsSection />
        </section>

        <section id="instructor" aria-labelledby="instructor-heading">
          <InstructorIntro />
        </section>

        <section id="certificate" aria-labelledby="certificate-heading">
          <CertificateSection />
        </section>

        <section id="faq" aria-labelledby="faq-heading">
          <FAQSection />
        </section>

        <section id="cta" aria-labelledby="cta-heading">
          <YouTubeIntroCard />
        </section>

        <footer className="bg-neutral-900 text-white" role="contentinfo">
          <YouTubeFooter />
        </footer>
      </article>
    </main>
  );
};

export default YouTubeBlueprint;
