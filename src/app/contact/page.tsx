"use client";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setIsSubmitted(true);
  };

  return (
    <main className="bg-[#F0F5F0]">
      <div className="h-64 w-full bg-[url('/images/services/HeroBanner.png')] flex justify-center items-center">
        <h1 className="  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Contact
        </h1>
      </div>

      <div>
        <div className="container mx-auto p-6">
          <section className="text-center my-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am here to assist you with your development needs. If you have
              any questions or inquiries, please reach out using the form below
              or through my contact details.
            </p>
          </section>

          <div className="flex flex-col md:flex-row justify-between gap-10 mt-12">
            {/* Contact Form */}
            <div className="w-full md:w-1/2">
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white shadow-md rounded-lg p-6"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-lg font-semibold text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-lg font-semibold text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-lg font-semibold text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      rows={6}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-900 transition"
                  >
                    Submit
                  </button>
                </form>
              ) : (
                <div className="text-center p-6 bg-green-100 border border-green-300 rounded-lg">
                  <h2 className="text-2xl font-semibold text-green-800">
                    Thank you for your message!
                  </h2>
                  <p className="text-lg text-green-700 mt-4">
                    I appreciate your reaching out and will respond shortly.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-semibold">Address:</span> 123 Tech Avenue,
                Karachi, Pakistan
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-semibold">Phone:</span> +92 321 654 9870
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-semibold">Email:</span>{" "}
                tehreemmeo@gmail.com
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/in/tehreem-asghar-1003772b7/"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://x.com/Tehreem1794730?t=IdwZfgI0lQAsXiPe7KfSJQ&s=08"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-500"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href="https://www.instagram.com/tehreem412?igsh=eGs4OWtsZ3Fwcnc2"
                  target="_blank"
                  className="text-pink-600 hover:text-pink-700"
                >
                  <FaInstagramSquare />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
