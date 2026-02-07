import Wraper from "./Wraper";
import TopNewsDrawer from "./TopNewsDrawer";
import { useNewsContext } from "../Context/NewsContext";
import { useState, useRef } from "react";
import { FaBell, FaSearch, FaNewspaper } from "react-icons/fa";

function Navbar({ className }) {
  const { setNews, fetchNews } = useNewsContext();

  const [openTopNews, setOpenTopNews] = useState(false);
  const [topNews, setTopNews] = useState([]);

  const timer = useRef(null);

  // 🔔 Top news
  const handleBellClick = async () => {
    setOpenTopNews(true);

    const data = await fetchNews(
      `/everything?q=breaking news&sortBy=publishedAt&pageSize=10`,
    );

    setTopNews(data.articles);
  };

  // 🔍 Search with debounce
  const searchNews = (e) => {
    const value = e.target.value;
    if (!value) return;

    clearTimeout(timer.current);

    timer.current = setTimeout(async () => {
      const data = await fetchNews(`/everything?q=${value}`);
      setNews(data.articles);
    }, 1200);
  };

  return (
    <div className={`w-full sticky top-0 z-50 ${className}`}>
      <div className="w-full bg-gradient-to-r from-slate-900 to-indigo-900 text-white shadow-lg backdrop-blur">
        <Wraper>
          <div
            className="
          max-w-7xl mx-auto
          flex items-center justify-between
          px-4 sm:px-6
          py-2 sm:py-3
          gap-3
        "
          >
            {/* 🔹 Brand */}
            <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0">
              <FaNewspaper className="text-primary text-lg sm:text-xl group-hover:rotate-6 transition" />
              <h1 className="text-base sm:text-lg md:text-xl font-semibold tracking-wide whitespace-nowrap">
                Bacha <span className="text-primary">News</span>
              </h1>
            </div>

            {/* 🔹 Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search */}
              <div className="relative group">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition" />

                <input
                  type="text"
                  onChange={searchNews}
                  placeholder="Search news..."
                  className="
                input input-bordered
                input-xs sm:input-sm md:input-md
                pl-9
                w-28 sm:w-40 md:w-56
                bg-base-100 text-base-content
                focus:outline-none focus:ring-2 focus:ring-primary
                transition-all
              "
                />
              </div>

              {/* Notification */}
              <button
                onClick={handleBellClick}
                aria-label="Top News"
                className="
              btn btn-ghost btn-circle
              relative
              hover:bg-white/10
              transition transform hover:scale-105 active:scale-95
            "
              >
                <FaBell className="text-base sm:text-lg" />

                {topNews.length > 0 && (
                  <span
                    className="
                  absolute -top-1 -right-1
                  badge badge-xs sm:badge-sm
                  badge-primary
                  animate-pulse
                "
                  >
                    {topNews.length > 9 ? "9+" : topNews.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </Wraper>
      </div>

      {/* 🔥 Drawer */}
      <TopNewsDrawer
        open={openTopNews}
        onClose={() => setOpenTopNews(false)}
        news={topNews}
      />
    </div>
  );
}

export default Navbar;
