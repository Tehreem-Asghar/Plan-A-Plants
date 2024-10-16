"use client";

import { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    orderNotes: "",
    isShippingDifferent: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    // Type Narrowing: If the input is of type checkbox, access `checked`
    const fieldValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation check
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setMessage("Please fill all required fields.");
      return;
    }

    setLoading(true); // Start loader

    try {
      // Simulate API call with a 2-second delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      localStorage.removeItem("cart");

      setMessage("Order Placed Successfully!");
      console.log("Order Data:", formData);

      // Reset form after submission
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        streetAddress: "",
        city: "",
        state: "",
        pincode: "",
        country: "India",
        orderNotes: "",
        isShippingDifferent: false,
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }  finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
                  value={formData.firstName}
                  onChange={handleChange}
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
                  value={formData.lastName}
                  onChange={handleChange}
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
                  value={formData.phone}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                value={formData.streetAddress}
                onChange={handleChange}
                required
                className="w-full border border-gray-800 rounded-lg p-2 mt-1"
              />
              <input
                type="text"
                name="streetAddress"
                id="streetAddress"
                placeholder="Street Name/ Locality"
                value={formData.email}
                onChange={handleChange}
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
                  value={formData.city}
                  onChange={handleChange}
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
                  value={formData.state}
                  onChange={handleChange}
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
                  value={formData.pincode}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
              checked={formData.isShippingDifferent}
              onChange={handleChange}
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
            value={formData.orderNotes}
            onChange={handleChange}
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
              className={`md:self-end lg:self-end mt-6 w-3/6 py-3  rounded-lg text-white ${
                loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"
              }`}
              disabled={loading}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
            {message && (
              <div
                className={`mt-4 md:w-3/6 lg:w-3/6 text-center p-4 text-white text-sm  rounded-lg ${
                  message.includes("Success") ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
