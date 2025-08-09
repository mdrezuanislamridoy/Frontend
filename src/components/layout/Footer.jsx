import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 1️⃣ Brand & Contact */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            BuyMe — Wrong Person
          </h2>
          <p className="mb-4 text-sm">
            A trusted place to find quality products with a seamless shopping
            experience and fast delivery.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone />{" "}
              <a
                href="tel:+880123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                +880 123 456 789
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />{" "}
              <a
                href="mailto:support@buyme.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                support@buyme.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt />{" "}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kurigram, Bangladesh
              </a>
            </li>
          </ul>
        </div>

        {/* 2️⃣ Product Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Discount Offers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Important Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Important Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* 4️⃣ Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Stay Updated
          </h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for latest updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 rounded text-white text-sm hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} BuyMe — Wrong Person. All rights reserved.
      </div>
    </footer>
  );
}
