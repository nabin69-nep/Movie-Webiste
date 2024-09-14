import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-64 bg-avatar-banner bg-cover bg-center">
      <div className="absolute inset-0 bg-blue-400 opacity-50"></div>
      <div className="  container px-2 mx-auto flex flex-col h-64 gap-4 justify-center">
        <h1 className="text-white relative z-10 text-5xl font-bold">Welcome.</h1>
        <p className="text-white relative z-10 text-2xl font-bold">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <form action="#" className="relative">
  {/* Use responsive width for the input */}
  <input
    type="text"
    placeholder="Search for movie, tv show, person..."
    className="px-4 focus:outline-none text-black py-3 rounded-full w-[75%] md:w-[85%]"
  />
  {/* Adjust right positioning for the button on smaller screens */}
  <input
    type="submit"
    value="Search"
    className="font-bold cursor-pointer text-white absolute right-[5%] md:right-[10%] w-24 px-4 py-3 rounded-full bg-input-gradient"
  />
</form>

      </div>
    </div>
  );
};

export default Banner;
