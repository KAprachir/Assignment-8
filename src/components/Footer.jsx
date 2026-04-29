"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  // Prevent hydration mismatch by only rendering icons on the client
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) return <footer className="bg-gray-900 py-12" />;

  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            QurbaniHat
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Your trusted digital marketplace for Qurbani animals. We connect
            buyers with authentic farms to ensure a hassle-free and blessed
            sacrifice experience across Bangladesh.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
              <HiPhone className="text-xl text-orange-500" />
              <span>+880 1234-567890</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
              <HiMail className="text-xl text-orange-500" />
              <span>support@qurbanihat.com</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <HiLocationMarker className="text-xl text-orange-500" />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>

        {/* Social Links & Copyright */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">
            Follow Our Community
          </h3>
          <div className="flex gap-5">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-2xl text-gray-400 hover:text-[#1877F2] transition-all"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-2xl text-gray-400 hover:text-[#E4405F] transition-all"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-2xl text-gray-400 hover:text-white transition-all"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </Link>
          </div>
          <div className="pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              © {new Date().getFullYear()} QurbaniHat. Built for the Ummah.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
