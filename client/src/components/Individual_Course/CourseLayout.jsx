import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import VideoPlayer from "./VideoPlayer";
import { courseContentMap } from "./CourseContentMap";
import MinimalNavbar from "../MinimalNavbar";
const CourseLayout = () => {
  const { id } = useParams();
  const courseId = parseInt(id);
  const content = courseContentMap[courseId];
  const [selectedVideo, setSelectedVideo] = useState(content?.introVideo);

  if (!content) {
    return (
      <main className="p-6 text-white bg-black h-screen flex items-center justify-center">
        <h2 className="text-xl font-bold">Course Not Found</h2>
      </main>
    );
  }

  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <MinimalNavbar /> {/* ✅ Add navbar at the top */}
      <div className="flex flex-col md:flex-row">
        <Sidebar courseData={content.chapters} onSelectVideo={setSelectedVideo} />
        <main className="w-full md:w-2/3 p-4">
          <h1 className="text-2xl font-bold mb-4">{content.title}</h1>
          <VideoPlayer videoUrl={selectedVideo} />
        </main>
      </div>
    </div>
  );
};

export default CourseLayout;
