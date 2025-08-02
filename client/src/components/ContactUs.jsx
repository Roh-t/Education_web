import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section
      className="w-full bg-[#111] text-white px-4 py-12 md:py-20 flex items-center justify-center"
      aria-labelledby="contact-heading"
    >
      <article className="w-full max-w-6xl bg-[#1a1a1a] rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-6 md:p-12 flex flex-col md:flex-row gap-10">
        {/* Profile Image */}
        <figure className="flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80"
            alt="Rohit Kumar profile"
            loading="lazy"
            className="w-44 h-44 rounded-2xl object-cover shadow-lg mx-auto md:mx-0"
          />
        </figure>

        {/* Contact Info */}
        <main className="flex flex-col justify-center w-full">
          <header className="mb-4">
            <h2
              id="contact-heading"
              className="text-sm uppercase tracking-wide text-gray-400 mb-1"
            >
              Contact Us
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Rohit Kumar
            </h1>
            <span className="inline-block bg-[#2a2d3e] text-gray-300 text-sm px-4 py-1 rounded-full">
              Developer & Tech Enthusiast
            </span>
          </header>

          <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
            I’m open to collaboration, questions, or opportunities. Whether you
            want to connect or just say hello, feel free to reach out!
          </p>

          <address className="not-italic text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:rohit@example.com"
              className="text-blue-400 hover:underline"
            >
              rohit@example.com
            </a>
            <br />
            📞 <strong>Phone:</strong>{" "}
            <a
              href="tel:+919876543210"
              className="text-blue-400 hover:underline"
            >
              +91 98765 43210
            </a>
          </address>

          {/* Social Icons */}
          <nav
            aria-label="Social media"
            className="flex items-center gap-5 mt-2"
          >
            <a
              href="#"
              className="text-gray-300 hover:text-white transition text-2xl"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition text-2xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition text-2xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </nav>
        </main>
      </article>
    </section>
  );
};

export default ContactUs;
