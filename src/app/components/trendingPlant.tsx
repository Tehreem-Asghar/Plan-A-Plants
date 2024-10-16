"use client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { IndoorPlants } from "@/database";
import Image from "next/image";

export default function TrendingPlant() {
  const ThreePlants = IndoorPlants.slice(0, 8);

  const router = useRouter();

  const handleButtonClick = (id: number) => {
    router.push(`/plants/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-5 mx-1 gap-4">
      {ThreePlants.map((item) => {
        return (
          <div
            key={item.id}
            className={`p-5 h-auto w-full bg-[#ffffff] shadow-lg rounded-lg grid gap-y-2 mb-3 `}
          >
            <div className=" w-full h-64 md:h-44 lg:h-44">
              <Image
                src={item.image}
                width={242}
                height={173}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-[#343434] font-sans">
              <p className="font-bold">{item.name}</p>
              <p>
                {" "}
                ${item.price}{" "}
                <em className="line-through text-red-500">${item.cutPrice}</em>
              </p>
            </div>
            <Button
              className="bg-[#3B823E] hover:bg-green-800 w-full text-white text-lg"
              onClick={() => handleButtonClick(item.id)}
            >
              Buy
            </Button>
          </div>
        );
      })}
    </div>
  );
}
