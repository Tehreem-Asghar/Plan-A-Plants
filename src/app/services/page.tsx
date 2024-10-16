"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function services() {

  return (
    <main className="max-h-full ">
      <div className="h-64 w-full bg-[url('/images/services/HeroBanner.png')] flex justify-center items-center">
       
        <h1 className="  text-3xl font-bold text-white">
          LANDSCAPE
          <br />
          GARDENING
        </h1>
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse  gap-5 p-10">
        
        <div className="lg:w-2/4 md:w-2/4 w-full " >
           <h2 className="text-2xl lg:text-3xl md:text-3xl text-[#343434] font-bold font-sans">
            Kitchen Gardening
           </h2>
          <p className="mt-4 text-[#343434]">
           
            Growing your own vegetables is both fun and rewarding with Plan A
            Plant. We aim to provide the best possible kitchen gardening
            services with good seeds, organic fertilizers to ensure an organic
            harvest every time!{" "}
          </p>
          <p className="mt-4 text-[#343434]">
            Book an appointment with our gardening expert now to start producing
            fresh vegetables, fruits and herbs for a healthy and sumptuous meal.
          </p>
          <Link href={'/contact'}> 
          <Button className="mt-4 bg-[#3B823E] hover:bg-green-900 text-white text-xl rounded-xl px-8"
         
          >
            Book Now
          </Button>
          </Link>
        </div>
        <div className=" lg:w-2/4 md:w-2/4 w-full ">
          <Image
            src={"/images/services/kitchenGarding.png"}
            title="Kitchen garding"
            alt="Kitchen garding"
            height={506}
            width={569}
            className=" rounded-2xl  w-full"
          />
        </div>
      </div>


      <div className="flex lg:flex-row md:flex-row  flex-col gap-5 p-10">
        <div className=" lg:w-2/4 md:w-2/4 w-full ">
          <Image
            src={"/images/services/terraced.png"}
            alt="Kitchen garding"
            title="Terrace Landscaping"
            height={506}
            width={569}
            className=" rounded-2xl  w-full"
          />
        </div>
        <div className="lg:w-2/4 md:w-2/4 w-full ">
          <h2 className="text-2xl lg:text-3xl md:text-3xl text-[#343434] font-bold font-sans">
          Terrace Landscaping
          </h2>
          <p className="mt-4 text-[#343434]">
          Transform your terrace into a beautiful and functional outdoor space with Plan A Plant. Whether you envision a cozy lounge, a lush garden, or a vibrant floral landscape, we provide customized solutions to meet your preferences.
          </p>
          <p className="mt-4 text-[#343434]">
          Book an appointment with our expert today and turn your terrace into a green oasis filled with plants, flowers, and a peaceful ambiance perfect for relaxation!
          </p>
          <Link href={'/contact'}> 
          <Button className="mt-4 bg-[#3B823E] hover:bg-green-900 text-white text-xl rounded-xl px-8"
          >
            Book Now
          </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default services;
