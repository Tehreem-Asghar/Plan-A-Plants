"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IndoorPlants } from "@/database";
import Image from "next/image";

export default function IndoorPlant() {
  const router = useRouter();

  const handleButtonClick = (id: number) => {
    router.push(`/plants/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-5 mx-1 gap-4">
      {IndoorPlants.map((item, index) => {
        // Check if the current item is the last one
        const isLastItem = index === IndoorPlants.length - 1;

        return (
          <div
            key={item.id}
            className={`p-5 h-auto w-full bg-white shadow-lg rounded-lg grid gap-y-2 mb-3 ${
              isLastItem ? "sm:col-span-2 md:col-span-1  " : ""
            }`}
          >
            <Image
              src={item.image}
              width={242}
              height={173}
              alt={item.name}
              className={`w-full   ${isLastItem && "sm:h-52"}`}
            />
            <div className="text-[#343434] font-sans">
              <p className="font-bold">{item.name}</p>
              <p>Price ${item.price}</p>
            </div>
            <Button
              className="bg-[#3B823E] hover:bg-green-800 w-full text-white text-xl"
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

// "use client";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { IndoorPlants } from "@/database";
// import Image from "next/image";

// export default function IndoorPlant() {

//   const router = useRouter();

//   const handleButtonClick = (id : number) => {
//     router.push(`/plants/${id}`);
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-5 mx-1">
//       {IndoorPlants.map((item) => {
//         return (
//           <div
//             key={item.id}
//             className="p-5 h-auto w-full sm:w-72  md:w-72 lg:w-72 bg-[#ffffff] shadow-lg rounded-lg grid gap-y-2 mb-3 "
//           >
//             <Image src={item.image} width={242} height={173} alt={item.name} className="w-full" />
//              <div className="text-[#343434] font-sans">
//               <p className="font-bold">{item.name}</p>
//               <p>Price ${item.price}</p>
//              </div>
//             <Button className="bg-[#3B823E] hover:bg-green-800 w-full text-white text-xl"
//             onClick={() => handleButtonClick(item.id)}
//             >
//               Buy
//             </Button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
