import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
  import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
  export default function Loading() {
    return (
        <div className=" p-6">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 grid md:grid-cols-3 gap-6">
            
            {/* Movie Poster */}
            <div className="movie-poster md:col-span-1">
              <img
                src={`/Images/placeholder-image.jpg`}
                alt={` PlaceHolder Image`}
             
                className="rounded-lg"
              />
            </div>
  
            {/* Movie Info */}
            <div className="movie-info md:col-span-2">
             <Skeleton count={7}/>
              {/* Movie Description */}
              <div className="mt-6">
              <Skeleton count={2}/>
              </div>
            </div>
            <div  className='flex gap-4 cursor-pointer hover:underline sm:text-2xl text-xl lg:text-3xl items-center text-black '>
            <Skeleton  width={30} height={30} circle={true}/>
            <Skeleton width={200} />
            </div>
          </div>
  
        </div>
      </div>
    )
  }