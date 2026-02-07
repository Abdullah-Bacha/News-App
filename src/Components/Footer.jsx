import React from "react";
import Wraper from "./Wraper";
import {
  FaPaintBrush,
  FaBullhorn,
  FaAd,
  FaBuilding,
  FaInfoCircle,
  FaPhoneAlt,
  FaBriefcase,
  FaNewspaper,
  FaGavel,
  FaUserShield,
  FaCookieBite,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-base-200 border-t border-base-300 mt-12">
      <Wraper>
        <footer className="footer sm:footer-horizontal text-base-content p-10 gap-10">

          {/* Services */}
          <nav className="space-y-2">
            <h6 className="footer-title flex items-center gap-2">
              <FaPaintBrush className="text-accent" /> Services
            </h6>
            <a className="link link-hover flex items-center gap-2 hover:translate-x-1 transition">
              <FaPaintBrush /> Branding
            </a>
            <a className="link link-hover flex items-center gap-2 hover:translate-x-1 transition">
              <FaPaintBrush /> Design
            </a>
            <a className="link link-hover flex items-center gap-2 hover:translate-x-1 transition">
              <FaBullhorn /> Marketing
            </a>
            <a className="link link-hover flex items-center gap-2 hover:translate-x-1 transition">
              <FaAd /> Advertisement
            </a>
          </nav>

          {/* Company */}
          <nav className="space-y-2">
            <h6 className="footer-title flex items-center gap-2">
              <FaBuilding className="text-accent" /> Company
            </h6>
            <a className="link link-hover flex items-center gap-2 hover:translate-x-1 transition">
              <FaInfoCircle /> About us
            </a>
            <a className="link link-hover flex items-center gap-2 hover:translate-x-1 transition">
              <FaPhoneAlt /> Contact
            </a>
            <a className="link link-hover flex items-center gap-2 hover:translate-x-1 transition">
              <FaBriefcase /> Jobs
            </a>
            <a className="link link-hover flex items-center gap-2 hover:translate-x-1 transition">
              <FaNewspaper /> Press kit
            </a>
          </nav>

          {/* Legal */}
          <nav className="space-y-2">
            <h6 className="footer-title flex items-center gap-2">
              <FaGavel className="text-accent" /> Legal
            </h6>
            <a className="link link-hover flex items-center gap-2 hover:translate-x-1 transition">
              <FaGavel /> Terms of use
            </a>
            <a className="link link-hover flex items-center gap-2 hover:translate-x-1 transition">
              <FaUserShield /> Privacy policy
            </a>
            <a className="link link-hover flex items-center gap-2 hover:translate-x-1 transition">
              <FaCookieBite /> Cookie policy
            </a>
          </nav>

          {/* Newsletter */}
          <form className="space-y-3">
            <h6 className="footer-title flex items-center gap-2">
              <FaEnvelope className="text-accent" /> Newsletter
            </h6>

            <p className="text-sm opacity-70">
              Get weekly updates & latest news.
            </p>

            <div className="join w-full">
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered join-item w-full focus:outline-accent"
              />
              <button className="btn btn-accent join-item hover:scale-105 transition">
                <FaPaperPlane />
              </button>
            </div>
          </form>

        </footer>

        {/* Bottom Bar */}
        <div className="text-center text-sm opacity-60 pb-6">
          © {new Date().getFullYear()} NewsApp. All rights reserved.
        </div>
      </Wraper>
    </div>
  );
}

export default Footer;
