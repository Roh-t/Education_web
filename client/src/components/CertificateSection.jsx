import React from "react";

const CertificateSection = () => {
  return (
    <section
      className="bg-black text-white py-16 px-4 sm:px-8 lg:px-12"
      aria-labelledby="certificate-heading"
    >
      <div className="max-w-5xl mx-auto text-center">
        <header>
          <h2
            id="certificate-heading"
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Become Creatorship Certified
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-12 max-w-2xl mx-auto">
            Students who complete the course curriculum are awarded with a signed Creatorship certificate from Dhruv Rathee.
          </p>
        </header>

        {/* Certificate Box */}
        <article
          className="bg-red-600 text-white rounded-xl shadow-xl p-6 sm:p-10 md:p-12 max-w-3xl mx-auto relative"
          aria-label="Example certificate preview"
        >
          <div className="text-left md:text-center">
            <p className="text-sm uppercase font-semibold mb-2">
              Dhruv Rathee Academy
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Proudly awarded to:
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">
              Sayantan Chandra
            </h1>
            <p className="text-sm sm:text-base">
              for completing The YouTube Blueprint Course
            </p>
          </div>

          {/* Certificate Footer */}
          <footer className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 mt-10 text-xs text-white/90">
            <span className="uppercase tracking-wide">This is a demo</span>
            <img
              src="https://images.unsplash.com/photo-1617542262204-6dc83c02b4d5?auto=compress&cs=tinysrgb&fit=crop&w=100&q=80"
              alt="Official certificate seal"
              loading="lazy"
              className="w-16 h-16 object-cover rounded-full"
            />
            <span className="uppercase tracking-wide">Completion Date</span>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default CertificateSection;
