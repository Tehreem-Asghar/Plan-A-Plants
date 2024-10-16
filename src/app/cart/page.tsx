"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import OrderForm from "@/app/components/orderForm";
import Link from "next/link";

// Define the Plant interface for the product details
interface Plant {
  id: number;
  name: string;
  price: number;
  cutPrice: number;
  description: string;
  watering: string;
  LightRequirements: string;
  Humidity: string;
  image: string;
}

// Define the CartItem interface to manage selected plant and its quantity
interface CartItem {
  selectedPlant: Plant;
  quantity: number;
}

export default function Cart() {
  // State to store the cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Get data from localStorage and save it in the state
  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("cart");
    if (dataFromLocalStorage) {
      setCartItems(JSON.parse(dataFromLocalStorage));
    } else {
      setCartItems([]);
    }
  }, []);

  // Function to remove an item from the cart based on its ID
  const handleRemove = (id: number) => {
    const updatedCart = cartItems.filter(
      (item) => item.selectedPlant.id !== id
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to increase or decrease the quantity of a specific plant
  const handleQuantityChange = (id: number, increment: boolean) => {
    const updatedCart = cartItems.map((item) =>
      item.selectedPlant.id === id
        ? {
            ...item,
            quantity: increment
              ? item.quantity + 1
              : Math.max(1, item.quantity - 1),
          }
        : item
    );
    setCartItems(updatedCart); // Update state with the new quantities
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  const calculateSubtotal = () =>
    cartItems.reduce(
      (total, item) => total + item.selectedPlant.price * item.quantity,
      0
    );

  const SHIPPING_COST = 200; // Example flat shipping cost
  const total = calculateSubtotal() + SHIPPING_COST;

  return (
    <main className="min-h-screen w-full md:p-10 lg:p-10 p-auto bg-[#F0F5F0]  grid gap-10">
      {cartItems.length > 0 ? (
        <section className="h-auto w-full bg-[#F0F5F0] shadow-2xl rounded-2xl py-4">
          <h1 className="text-[#343434] font-bold font-serif text-2xl lg:text-3xl underline underline-offset-8 text-center">
            Your Cart Items
          </h1>
          <table className="table-auto border-collapse w-full mt-2">
            <thead>
              <tr className="text-[#343434]">
                <th className="p-4 md:p-5 lg:p-5">Product</th>
                <th className="p-4 md:p-5 lg:p-5">Price</th>
                <th className="p-4 md:p-5 lg:p-5">Quantity</th>
                <th className="p-4 md:p-5 lg:p-5">Total</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.selectedPlant.id}
                  className="text-center border-b border-[#343434]"
                >
                  <td className="flex flex-col md:flex-row justify-center items-center space-x-4 p-2 md:p-5">
                    <Image
                      src={item.selectedPlant.image}
                      alt={item.selectedPlant.name}
                      height={100}
                      width={100}
                      className="rounded-md mb-2 md:mb-0"
                    />
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-[#343434]">
                        {item.selectedPlant.name}
                      </h3>
                      <button
                        onClick={() => handleRemove(item.selectedPlant.id)}
                        className="text-[#343434] hover:text-[#1f1f1f] mt-2 transition duration-200 underline"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                  <td className="p-2 md:p-5">{item.selectedPlant.price}</td>
                  <td>
                    <div className="flex items-center w-36 border border-[#343434] overflow-hidden">
                      <button
                        className="px-4 py-1 bg-gray-200 hover:bg-gray-300"
                        onClick={() =>
                          handleQuantityChange(item.selectedPlant.id, false)
                        }
                      >
                        -
                      </button>
                      <span className="px-6 py-1">{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.selectedPlant.id, true)
                        }
                        className="px-4 py-1 bg-gray-200 hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{item.selectedPlant.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>

            <tfoot className="text-[#343434]">
              <tr>
                <td className="text-right p-4" colSpan={3}>
                  SubTotal
                </td>
                <td className="p-4">{calculateSubtotal()}</td>
              </tr>
              <tr>
                <td className="text-right p-4" colSpan={3}>
                  Shipping
                </td>
                <td className="p-4">{SHIPPING_COST}</td>
              </tr>
              <tr>
                <td className="text-right p-4 font-medium" colSpan={3}>
                  Total
                </td>
                <td className="p-4 font-medium">{total}</td>
              </tr>
            </tfoot>
          </table>
        </section>
      ) : (
        <div className="text-center h-auto w-full bg-[#F0F5F0] shadow-2xl rounded-2xl py-4 space-y-6">
          <h2 className="text-green-700 font-bold mb-4 text-xl md:text-3xl lg:text-5xl">
            No items in the cart
          </h2>
          <Link
            href="/"
            className="text-green-950 font-serif text-lg md:text-2xl lg:text-3xl hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      )}

      <section className="h-auto w-full bg-[#F0F5F0] shadow-2xl rounded-2xl py-4">
        <h2 className="text-[#343434] px-5">
          Returning customer? Click Here to Login.
        </h2>
      </section>
      <section className="h-auto w-full bg-[#F0F5F0] shadow-2xl rounded-2xl py-4">
        <OrderForm />
      </section>
    </main>
  );
}
