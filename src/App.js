import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";
import Body from "./components/Body";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";

function AuthWatcher() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload();
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
      }
    });
    return () => unsub();
  }, [dispatch]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false, easing: "ease-in-out" });
  }, []);

  return (
    <Provider store={appStore}>
      <AuthWatcher />
      <Body />
    </Provider>
  );
}

export default App;

