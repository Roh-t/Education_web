import React, { useState } from 'react';
import LectureItem from './LectureItem';

const ChapterAccordion = ({ chapter, onSelectVideo }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 bg-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 flex justify-between items-center text-white font-semibold hover:bg-gray-700"
      >
        {chapter.title}
        <span className="text-sm text-gray-400">{chapter.module}</span>
      </button>
      {open && (
        <div className="px-2 pb-2">
          {chapter.lectures.map((lec, index) => (
            <LectureItem
              key={index}
              lecture={lec}
              onClick={() => onSelectVideo(lec.videoUrl)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChapterAccordion;
