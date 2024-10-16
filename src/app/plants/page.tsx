"use client";
import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import IndoorPlant from "../components/indoorplants";
import AirPurePlants from "../components/airPurePlants";
import FloweringPlants from "../components/floweringPlants";

// Create a separate component that uses useSearchParams
function SectionHandler() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section") as
    | "indoor"
    | "air-pure"
    | "flowering";

  const indoorRef = useRef<HTMLDivElement | null>(null);
  const airPureRef = useRef<HTMLDivElement | null>(null);
  const floweringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (section) {
      const sectionRefs: Record<
        "indoor" | "air-pure" | "flowering",
        React.MutableRefObject<HTMLDivElement | null>
      > = {
        indoor: indoorRef,
        "air-pure": airPureRef,
        flowering: floweringRef,
      };
      sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  return (
    <>
      <div ref={indoorRef}>
        <IndoorPlant />
      </div>
      <div ref={airPureRef}>
        <AirPurePlants />
      </div>
      <div ref={floweringRef}>
        <FloweringPlants />
      </div>
    </>
  );
}

// Main Component with Suspense
export default function Plants() {
  return (
    <main className="bg-[#F0F5F0] min-h-screen">
      <Image
        src="/images/HeroShopBanner.png"
        height={320}
        width={1440}
        alt="Hero Shop Banner"
        className="h-64 w-full object-cover"
      />

      {/* Suspense boundary to prevent rendering issues */}
      <Suspense fallback={<div>Loading sections...</div>}>
        <SectionHandler />
      </Suspense>
    </main>
  );
}

