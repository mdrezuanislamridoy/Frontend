import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const ElectronicDevicesList = () => {
  const [devices] = useState([
    { id: 1, name: "Smartphone", category: "Mobile" },
    { id: 2, name: "Tablet", category: "Mobile" },
    { id: 3, name: "Laptop", category: "Computing" },
    { id: 4, name: "Smartwatch", category: "Wearable" },
    { id: 5, name: "Gaming Console", category: "Entertainment" },
    { id: 6, name: "E-reader", category: "Reading" },
    { id: 7, name: "Digital Camera", category: "Photography" },
    { id: 8, name: "VR Headset", category: "Immersive Tech" },
    { id: 9, name: "Drone", category: "Aerial" },
    { id: 10, name: "Smart Home Hub", category: "IoT" },
    { id: 11, name: "Streaming Device", category: "Entertainment" },
    { id: 12, name: "Portable Music Player", category: "Audio" },
    { id: 13, name: "Drawing Tablet", category: "Creative" },
  ]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        {devices.map((device) => (
          <motion.li
            key={device.id}
            variants={item}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow "
            whileHover={{ scale: 1.03 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Link>
              <h3 className="font-semibold text-lg">{device.name}</h3>
              <p className="text-gray-600 text-sm">{device.category}</p>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ElectronicDevicesList;
