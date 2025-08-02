import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const YouTubeFooter = () => {
  return (
    <footer
      className="bg-black text-white border-t border-zinc-800 py-10 px-4 sm:px-6 lg:px-8"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo and Contact */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
            <span className="text-white">DHRUV RATHEE</span>{" "}
            <span className="text-red-600">ACADEMY</span>
          </h2>

          {/* Contact Email */}
          <address className="not-italic flex items-center gap-2 text-sm sm:text-base text-gray-200">
            <FaTelegramPlane className="text-white text-base sm:text-lg" aria-hidden="true" />
            <a
              href="mailto:support@dhruvrathee.com"
              className="hover:text-red-500 transition-colors"
            >
              support@dhruvrathee.com
            </a>
          </address>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-xs sm:text-sm text-gray-400">
          © 2025 <span className="font-medium">Dhruv Rathee Academy</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default YouTubeFooter;
