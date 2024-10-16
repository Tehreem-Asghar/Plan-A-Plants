"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Blogs() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const router = useRouter();

  return (
    <main className="flex flex-col justify-center h-auto w-full mt-10">
      <h1 className="text-[#363636] font-bold font-serif text-2xl lg:text-3xl underline underline-offset-8 text-center">
        Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-5">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="relative h-72 w-full rounded-lg overflow-hidden"
        >
          <Image
            src={"/images/blog1.png"}
            alt="Blog"
            height={286}
            width={588}
            className="object-cover w-full"
          />
          <div className="absolute px-20 inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-lg hover:text-xl font-medium font-mono text-center">
              8 Best
              <br /> Low Maintenance Plants <br /> For a Busy Home
            </h2>
            <Button
              className="mt-2 w-3/4 bg-[#3B823E] text-white rounded hover:bg-[#266628]"
              onClick={() =>
                router.push(
                  `/blogs/8-Best-Low-Maintenance-Plants-For-a-Busy-Home`
                )
              }
            >
              Read More
            </Button>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="relative h-72 w-full rounded-lg overflow-hidden"
        >
          <Image
            src={"/images/blog2.png"}
            alt="Blog"
            height={286}
            width={588}
            className="object-cover w-full"
          />
          <div className="absolute px-20 inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-lg hover:text-xl font-medium font-mono text-center">
              Air Purifying Plants
              <br /> You Should Take Home <br /> Today
            </h2>
            <Button
              className="mt-2 w-3/4 bg-[#3B823E] text-white rounded hover:bg-[#266628]"
              onClick={() =>
                router.push(`/blogs/Air-Purifying-Plants-You-Should-Take-Home`)
              }
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
