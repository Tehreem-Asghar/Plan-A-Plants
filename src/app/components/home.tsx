"use client";
import { useRouter } from "next/navigation";
import { homepage } from "@/database";
import Image from "next/image";

export default function Special() {
  const router = useRouter();

  const handleButtonClick = (id: number) => {
    router.push(`/plants/${id}`);
  };

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-5 p-4">
      {homepage.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col items-center mt-7"
            onClick={() => handleButtonClick(item.id)}
          >
            <Image
              src={item.image}
              height={180}
              width={180}
              alt={item.name}
              className="w-full h-auto"
            />
            <p className="text-xl font-serif text-center mt-2">{item.name}</p>
          </div>
        );
      })}
    </section>
  );
}
