'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    if (!email.includes("@")) {
      setMessage("❌ Please enter a valid email address.");
    } else {
      setMessage("✅ You have successfully subscribed!");
    }
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="bg-gray-100 py-16 text-gray-600">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* First Section */}
        <div>
          <h1 className="text-[#151875] text-3xl font-bold mb-4">Hekto</h1>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={handleSendEmail}
              className="bg-[#FB2E86] text-white px-4 py-2 text-sm font-medium hover:bg-pink-700 transition-colors"
            >
              Sign Up
            </button>
          </div>
          {message && (
            <p className={`mt-2 text-sm ${message.startsWith("✅") ? "text-green-500" : "text-red-500"}`}>
              {message}
            </p>
          )}
          <p className="mt-4 text-gray-500">Contact Info</p>
          <p>123 Street, Xyz Building, Karachi, Pakistan</p>
        </div>

        {/* Second Section */}
        <div>
          <h2 className="text-[#151875] text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li>Chairs</li>
            <li>Tables</li>
            <li>Sofa Sets</li>
            <li>Luxury Chairs</li>
            <li>Coffee Tables</li>
          </ul>
        </div>

        {/* Third Section */}
        <div>
          <h2 className="text-[#151875] text-xl font-semibold mb-4">Customer Care</h2>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Order History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div>
          <h2 className="text-[#151875] text-xl font-semibold mb-4">Pages</h2>
          <ul className="space-y-2">
            <li><Link href={'/contact-us'}>About us</Link></li>
            <li><Link href={'/featuredproducts'}>Featured Products</Link></li>
            <li><Link href={'/latestproducts'}>Latest Products</Link></li>
            <li><Link href={'/trendingproducts'}>Trending Products</Link></li>
            <li><Link href={'/blog'}>Blogs</Link></li>
            <li><Link href={'/account'}>Login</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <p className="text-gray-500">&copy; Zara/Rabeeka  - All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="" className="w-8 h-8 rounded-full bg-[#151875] flex items-center justify-center text-white hover:bg-blue-700">
              <FaFacebookF />
            </a>
            <a href="" className="w-8 h-8 rounded-full bg-[#151875] flex items-center justify-center text-white hover:bg-blue-700">
              <FaTwitter />
            </a>
            <a href="" className="w-8 h-8 rounded-full bg-[#151875] flex items-center justify-center text-white hover:bg-blue-700">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;