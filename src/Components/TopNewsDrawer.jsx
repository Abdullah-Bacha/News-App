import { FaTimes, FaExternalLinkAlt, FaFire } from "react-icons/fa";

const TopNewsDrawer = ({ open, onClose, news }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40
          bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-full w-80 bg-base-100
          shadow-2xl border-r border-base-300
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-base-200">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            <FaFire className="text-orange-500 animate-pulse" />
            Top News
          </h2>

          <button
            onClick={onClose}
            aria-label="Close drawer"
            className="
              btn btn-ghost btn-sm btn-circle
              hover:bg-base-300 transition
            "
          >
            <FaTimes />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-64px)]">

          {/* Loading */}
          {news.length === 0 && (
            <div className="space-y-3 animate-pulse">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-12 bg-base-300 rounded-lg" />
              ))}
            </div>
          )}

          {/* News items */}
          {news.map((item, i) => (
            <div
              key={i}
              className="
                p-3 rounded-xl border border-base-300
                hover:shadow-md hover:border-primary/40
                transition cursor-pointer
              "
            >
              <p className="text-sm font-semibold leading-snug line-clamp-3">
                {item.title}
              </p>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-2 inline-flex items-center gap-1
                  text-primary text-xs font-medium
                  hover:underline
                "
              >
                Read full article <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default TopNewsDrawer;
