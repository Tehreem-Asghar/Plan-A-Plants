"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function BestSelsCard() {
  const router = useRouter(); 
  const images = [
    { src: "/images/bestSellings/indoorPlant.png", section: "indoor" },
    { src: "/images/bestSellings/airPuringPlants.png", section: "air-pure" },
    { src: "/images/bestSellings/flowringPlants.png", section: "flowering" },
  ];

  const handleButtonClick = (section : string) => {
    router.push(`/plants?section=${section}`); 
  };

  return (
    <div className="h-auto w-full mt-11">
      <h2 className="text-[#363636] font-bold font-serif text-2xl lg:text-3xl underline underline-offset-8 text-center">
        Best Selling
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-4 px-4">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={`h-auto p-5 bg-[#ffffff] grid gap-y-4 rounded-lg shadow-lg ${
                index === 2 ? "sm:col-span-2 md:col-span-1" : ""
              }`}
            >
              <Image
                src={image.src}
                height={318}
                width={304}
                alt="bestSelePlant"
                className="object-cover h-[318px] w-full"
              />
              <Button
                className="bg-[#3B823E] hover:bg-green-600 w-full text-white "
                onClick={() => handleButtonClick(image.section)}
              >
                Shop Now
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
