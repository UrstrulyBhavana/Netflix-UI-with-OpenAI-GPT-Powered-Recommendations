import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed w-full top-0 left-0 px-4 py-3 bg-gradient-to-b from-black z-50">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-3 sm:gap-4">
        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
          <img className="w-32 sm:w-44 object-contain" src={LOGO} alt="logo" />
        </div>
        {user && (
          <div className="w-full flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-4">
            {showGptSearch && (
              <select
                className="p-2 bg-gray-900 text-white rounded"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>

            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                alt="usericon"
                src={user?.photoURL}
              />
              <button
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
  );

};
export default Header;
