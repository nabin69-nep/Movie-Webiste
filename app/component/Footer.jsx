import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import icons
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="dark:bg-gray-800  py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-bold mb-2">Herne</h1>
            <p className="hover:text-gray-400 text-sm mb-4">
              The ultimate destination for movie lovers. Discover, review, and enjoy movies from around the world.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-400 ">
                <FaFacebookF size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-400 ">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-400 ">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-400 ">
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-400">Home</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Movies</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Reviews</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Contact</Link></li>
              <li><Link href="#" className="hover:text-gray-400">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className=" mb-2">Suncity, Pepsicola, Kathmandu</p>
            <p className=" mb-2">Email: khadkanabin090@gmail.com</p>
            <p>Phone: +977 9847512547</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} MovieSite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
