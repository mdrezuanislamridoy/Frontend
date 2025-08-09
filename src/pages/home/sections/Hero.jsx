import { useState } from "react";
import { motion } from "framer-motion";
import laptopImg from "../../../assets/herolaptop.png";
import gedgetImage from "../../../assets/storrea-pos-gadgets.png";
import gamingGedgetImage from "../../../assets/gamingGedget.png";
import smartDevices from "../../../assets/smartDevices.png";

export default function Hero() {
  const sections = [
    {
      id: 1,
      title: "Experience the Future of Technology",
      desc: "Discover cutting-edge innovations designed to make your life easier, faster, and smarter — all in one place.",
      img: laptopImg,
    },
    {
      id: 2,
      title: "Revolutionary Smart Devices",
      desc: "Control your home and work environment with our futuristic AI-powered gadgets.",
      img: gedgetImage,
    },
    {
      id: 3,
      title: "Gaming Without Limits",
      desc: "Experience ultra-smooth gameplay with next-gen performance laptops.",
      img: gamingGedgetImage,
    },
    {
      id: 4,
      title: "Creative Tools for Innovators",
      desc: "Unleash your imagination with high-performance creative tools.",
      img: smartDevices,
    },
  ];

  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const [isHovered, setIsHovered] = useState(false);

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const stopAndScale = {
    scale: 1.1,
    y: 0,
    transition: { duration: 0.4 },
  };

  return (
    <section className=" py-10  text-slate-300 w-full md:max-w-7xl m-auto flex flex-col px-4 sm:px-6">
      <div className="p-4 py-20 bg-slate-800 grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-2xl shadow-lg">
        <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {selectedSection.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-slate-400">
              {selectedSection.title.split(" ").slice(-1)}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto md:mx-0">
            {selectedSection.desc}
          </p>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-700 hover:bg-slate-600 rounded-xl text-white font-semibold shadow-lg transition">
            Explore Now
          </button>
        </div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ y: 200, opacity: 0, x: 200, scale: 0.3 }}
          animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src={selectedSection.img}
            alt="Section"
            className="w-64 sm:w-80 md:w-[400px] drop-shadow-2xl rounded-xl object-contain"
            animate={isHovered ? stopAndScale : floatAnimation}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          />
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
        {sections.map((sec) => (
          <div
            key={sec.id}
            className={`p-1 rounded-xl cursor-pointer transition ${
              selectedSection.id === sec.id
                ? "border-4 border-slate-500"
                : "border border-slate-700"
            }`}
            onClick={() => setSelectedSection(sec)}
          >
            <img
              src={sec.img}
              alt={sec.title}
              className="w-24 h-16 sm:w-32 sm:h-20 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
