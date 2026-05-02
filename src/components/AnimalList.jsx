"use client";

import { useState } from "react";
import AnimalCard from "./AnimalCard";

const AnimalList = ({ initialAnimals }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filteredAndSorted = initialAnimals
    .filter((a) => a.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price;
      if (sortOrder === "high-to-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="space-y-8 pb-12">
      {/* 1. Header & Filter Section */}
      <div className="bg-white/50 backdrop-blur-md z-20 border-b border-gray-100 px-4 py-6 rounded-b-3xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Our Collection
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Showing {filteredAndSorted.length} of {initialAnimals.length}{" "}
              animals
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input with Icon */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by name..."
                className="block w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-2xl ring-1 ring-gray-200 focus:ring-2 focus:ring-indigo-500 transition-all outline-none text-sm"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Sort Dropdown */}
            <select
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
              className="px-4 py-3 bg-gray-50 border-none rounded-2xl ring-1 ring-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-medium text-gray-600 cursor-pointer"
            >
              <option value="">Sort by Price</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. Grid Section */}
      <div className="max-w-7xl mx-auto px-4">
        {filteredAndSorted.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSorted.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              No animals found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimalList;
