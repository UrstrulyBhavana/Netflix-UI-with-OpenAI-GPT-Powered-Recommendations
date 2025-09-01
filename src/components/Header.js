import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((s) => s.user);
  const showGptSearch = useSelector((s) => s.gpt.showGptSearch);

  // Redirect based on auth state (App's onAuthStateChanged updates Redux "user")
  useEffect(() => {
    const publicPaths = ["/"]; 
    if (user && location.pathname === "/") {
      navigate("/browse", { replace: true });
    }
    if (!user && !publicPaths.includes(location.pathname)) {
      navigate("/", { replace: true });
    }
  }, [user, location.pathname, navigate]);

  const handleSignOut = () => {
    signOut(auth).catch(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {!showGptSearch && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
      )}

      <div className={showGptSearch ? "bg-black/70 backdrop-blur-sm" : "backdrop-blur-md bg-black/40"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:justify-between items-center gap-3 sm:gap-4">
          <div className="w-full sm:w-auto flex justify-center sm:justify-start">
            <img src={LOGO} alt="Netflix GPT" className="w-32 sm:w-44 object-contain" />
          </div>

          {user && (
            <div className="w-full flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-4">
              {showGptSearch && (
                <select
                  className="p-2 bg-gray-900 text-white rounded"
                  onChange={(e) => dispatch(changeLanguage(e.target.value))}
                >
                  {SUPPORTED_LANGUAGES.map((l) => (
                    <option key={l.identifier} value={l.identifier}>
                      {l.name}
                    </option>
                  ))}
                </select>
              )}

              <button
                type="button"
                onClick={() => dispatch(toggleGptSearchView())}
                className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition"
                aria-label={showGptSearch ? "Go to homepage" : "Open GPT Search"}
              >
                {showGptSearch ? "Homepage" : "GPT Search"}
              </button>

              <div className="flex items-center gap-2">
                {user.photoURL ? (
                  <img
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                    src={user.photoURL}
                    alt={`${user.displayName || "User"} avatar`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 grid place-items-center text-white">
                    🙂
                  </div>
                )}
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="mt-1 sm:mt-0 text-white font-semibold underline text-sm sm:text-base hover:text-red-400 transition"
                >
                  (Sign Out)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

