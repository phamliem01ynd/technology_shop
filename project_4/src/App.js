import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ThemeToggle from "./components/Theme/theme";
import { WrapperTheme } from "./components/context/themeContext";
import Scroll from "./components/Scroll/scroll";
function App() {
  return (
    <>
      <WrapperTheme>
        <Header />
        <main>
          <Outlet />
        </main>
        <Scroll/>
        <Footer />
      </WrapperTheme>
    </>
  );
}

export default App;
