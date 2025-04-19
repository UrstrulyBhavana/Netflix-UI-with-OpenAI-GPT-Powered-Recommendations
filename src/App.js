import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({ duration: 2000, once: false, easing: "ease-in-out", });
  }, []);
  
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
