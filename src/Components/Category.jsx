import React, { useState } from "react";
import Wraper from "./Wraper";
import { useNewsContext } from "../Context/NewsContext";
import {
  FaBriefcase,
  FaFilm,
  FaGlobe,
  FaHeartbeat,
  FaFlask,
  FaFutbol,
  FaMicrochip,
} from "react-icons/fa";

function Category({ className }) {
  const { setNews, fetchNews } = useNewsContext();
  const [active, setActive] = useState("business");

  const categories = [
    { name: "business", icon: <FaBriefcase /> },
    { name: "general", icon: <FaGlobe /> },
    { name: "health", icon: <FaHeartbeat /> },
    { name: "science", icon: <FaFlask /> },
    { name: "sports", icon: <FaFutbol /> },
    { name: "technology", icon: <FaMicrochip /> },
    { name: "entertainment", icon: <FaFilm /> },
  ];

  const handleClick = async (category) => {
    setActive(category);
    const data = await fetchNews(`/everything?q=${category}`);
    setNews(data.articles);
  };

  return (
    <div className={className}>
      <Wraper>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-1">
          {categories.map(({ name, icon }) => (
            <button
              key={name}
              onClick={() => handleClick(name)}
              className={`
            flex items-center gap-1.5 sm:gap-2
            px-3 sm:px-4 md:px-6
            py-1.5 sm:py-2 md:py-3
            rounded-full
            font-medium
            text-xs sm:text-sm
            transition-all duration-300 ease-in-out
            shrink-0
            ${
              active === name
                ? "bg-accent text-white scale-105 shadow-md"
                : "bg-base-200 text-base-content hover:bg-accent hover:text-white"
            }
            hover:scale-105 active:scale-95
          `}
            >
              <span className="text-sm sm:text-base md:text-lg">{icon}</span>
              <span className="uppercase tracking-wide">{name}</span>
            </button>
          ))}
        </div>
      </Wraper>
    </div>
  );
}

export default Category;
