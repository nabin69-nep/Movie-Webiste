// pages/404.js
import Link from "next/link";
import Image from "next/image";

export default function errorPage() {
  return (
    <div className="flex flex-col mt-9  items-center justify-center min-h-screen py-16 px-4 bg-gray-100">
      <Image
        src="/Images/404.svg" // Path to your GIF or image in the public directory
        alt="Not Found"
        width={400} // Adjust size as needed
        height={300} // Adjust size as needed
        className="mb-8"
      />
      <h1 className="sm:text-4xl text-2xl  font-bold text-gray-800 mb-4">
      Sorry, something went wrong.
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        The server encountered an error and could not complete your request. We
        will soon fix this issue. Please, try again later.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go Back to Home
      </Link>
    </div>
  );
}
