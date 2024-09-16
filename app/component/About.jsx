import React from "react";
import Link from "next/link"
const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold  mb-6">About Us</h1>
      <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
        Welcome to <span className="font-semibold">Herne</span> – your ultimate
        destination for all things cinema! Whether you&apos;re a casual moviegoer or
        a dedicated cinephile, our platform is designed to provide you with the
        latest news, reviews, and insights about movies from around the world.
      </p>

      <h2 className="text-2xl font-bold  mb-4">Our Mission</h2>
      <p className="text-lg dark:text-gray-400 text-gray-700 mb-4">
        At Herne, we are passionate about connecting people with the films they
        love. Our mission is to help users discover new movies, explore trending
        films, and stay up-to-date with their favorite actors, directors, and
        genres. We aim to build a community where fans can engage with content,
        share their opinions, and learn more about the art of filmmaking.
      </p>

      <h2 className="text-2xl font-bold  mb-4">What We Offer</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-400 mb-4">
        <li>
          <span className="font-semibold">Movie Database:</span> Explore a
          comprehensive collection of movies across all genres, eras, and
          countries.
        </li>
        <li>
          <span className="font-semibold">Latest Releases:</span> Stay informed
          about the newest movie releases and upcoming films.
        </li>
        <li>
          <span className="font-semibold">Cast & Crew Information:</span> Learn
          more about your favorite actors, directors, and production teams.
        </li>
        <li>
          <span className="font-semibold">Reviews & Ratings:</span> Get
          insightful reviews and user ratings to help you decide what to watch
          next.
        </li>
        <li>
          <span className="font-semibold">Personalized Recommendations:</span>{" "}
          Receive movie recommendations based on your viewing preferences and
          interests.
        </li>
      </ul>

      <h2 className="text-2xl font-bold  mb-4">
        Join Our Community
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
        We believe movies have the power to bring people together, and we invite
        you to be a part of our growing community. Share your reviews, follow
        your favorite stars, and engage in discussions with fellow movie lovers.
        Whether you&apos;re looking for a classic film to watch or exploring the
        latest blockbuster, Herne has something for everyone.
      </p>

      <h2 className="text-2xl font-bold  mb-4">Contact Us</h2>
      <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
        Have any questions or suggestions? We&apos;d love to hear from you! Reach out
        to us through our{" "}
        <Link href="/contact" className="text-blue-500 hover:underline">
          Contact Page
        </Link>
        , and we&apos;ll get back to you as soon as possible.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-400">
        Thank you for choosing Herne as your go-to platform for all things
        movies. Let’s explore the world of cinema together!
      </p>
    </div>
  );
};

export default About;
