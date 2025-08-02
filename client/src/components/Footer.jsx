// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-neutral-900 text-white rounded-3xl px-4 md:px-6 lg:px-8 py-12 mt-20 max-w-7xl mx-auto"
      aria-labelledby="footer-heading"
      role="contentinfo"
    >
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left Block */}
        <section aria-labelledby="academy-title" className="flex-1">
          <h2 id="academy-title" className="text-xl font-bold text-red-600 mb-3">
            <span className="text-white">DHRUV RATHEE </span>ACADEMY
          </h2>
          <p className="text-gray-300 max-w-md leading-relaxed text-sm sm:text-base">
            At Dhruv Rathee Academy, you can gain practical knowledge and learn
            real-world skills that will help you transform your life at work,
            school and home.
          </p>
        </section>

        {/* Right Block: Quick Links */}
        <nav aria-label="Footer Navigation" className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-3 text-white text-sm sm:text-base">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition" aria-label="Login">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition" aria-label="Top">
                  Top
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition" aria-label="Courses">
                  Courses
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="sr-only">More Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition" aria-label="Testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition" aria-label="Tech Support">
                  Tech Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition" aria-label="Contact Us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; 2025 Dhruv Rathee
      </div>
    </footer>
  );
};

export default Footer;
