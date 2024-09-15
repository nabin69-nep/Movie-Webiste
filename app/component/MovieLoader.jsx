import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
  import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
  export default function Loading({cards}) {
    return (
      <>
      <Carousel>
      <CarouselContent>
            {
              Array(cards).fill(0).map((e,index)=>{
              return  <CarouselItem key={index}  className="md:basis-1/2 py-5  lg:basis-1/3">
               <div className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src="/Images/placeholder-image.jpg"
                alt="placeholder image"
                className="w-full h-[364px] object-contain" 
              />
              <div className="p-4">
                <h2 className="text-lg text-black font-semibold mb-2 truncate">
                   <Skeleton height={30}  />
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  <Skeleton width={120} />
                </p>
                <div className="flex items-center justify-between">
                  <p className=" font-bold flex items-center gap-1">
                    <Skeleton circle={true} width={20} height={20}  /> <Skeleton height={20} width={30} />
                  </p>
                  
                  <p
                    
                    
                    className=" text-white px-4 py-2 rounded-md "
                  >
                     <Skeleton  width={90} height={20}/>
                  </p>
                  
                </div>
              </div>
            </div>
             </CarouselItem>
              })
  }
   </CarouselContent>
   </Carousel>
  </>
    )
  }