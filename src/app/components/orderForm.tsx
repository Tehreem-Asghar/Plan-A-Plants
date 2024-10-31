"use client";

import Link from 'next/link'
 import { useState } from "react";

const OrderForm = () => {

  const [confirm,setConfirm]=useState<boolean>(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    localStorage.removeItem('cart');
    setConfirm(true);
  };

  return (

    
    <form  onSubmit={handleSubmit}  method="post">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="firstName">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  
                  required
                  id="firstName"
                  className="w-full border border-gray-800 rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label htmlFor="lastName">Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  required
                  id="lastName"
                  className="w-full border border-gray-800 rounded-lg p-2 mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="Phone">Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  id="Phone"
                  placeholder="+923087xxxxx"
                
                  required
                  className="w-full border border-gray-800 rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address*"
                  
                  required
                  className="w-full border border-gray-800 rounded-lg p-2 mt-1"
                />
              </div>
            </div>

            <div>
              <label htmlFor="streetAddress">Street Adress*</label>
              <input
                type="text"
                name="streetAddress"
                id="streetAddress "
                placeholder="House No./ Apartment No./ Plot No."
                
                required
                className="w-full border border-gray-800 rounded-lg p-2 mt-1"
              />
              <input
                type="text"
                name="streetAddress"
                id="streetAddress"
                placeholder="Street Name/ Locality"             
                required
                className="w-full border border-gray-800 rounded-lg p-2 mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="city">City*</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City*"         
                  required
                  className="w-full border border-gray-800 rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label htmlFor="lastName">State*</label>
                <input
                  type="text"
                  name="state"
                  placeholder="State*"
                  required
                  className="w-full border border-gray-800 rounded-lg p-2 mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="pincode">PinCode*</label>
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  placeholder="Pincode*"  
                  required
                  className="w-full border border-gray-800 rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label htmlFor="country">Country*</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  value="Pakistan"
                  readOnly
                  required
                  className="w-full border border-gray-800 rounded-lg p-2 mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="isShippingDifferent"
              className="mr-2"
            />
            <label>Ship to a Different Address</label>
          </div>
          <label htmlFor="orderNotes" className="mb-3">
            Order notes (optional)
          </label>
          <textarea
            name="orderNotes"
            placeholder="Order notes (optional)"
            className="w-full border rounded-lg p-2"
            id="orderNotes"
          ></textarea>
        </div>
      </div>

      <div className=" p-6">
        <h2 className="font-semibold text-[#343434] text-xl">
          Billing Details
        </h2>
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label>
            Pay by <i className="font-semibold text-[#0C2651]">Razorpay</i>{" "}
            Cards, NetBanking, Wallet & UPI
          </label>
        </div>
        <div className="flex justify-evenly md:flex-row lg:flex-row flex-col gap-2 w-full">
          <div className=" md:w-3/6 lg:w-3/6">
            <p className="text-sm text-gray-600 ">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our Privacy Policy
            </p>
          </div>
          <div className="md:w-3/6 lg:w-3/6  mb-1 flex flex-col md:items-end lg:items-end">
            <button
              type="submit"
              className={`md:self-end lg:self-end mt-6 w-3/6 py-3  rounded-lg text-white bg-green-600 hover:bg-green-700 `}
             > Place Order
            </button>

            {confirm&&(
               <div
               className={`mt-4 md:w-3/6 lg:w-3/6 text-center p-4 text-white text-sm  rounded-lg bg-green-500`}
             >
               Order Confirm<br/>
               <Link href="/">Continue Shoping</Link>
             </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
