"use client";
import { useRouter } from "next/navigation";
import { MdShoppingCart } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

export default function HeaderTop() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/cart`);
  };

  return (
    <header className="h-16 w-full bg-[#01370C] flex justify-between px-4 md:px-24 items-center">
      <h1 className="text-white text-xs md:text-lg text-center md:ml-28  lg:ml-28">
        Use code FIRST50 for a 50% discount on your first order!
      </h1>
      <div className="text-white text-2xl flex gap-6 pl-3">
        <MdShoppingCart onClick={() => handleButtonClick()} />
        <IoMdContact />
      </div>
    </header>
  );
}
