import { motion } from "framer-motion";
import { useState } from "react";

const TopProducts = () => {
  // Sample product data with random images from Unsplash
  const productsData = [
    {
      id: 1,
      name: "MacBook Pro M2",
      category: "Laptop",
      price: "$1,299",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1675868375184-8d711f447b28?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      category: "Smartphone",
      price: "$999",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: "$399",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1588806287985-ff6da94f854e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Samsung QLED TV",
      category: "Television",
      price: "$1,199",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "PlayStation 5",
      category: "Gaming Console",
      price: "$499",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1617864064479-f203fc7897c0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Apple Watch Series 9",
      category: "Smartwatch",
      price: "$429",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1707295337276-5be3e4322ac3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Dyson V15 Vacuum",
      category: "Home Appliance",
      price: "$699",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1681140348643-cfe70c047792?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Bose Soundbar",
      category: "Audio",
      price: "$799",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1648522168698-6255c8ee06b9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [topProducts] = useState(productsData.slice(0, 6));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">Electronic Devices</h1>

      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {topProducts.map((product) => (
          <motion.li
            key={product.id}
            variants={item}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow "
            whileHover={{ scale: 1.03 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.category}</p>
                </div>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                  {product.rating} ★
                </span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold text-gray-900">{product.price}</span>
                <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default TopProducts;
