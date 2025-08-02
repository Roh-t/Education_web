import React from "react";
import { Link } from "react-router-dom";

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
    title: "The Youtube Blueprint: Make Content Creation your Career!",
    price: "₹6999",
    description: "Your blueprint to becoming a successful YouTuber.",
    image:
      "https://images.unsplash.com/photo-1602524818311-cb60c69d6e41?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Master ChatGPT: Transform Your Life With AI Chatbots",
    price: "₹6899",
    subText: "(inclusive of GST)",
    description: "Learn to harness AI chatbots for your personal and professional life.",
    image:
      "https://images.unsplash.com/photo-1631495955470-5b2b1d089c92?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Master Time Management: The Ultimate Guide",
    price: "₹5399",
    description: "Boost your productivity with expert time management skills.",
    image:
      "https://images.unsplash.com/photo-1588776814546-ec07c38ba770?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "The Power of Universe eBook",
    price: "₹59",
    description: "Unlock the secrets of the universe with this powerful eBook.",
    image:
      "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?auto=format&fit=crop&w=800&q=80",
  },
];

const AllCourses = () => {
  return (
    <main className="min-h-screen bg-white px-4 py-10 md:px-12 lg:px-24">
      <h1 className="text-2xl font-semibold mb-6">All Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link
            to={`/course/${course.id}`}
            key={course.id}
            className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-3 flex flex-col"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-base font-medium text-gray-900">{course.title}</h2>
            {course.originalPrice && (
              <p className="text-sm text-gray-500 line-through">{course.originalPrice}</p>
            )}
            <p className="text-lg font-bold text-gray-800">{course.price}</p>
            {course.subText && <p className="text-xs text-gray-500">{course.subText}</p>}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default AllCourses;
