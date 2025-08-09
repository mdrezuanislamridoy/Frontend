import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Fashion",
      dropdown: [
        { name: "Men's Fashion", path: "/fashion/men" },
        { name: "Women's Fashion", path: "/fashion/women" },
        { name: "Child's Fashion", path: "/fashion/child" },
        { name: "Random Fashion", path: "/fashion/random" },
      ],
    },
    {
      name: "Product's Categories",
      dropdown: [
        { name: "Electronics", path: "/categories/electronics" },
        { name: "Fashion", path: "/categories/fashion" },
        { name: "Home & Kitchen", path: "/categories/home-kitchen" },
        {
          name: "Beauty & Personal Care",
          path: "/categories/beauty-personal-care",
        },
        { name: "Sports & Outdoors", path: "/categories/sports-outdoors" },
        { name: "Books & Stationery", path: "/categories/books-stationery" },
        { name: "Toys & Games", path: "/categories/toys-games" },
        { name: "Automotive", path: "/categories/automotive" },
        { name: "Groceries", path: "/categories/groceries" },
        { name: "Pet Supplies", path: "/categories/pet-supplies" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white/10 backdrop-blur-2xl shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h2 className="text-2xl font-bold text-slate-200">BuyMe</h2>

        {/* Desktop Menu  */}
        <ul className="hidden md:flex gap-6 items-center font-medium">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <li
                key={link}
                className="relative"
                onMouseEnter={() => setDropdownOpen(index)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <span className="cursor-pointer text-slate-200 hover:text-slate-300">
                  {link.name}
                </span>
                <AnimatePresence>
                  {dropdownOpen === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 overflow-hidden"
                    >
                      <ul className="min-w-[200px]">
                        {link.dropdown.map((sub, i) => (
                          <li key={i}>
                            <Link
                              to={sub.path}
                              className="block px-4 py-2  hover:bg-slate-100"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link}>
                <Link
                  to={link.path}
                  className="hover:text-slate-300 text-slate-200 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>

        <button
          className="md:hidden text-slate-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu  */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <ul className="flex flex-col font-medium">
              {navLinks.map((link, index) =>
                link.dropdown ? (
                  <li key={link} className="border-b">
                    <button
                      className="w-full text-left px-4 py-2 flex justify-between items-center"
                      onClick={() =>
                        setDropdownOpen(dropdownOpen === index ? null : index)
                      }
                    >
                      {link.name}
                      <span>{dropdownOpen === index ? "-" : "+"}</span>
                    </button>
                    <AnimatePresence>
                      {dropdownOpen === index && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          className="bg-slate-50"
                        >
                          {link.dropdown.map((sub, i) => (
                            <li key={i}>
                              <Link
                                to={sub.path}
                                className="block px-6 py-2 hover:bg-slate-100"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={link} className="border-b">
                    <Link
                      to={link.path}
                      className="block px-4 py-2 hover:bg-slate-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
