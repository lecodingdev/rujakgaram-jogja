import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import StorePage from "./pages/StorePage";
import MenuPage from "./pages/Menu";
import { NavigationProvider } from "./components/context";

function App() {
  return (
    <>
      <NavigationProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
        <Footer />
      </NavigationProvider>
    </>
  );
}

export default App;
