"use client";

import { planter } from "@/database";
import Image from "next/image";
import { useState } from "react";
import Planter from "@/app/components/planter";
import Link from "next/link";

interface Params {
  id: string;
}

interface Plant {
  id: number;
  name: string;
  price: number;
  cutPrice: number;
  description: string;
  image: string;
}
interface CartItem {
  selectedPlant: Plant;
  quantity: number;
}

export default function PlantsDetail({ params }: { params: Params }) {
  const { id } = params;
  const [check, setCheck] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [addcard, setAddcart] = useState<boolean>(false);

  const selectedPlant = planter.find((item) => String(item.id) === id);
  console.log(selectedPlant);
  if (!selectedPlant) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Plant Not Found
      </div>
    );
  }

  const handleAddButton = () => {
    setQuantity((pre) => pre + 1);
  };

  const handleSubButton = () => {
    if (quantity > 1) {
      setQuantity((pre) => pre - 1);
    }
  };

  const addToCard = () => {
    if (selectedPlant) {
      // Check if 'cart' already exists in localStorage
      const cartItems = localStorage.getItem("cart");

      // If cart exists, parse it, otherwise initialize as an empty array
      const cart: CartItem[] = cartItems ? JSON.parse(cartItems) : [];

      // Check if the selected plant is already in the cart
      const existingItem: CartItem | undefined = cart.find(
        (item: CartItem) => item.selectedPlant.id === selectedPlant.id
      );

      if (existingItem) {
        // Update the quantity if the plant is already in the cart
        existingItem.quantity += quantity;
      } else {
        // Add the new plant with its quantity
        const data: CartItem = {
          selectedPlant: selectedPlant,
          quantity: quantity,
        };
        cart.push(data);
      }

      // Save the updated cart back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
      setAddcart(true);
    }
  };
  // // Handle form submission to prevent reload
  const handleCheckDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    setCheck(true);
  };

  return (
    <main className="min-h-screen min-w-full bg-[#F0F5F0] py-16 ">
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-10">
        {/* Image Section */}
        <div className="md:w-1/2 ">
          <Image
            src={selectedPlant.image}
            alt={selectedPlant.name}
            height={560}
            width={553}
            className="rounded-lg shadow-lg object-cover h-full w-full"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 space-y-3">
          <p className="text-lg font-semibold text-green-700">
            $ {selectedPlant.price}
            <em className="ml-2 text-red-500 line-through">
              ${selectedPlant.cutPrice}
            </em>
          </p>

          <h1 className="text-3xl font-bold text-[#343434]">
            {selectedPlant.name}
          </h1>

          <p className="text-sm lg:text-xl text-[#343434]">
            {selectedPlant.description}
          </p>

          {/* Quantity Selector */}
          <div className="flex md:flex-row lg:flex-row flex-col sm:flex-row items-center gap-4 text-[#343434]">
            <div className=" text-[#343434] flex gap-2 ">
              <p className="text-lg  text-[#343434] ">Quantity</p>
              <div className="flex items-center border border-[#343434] overflow-hidden">
                <button
                  className="px-4 py-1 bg-gray-200 hover:bg-gray-300"
                  onClick={handleSubButton}
                >
                  -
                </button>
                <span className="px-6 py-1">{quantity}</span>
                <button
                  onClick={handleAddButton}
                  className="px-4 py-1 bg-gray-200 hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            <div className=" text-[#343434]  flex gap-2  ">
              <p className="text-lg ">Include Planter</p>
              <div
                className={"border border-[#343434]  overflow-hidden px-4 py-1"}
              >
                <select>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
          </div>

          <button
            className=" md:w-80 w-52 lg:w-80  py-3 mt-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition duration-300"
            onClick={addToCard}
          >
            Add to Cart
          </button>
          {addcard && (
            <div className="h-auto p-2 bg-green-200 text-center  border border-green-700 rounded-2xl w-auto text-green-800">
              <p>Your item add to card </p>
              <Link href={"/cart"} className="text-green-900 font-semibold">
                Check Here
              </Link>
            </div>
          )}

          <h2>Delivery</h2>
          <p>Enter your pinCode to check delivery time </p>
          <form onSubmit={handleCheckDelivery}>
            <input
              type="number"
              placeholder="Enter pinCode"
              min={6}
              className="border border-gray-700 w-36 mr-5 "
              required
            />
            <button type="submit" className="text-[#3B823E] font-semibold">
              Check
            </button>
          </form>
          {check ? (
            <div className="border border-[#343434] text-[#343434] p-2 rounded-lg">
              <p className="text-sm lg:tex-xl">
                Delivery available for this location
                <br /> typicaly deliverd in 5-7 working days <br /> standard
                delivery
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-[#363636] mb-9 font-bold font-sans text-2xl lg:text-3xl underline underline-offset-8 text-center">
          You May Also Like...
        </h2>
        <Planter />
      </section>
    </main>
  );
}
