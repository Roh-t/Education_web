// File: src/components/Individual_Course/LectureItem.jsx
import React from 'react';

const LectureItem = ({ lecture, onClick }) => (
  <div
    onClick={onClick}
    className="flex justify-between items-center py-2 px-3 hover:bg-gray-700 rounded-md cursor-pointer"
  >
    <span className="text-sm text-white">{lecture.title}</span>
    <span className="text-xs text-gray-300">{lecture.duration}</span>
  </div>
);

export default LectureItem;
