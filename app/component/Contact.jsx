"use client"
import React, { useState } from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold  mb-6">Contact Us</h1>
      <p className="text-lg dark:text-gray-400 text-gray-700 mb-8">
        Got questions, suggestions, or feedback? We&apos;d love to hear from you! 
        Please fill out the form below, and we’ll get back to you as soon as possible.
      </p>

      <form  action="https://api.web3forms.com/submit" method="POST" className="bg-white shadow-md rounded-lg p-6">
        <input type="hidden" name="access_key" value="938c3553-b584-49dd-96c0-4223c5bae4e1" />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Message"
            rows="5"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <input
            type="submit"
            value="Send Message"
            className="bg-green-500 cursor-pointer text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          />
      
        </div>
      </form>

      <div className="mt-12">
        <h2 className="text-2xl font-bold  mb-4">Other Ways to Reach Us</h2>
        <p className="text-lg  dark:text-gray-400 text-gray-700 mb-2">
          <strong>Email:</strong> <span className="text-blue-500 cursor-pointer hover:underline">support@hernemovies.com</span>
        </p>
        <p className="text-lg dark:text-gray-400  text-gray-700 mb-2">
          <strong>Phone:</strong> +977 9847512547
        </p>
        <p className="text-lg dark:text-gray-400  text-gray-700">
          <strong>Address:</strong> Suncity, Pepsicola, Kathmandu
        </p>
      </div>
    </div>
  );
};

export default Contact;
