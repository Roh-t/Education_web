import React from 'react';
import ChapterAccordion from './ChapterAccordion';

const Sidebar = ({ courseData, onSelectVideo }) => {
  return (
    <aside className="w-full md:w-1/3 bg-black p-4 text-white overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Course Chapters</h2>
      {courseData.map((chapter, index) => (
        <ChapterAccordion
          key={index}
          chapter={chapter}
          onSelectVideo={onSelectVideo}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
