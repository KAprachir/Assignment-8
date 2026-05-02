"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimalCard = ({ animal }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col animate__animated animate__fadeInUp">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider">
            {animal.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
              {animal.name}
            </h3>
            <p className="text-sm text-gray-500 font-medium">
              {animal.breed} • {animal.location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xl font-black text-primary">
              ৳{animal.price.toLocaleString()}
            </p>
          </div>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 mb-6 italic">
          "{animal.description}"
        </p>

        <div className="mt-auto pt-6 border-t border-gray-50">
          <Link
            href={`/animals/${animal.id}`}
            className="btn btn-primary btn-block rounded-2xl shadow-lg shadow-primary/20"
          >
            View Full Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
