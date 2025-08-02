import React from 'react';

const InstructorIntro = () => {
  return (
    <section
      className="bg-black text-white py-16 px-6 sm:px-10 lg:px-20"
      aria-labelledby="instructor-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <article className="flex-1">
          <header>
            <p className="bg-gray-800 text-white inline-block px-4 py-2 rounded-full text-sm mb-4 hover:bg-gray-700 transition">
              ⭐ Meet your instructor
            </p>
            <h2
              id="instructor-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-2"
            >
              Dhruv Rathee
            </h2>
            <p className="uppercase text-sm tracking-wide text-gray-400 mb-6">
              A YouTube Creator, An Activist and a Travel Vlogger
            </p>
          </header>

          <main>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              I love making videos. My expertise is in creating informative and educational content which provides objective, concise and simplified explanations of complex issues on a variety of subjects.
            </p>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              I strongly believe in speaking truth to power and practice promoting progressive values of democracy, freedom, rationalism and critical thinking through my videos.
            </p>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              My background is from mechanical and renewable energy engineering since I did my masters college degree in that. But my passion lies in the fields of Economics and Political Science in which I studied for a second bachelors degree. And yes, I also really really love travelling.
            </p>
          </main>

          <footer className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <span className="text-gray-400 text-sm">You can learn more about him on:</span>
            <nav aria-label="Instructor social media" className="flex gap-3">
              <a href="#" aria-label="YouTube" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
                <i className="fab fa-youtube text-white"></i>
              </a>
              <a href="#" aria-label="Instagram" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a href="#" aria-label="Facebook" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
                <i className="fab fa-facebook text-white"></i>
              </a>
              <a href="#" aria-label="Twitter (X)" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
                <i className="fab fa-x-twitter text-white"></i>
              </a>
            </nav>
          </footer>
        </article>

        {/* Image */}
        <aside className="flex-1 flex justify-center">
          <img
            src="https://images.pexels.com/photos/4491455/pexels-photo-4491455.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Instructor Dhruv Rathee smiling and posing confidently"
            className="rounded-2xl max-w-xs sm:max-w-sm w-full object-cover shadow-lg"
            loading="lazy"
          />
        </aside>
      </div>
    </section>
  );
};

export default InstructorIntro;
