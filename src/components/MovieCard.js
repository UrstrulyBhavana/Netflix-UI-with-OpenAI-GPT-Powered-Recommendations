import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);
  const [spin, setSpin] = useState(false);
  const panelRef = useRef(null);

  const handleClose = useCallback(() => {
    if (!showModal || closing) return;
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setClosing(false);
    }, 200);
  }, [showModal, closing]);

  // Esc key (capture phase)
  useEffect(() => {
    const onKey = (e) => {
      const k = e.key || e.code;
      if ((k === "Escape" || k === "Esc") && showModal && !closing) handleClose();
    };
    document.addEventListener("keydown", onKey, { capture: true });
    return () => document.removeEventListener("keydown", onKey, { capture: true });
  }, [handleClose, showModal, closing]);

  // Lock body scroll with scrollbar compensation
  useEffect(() => {
    if (!showModal) return;
    const root = document.documentElement;
    const body = document.body;

    const prevOverflow = body.style.overflow;
    const prevPadRight = body.style.paddingRight;

    const sbw = window.innerWidth - root.clientWidth;
    body.style.overflow = "hidden";
    if (sbw > 0) body.style.paddingRight = `${sbw}px`;

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadRight;
    };
  }, [showModal]);

  if (!movie || !movie.poster_path) return null;
  const { poster_path, title, name, overview, release_date } = movie;

  const modalEl = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || name || "Movie details"}
      className={`fixed inset-0 flex items-center justify-center px-2 transition-opacity duration-200 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      style={{ zIndex: 2147483647, backgroundColor: "rgba(0,0,0,0.8)" }}
      onClick={handleClose}
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className={[
          "relative bg-white text-black w-full max-w-xs sm:max-w-md md:max-w-2xl",
          "rounded-xl p-4 sm:p-6 shadow-2xl transition-all duration-200",
          closing ? "opacity-0 scale-95 translate-y-1" : "opacity-100 scale-100 translate-y-0",
          "max-h-[85svh] overflow-y-auto overscroll-contain",
        ].join(" ")}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={(e) => {
            e.stopPropagation();
            setSpin(true);
            setTimeout(() => {
              setSpin(false);
              handleClose();
            }, 220);
          }}
          className="group absolute right-3 top-3 h-10 w-10 grid place-items-center rounded-full bg-black/10 hover:bg-black/15 active:scale-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
          style={{ zIndex: 2147483648 }}
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-6 w-6 text-black/80 transition-transform duration-200 ${
              spin ? "rotate-180" : ""
            } group-hover:rotate-90`}
          >
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <h2 className="text-lg sm:text-xl font-bold mb-2 text-center">{title || name}</h2>
        {release_date && <p className="text-xs sm:text-sm text-gray-500 mb-4 text-center">Release Date: {release_date}</p>}

        <img src={IMG_CDN_URL + poster_path} alt={title || name} className="mx-auto w-full max-w-[180px] sm:max-w-[220px] rounded-lg mb-4" />

        <p className="text-gray-800 text-sm sm:text-base leading-relaxed px-2 text-justify">
          {overview || "No description available."}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        data-aos="fade-up"
        className="min-w-[120px] sm:min-w-[160px] md:min-w-[200px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:z-[5]"
      >
        <img
          src={IMG_CDN_URL + poster_path}
          alt={title || name}
          loading="lazy"
          className="w-full h-auto rounded-lg object-cover shadow-md hover:brightness-110 hover:shadow-xl hover:ring-2 hover:ring-white/70 transition-opacity duration-300 opacity-0"
          onLoad={(e) => (e.currentTarget.style.opacity = "1")}
        />
      </div>

      {showModal && createPortal(modalEl, document.body)}
    </>
  );
};

export default MovieCard;
