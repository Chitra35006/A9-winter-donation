import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#0c1833]  text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm">
              <strong>Email:</strong> contact@example.com
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> +88 01799999999
            </p>
            <p className="text-sm">
              <strong>Address:</strong> 1234 Elephant Street, Uttara City
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <ul className="flex space-x-6">
              <div>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition"
                > <FaFacebook></FaFacebook>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  <FaSquareXTwitter></FaSquareXTwitter> Twitter
                </a>
              </li>
              </div>
              <div>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-600 transition"
                >
                  <FaLinkedin></FaLinkedin> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-500 transition"
                >
                  <FaInstagramSquare ></FaInstagramSquare> Instagram
                </a>
              </li>
              </div>
            </ul>
          </div>

          {/* Copyright Notice */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <p className="text-sm">
              Building seamless interfaces for web applications with React and
              TailwindCSS.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} React Tailwind Footer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
