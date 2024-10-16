import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <main className="h-auto w-full bg-[#436E35] text-white">
      <div className="h-auto w-[90%] mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 py-8">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={"/images/footerLogo.png"}
            height={78}
            width={260}
            alt="logo"
          />
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <p className="font-bold mb-2">Quick Links</p>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Bulk Order</li>
            <li>Gifts</li>
            <li>Organic Garden</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="text-center md:text-left">
          <p className="font-bold mb-2">Legal</p>
          <ul className="space-y-1">
            <li>T&C</li>
            <li>Privacy Policy</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Cancellation</li>
          </ul>
        </div>

        {/* Support */}
        <div className="text-center md:text-left">
          <p className="font-bold mb-2">Support</p>
          <ul className="space-y-1">
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Badge Section */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={"/images/CompanyBadge.png"}
            height={160}
            width={178}
            alt="company Badge"
          />
        </div>

        {/* Social Media and Copyright */}
        <div className="text-center md:text-right">
          <p className="mb-4">© 2021 Plan A Plant All Rights Reserved</p>
          <div className="flex justify-center md:justify-end space-x-4">
            <FaLinkedin size={24} />
            <FaTwitter size={24} />
            <FaInstagramSquare size={24} />
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="h-auto md:h-14 mt-5 w-full bg-[#01370C] flex flex-col md:flex-row items-center justify-between px-8 py-4">
        <p className="text-center md:text-left">We facilitate your payments through trusted gateways</p>
        <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
          <Image src={"/images/visa.png"} alt="Visa" height={15} width={40} />
          <Image src={"/images/circle.png"} alt="MasterCard" height={15} width={40} />
          <Image src={"/images/amex.png"} alt="Amex" height={15} width={40} />
          <Image src={"/images/RuPayLogo.png"} alt="Rupay" height={15} width={40} />
        </div>
      </div>
    </main>
  );
}

