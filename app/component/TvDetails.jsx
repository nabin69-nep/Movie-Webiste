"use client";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useContext, useEffect, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import IdContext from "../context/IdContext";
import DetailPageLoader from "./DetailPageLoader";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import TvTrailer from "./TvTrailer"
export default function MovieDetails() {
  const { tvId } = useContext(IdContext);
  const [data, setData] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getResponse = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${tvId}?api_key=233d579ffe391c65ea271864eb408536`
        );
        if (!res.ok) {
          setError("Error fetching movie details.");
          return;
        }
        const result = await res.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching movie details.");
      }
    };
    getResponse();
  }, [tvId]);

  if (error.length > 0) {
    return (
      <div className="mx-auto container">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong. Please go to the Home Page.
          </AlertDescription>
        </Alert>
        <Link href="/" className="text-blue-500  hover:underline">
          Go Back to Home
        </Link>
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <div className="container mx-auto px-4 py-10 mt-10">
        <DetailPageLoader />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="container mx-auto">
        {/* Movie Details Container */}
        <div
          className="relative rounded-lg shadow-md p-6 grid md:grid-cols-3 gap-6 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
          }}
        >
          <div className="absolute top-0 w-full h-full left-0 bg-black opacity-[0.7] "></div>

          {/* Movie Poster */}
          <div className="movie-poster md:col-span-1">
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={`${data.title} Poster`}
              className="rounded-lg w-full relative z-10"
            />
          </div>

          {/* Movie Info */}
          <div className="movie-info text-white relative z-10 md:col-span-2">
            <h1 className="sm:text-4xl text-xl font-bold mb-4">{data.name}</h1>
            <p className="text-gray-200 mb-2">
              <strong>Release Date:</strong> {data.first_air_date}
            </p>
            <p className="text-gray-200 mb-2 flex flex-wrap">
              <strong>Genre:</strong>
              {data.genres?.map((genre, index) => (
                <span key={genre.id} className="text-gray-200">
                  {genre.name}
                  {index < data.genres.length - 1 && ", "}
                </span>
              ))}
            </p>
            <p className="text-gray-200 mb-2">
          {data.tagline? <><strong>Tagline:</strong> {data.tagline} </>:<><strong>Type:</strong> {data.type} </>}
            </p>
            <p className="text-gray-200 mb-2">
              <strong>Duration:</strong>{" "}
              {data.episode_run_time?.length > 0
                ? `${data.episode_run_time[0]} minutes`
                : "N/A"}
            </p>
            <p className="text-gray-200 mb-2">
              <strong>Rating:</strong> ⭐{data.vote_average?.toFixed(1)}
            </p>

            {/* Movie Description */}
            <div className="mt-6">
              <h2 className="text-3xl font-bold text-white mb-2">Synopsis</h2>
              <p className="text-gray-200">{data.overview}</p>
            </div>
          </div>
        </div>
          <AlertDialog >
  <AlertDialogTrigger className="flex w-full items-center gap-2 text-xl hover:underline sm:text-3xl"><FaCirclePlay />
  <p> Watch Tailer</p></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>{data.title}</AlertDialogTitle>
      <AlertDialogDescription>
       <TvTrailer />
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Close</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
      </div>
    </div>
  );
}
