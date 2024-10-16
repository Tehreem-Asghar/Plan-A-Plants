"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Special from "./components/home";
import { BestSelsCard } from "./components/bestSelsCard";
import TrendingPlant from "./components/trendingPlant";
import Blogs from "./blogs/page";
import HotSales from "./components/hotSels";
import { Button } from "@/components/ui/button";
import Planter from "./components/planter";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/contact`);
  };

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <main className="bg-[#F0F5F0] min-h-screen ">
      <Image
        src="/images/HeroBanner.png"
        height={200}
        width={4000}
        alt="A beautiful banner showcasing XYZ"
        layout="responsive"
        priority
        className="w-full h-64 md:h-12"
      />

      <div>
        <section>
          <Special />
        </section>
        <section>
          <BestSelsCard />
        </section>
        <section className="h-auto w-full mt-11">
          <h2 className="text-[#363636] font-bold font-serif text-2xl lg:text-3xl underline underline-offset-8 text-center mt-12 mb-8">
            Trending Plants
          </h2>
          <TrendingPlant />
        </section>
        <section>
          <Blogs />
        </section>
        <section>
          <h2 className="text-[#363636] font-bold font-serif text-2xl lg:text-3xl underline underline-offset-8 text-center mt-12 mb-8">
            Hot Sales
          </h2>
          <HotSales />
        </section>

        <section>
          <h2 className="text-[#363636] font-bold font-serif text-2xl lg:text-3xl underline underline-offset-8 text-center mt-12 mb-8">
            Planters
          </h2>
          <Planter />
        </section>

        <section>
          <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse  gap-5 p-10 mt-11">
            <div
              className="lg:w-2/4 md:w-2/4 w-full  "
              data-aos="fade-down-right"
              data-aos-offset="300"
              data-aos-easing="linear"
            >
              <h2 className="text-2xl lg:text-3xl md:text-3xl   text-[#343434] font-bold font-sans">
                Landscape Gardening
              </h2>
              <p className="mt-4 text-[#343434]">
                Whether it is growing your own food or setting <br />
                up your roof-top garden, we provide the highest <br />
                quality landscaping services, contributing to a greener world
                and substantial living!
              </p>
              <p className="mt-4 text-[#343434]">
                Schedule your service appointment today!
              </p>

              <p className="mt-4 text-[#d11f1f]">
                *Service only available in Telangana and AndhraPradesh
              </p>
              <Button
                className="mt-4 bg-[#3B823E] hover:bg-green-900 text-white text-xl rounded-xl px-8"
                onClick={() => handleButtonClick()}
              >
                Book Now
              </Button>
            </div>
            <div
              className=" lg:w-2/4 md:w-2/4 w-full "
              data-aos="fade-down-left"
              data-aos-offset="300"
              data-aos-easing="linear"
            >
              <Image
                src={"/images/services/landscap.png"}
                alt="Kitchen garding"
                height={506}
                width={569}
                className=" rounded-2xl  w-full"
              />
            </div>
          </div>
        </section>

        <section className="h-auto w-full mt-11">
          <h2 className="text-[#363636] font-bold font-serif text-2xl lg:text-3xl text-center mt-12 mb-8">
            Celebs{" "}
            <span className="underline underline-offset-8">You Love,</span> Love
            Us
          </h2>
          <div>
            {/* First Row of Images */}
            <div className="grid justify-center md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-4 grid-cols-1 px-5">
              <Image
                src={"/images/celeb1.png"}
                alt="celeb1"
                height={250}
                width={220}
                className=" min-w-full hover:scale-150 transition duration-500 "
              />
              <Image
                src={"/images/celeb2.png"}
                alt="celeb2"
                height={250}
                width={220}
                className=" min-w-full hover:scale-150 transition duration-500"
              />
              <Image
                src={"/images/celeb3.png"}
                alt="celeb3"
                height={250}
                width={220}
                className=" min-w-full hover:scale-150 transition duration-500 "
              />
              <Image
                src={"/images/celeb4.png"}
                alt="celeb4"
                height={250}
                width={220}
                className=" min-w-full  hover:scale-150 transition duration-500"
              />
            </div>

            {/* Second Row of Images */}
            <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 justify-center px-5">
              <Image
                src={"/images/celeb5.png"}
                alt="celeb5"
                height={250}
                width={220}
                className=" min-w-full hover:scale-150 transition duration-500"
              />
              <Image
                src={"/images/celeb6.png"}
                alt="celeb6"
                height={250}
                width={220}
                className=" min-w-full  hover:scale-150 transition duration-500"
              />
              <Image
                src={"/images/celeb7.png"}
                alt="celeb7"
                height={250}
                width={220}
                className="  min-w-full  hover:scale-150 transition duration-500"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
