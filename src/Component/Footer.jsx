import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* first section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              DigiTools
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Second section */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Third section */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Section */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Fifth Section */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">
              Social Links
            </h4>
            <div className="flex gap-4 text-2xl">
              <FaInstagram />
              <FaFacebook />
              <FaTwitterSquare />
            </div>
          </div>
        </div>

        {/*  Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;