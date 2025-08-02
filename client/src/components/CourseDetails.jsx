import React from "react";
import { useParams, useNavigate } from "react-router-dom";


const courses = [
 {
    id: 1,
    title: "The AI Masterclass (June 2025)",
    price: "₹499",
    originalPrice: "₹1799",
    description: "Learn AI with hands-on projects and real-world examples.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "The YouTube Blueprint: Make Content Creation Your Career!",
    price: "₹6999",
    originalPrice: "₹9999",
    description: "Your blueprint to becoming a successful YouTuber.",
    image:
      "https://images.unsplash.com/photo-1602524818311-cb60c69d6e41?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Full Stack Web Development Bootcamp",
    price: "₹999",
    originalPrice: "₹2499",
    description: "Master HTML, CSS, JavaScript, and backend technologies in one course.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8e99fba9b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "React.js Essentials (August 2025)",
    price: "₹1499",
    originalPrice: "₹2999",
    description: "Build powerful web apps with React.js and modern hooks.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Node.js Crash Course for Beginners",
    price: "₹899",
    originalPrice: "₹1999",
    description: "Learn how to build scalable backend applications using Node.js and Express.",
    image:
      "https://images.unsplash.com/photo-1612831455543-9f6f9e070bb1?auto=format&fit=crop&w=800&q=80",
  },
];
const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white">
        <h2 className="text-xl font-bold mb-4">Course Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-8 bg-neutral-900 text-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-white text-neutral-900 rounded hover:bg-gray-100 transition"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <section>
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <img
            src={course.image}
            alt={course.title}
            className="w-full max-w-md object-cover rounded-lg mb-4"
          />
          <p className="text-xl font-semibold mb-2">Price: {course.price}</p>
          {course.originalPrice && (
            <p className="line-through text-white/60 mb-2">
              {course.originalPrice}
            </p>
          )}
          <p className="text-white/80 leading-relaxed mb-4">
            {course.description}
          </p>
         <button
            onClick={() => navigate(`/course/${course.id}/learn`)}
            className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Enroll Now
          </button>

        </section>

        <section>
          {/* <PaymentCard /> */}
        </section>
      </div>
    </main>
  );
};

export default CourseDetails;