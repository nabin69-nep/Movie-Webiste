"use client";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useContext, useEffect, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import IdContext from "../context/IdContext";
import DetailPageLoader from "./DetailPageLoader";
import Link from "next/link";
export default function MovieDetails() {
  const { peopleId } = useContext(IdContext);
  const [data, setData] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    const getResponse = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/person/${peopleId}?api_key=233d579ffe391c65ea271864eb408536`
        );
        if (!res.ok) {
          console.log(`The error is ${res.status}`);
          setError("Error");
          return;
        }
        const result = await res.json();
        setData(result);
        setIsLoading(!isLoading);
      } catch (error) {
        setError("error");
      }
    };
    getResponse();
  }, []);
  if (error.length > 0) {
    return (
      <div className="mx-auto container">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went Wrong. Please go to the Home Page.
          </AlertDescription>
        </Alert>
        <Link href="/" className="text-blue-500  hover:underline">
          Go Back to Home
        </Link>
      </div>
    );
  } else if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-10 mt-10 ">
        <DetailPageLoader />
      </div>
    );
  }
  return (
    <div className=" p-6">
      <div className="container mx-auto">
        {/* Movie Details Container */}
        <div className=" bg-white rounded-lg shadow-md p-6 grid md:grid-cols-3 gap-6 bg-cover bg-center">
          {/* Movie Poster */}
          <div className="movie-poster md:col-span-1">
            <img
              src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
              alt={`${data.title} Poster`}
              className="rounded-lg w-full relative z-10"
            />
          </div>

          {/* Movie Info */}
          <div className="movie-info text-green-400 relative z-10 md:col-span-2">
            <h1 className="sm:text-4xl text-xl font-bold mb-4">{data.name}</h1>
            <p className="text-black mb-2">
              <strong>Known For:</strong>{" "}
              <span className="text-gray-600">
                {" "}
                {data.known_for_department}
              </span>
            </p>
            <p className="text-black mb-2">
              <strong>BirthDay:</strong>{" "}
              <span className="text-gray-600">{data.birthday}</span>{" "}
              <span className="text-black font-semibold">
                ({currentYear - data.birthday.slice(0, 4)})Year
              </span>
            </p>
            <p className="text-black mb-2">
              <strong>Gender:</strong>{" "}
              <span className="text-gray-600">
                {" "}
                {data.gender ? "Female" : "Male"}
              </span>
            </p>
            <p className="text-black mb-2">
              <strong>Place Of Birth:</strong>
              <span className="text-gray-600"> {data.place_of_birth}</span>
            </p>

            {/* Movie Description */}
            <div className="mt-6">
              <h2 className="sm:text-3xl text-2xl font-bold text-red-400  mb-2">
                Biography
              </h2>
              <p className="text-gray-600 sm:text-base text-sm">
                {data.biography.length > 900
                  ? data.biography.slice(0, 901) + "...."
                  : data.biography}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
