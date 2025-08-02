import React from "react";

const BlueprintCard = ({ icon, title, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-zinc-900 rounded-2xl p-8 gap-8 mb-10">
      {/* Text Section */}
      <div className="flex-1 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-zinc-800 p-3 rounded-full">
            <img src={icon} alt="Icon" className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        </div>
        <p className="text-zinc-400 text-base md:text-lg">{description}</p>
      </div>

      {/* Image Section */}
      <div className="flex-1 h-[90vh]">
        <img
          src={image}
          alt="Card visual"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default BlueprintCard;
