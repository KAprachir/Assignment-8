"use client";
import Image from "next/image";
import Link from "next/link";
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
        <div className="flex justify-between items-center mb-2">
          {/* Title */}
          <h2 className="font-bold text-2xl text-gray-800">{animal.name}</h2>

          {/* Animal Price */}
          <span className="text-lg font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            ${animal.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
          {animal.description}
        </p>
      </div>

      {/* Action Area */}
      <div className="px-6 pt-2 pb-6">
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 shadow-md">
          <Link href={`/animals/${animal.id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;
