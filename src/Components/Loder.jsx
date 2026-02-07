import React from "react";

function Loader({ className = "", label = "Loading..." }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${className}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {/* Loader Box */}
      <div className="w-32 h-32 relative flex items-center justify-center">
        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-2xl animate-pulse" />

        {/* Spinning Gradient Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-spin blur-sm" />

        {/* Inner Container */}
        <div className="absolute inset-1 bg-base-100 rounded-xl flex items-center justify-center overflow-hidden shadow-inner">

          {/* Equalizer Bars */}
          <div className="flex gap-1.5 items-end">
            {[
              "bg-cyan-500",
              "bg-blue-500",
              "bg-indigo-500",
              "bg-purple-500",
            ].map((color, i) => (
              <div
                key={i}
                className={`w-1.5 h-12 ${color} rounded-full animate-[bounce_1s_ease-in-out_infinite]`}
                style={{ animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>

          {/* Soft Scan Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/10 to-transparent animate-pulse" />
        </div>

        {/* Corner Pings */}
        {[
          "top-0 left-0 bg-blue-500",
          "top-0 right-0 bg-purple-500",
          "bottom-0 left-0 bg-cyan-500",
          "bottom-0 right-0 bg-indigo-500",
        ].map((pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} w-2 h-2 rounded-full animate-ping`}
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>

      {/* Loading Text */}
      <span className="text-sm tracking-wide text-base-content/70 animate-pulse">
        {label}
      </span>

      {/* Screen-reader only */}
      <span className="sr-only">Content is loading</span>
    </div>
  );
}

export default Loader;
