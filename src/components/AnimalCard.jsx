"use client";
import Image from "next/image";
import React from "react";

const AnimalCard = ({ animal }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100 transition-transform hover:scale-[1.02]">
      {/* Image Placeholder */}
      <Image
        className="w-full h-48 object-cover"
        src={animal.image}
        alt={animal.name}
        width={400}
        height={300}
      />

      <div className="px-6 py-4">
        {/* Title */}
        <h2 className="font-bold text-2xl mb-2 text-gray-800">{animal.name}</h2>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
          {animal.description}
        </p>
      </div>

      {/* Action Area */}
      <div className="px-6 pt-2 pb-6">
        <button
          onClick={() => console.log(`Opening details for ${animal.name}`)}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 shadow-md"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;
