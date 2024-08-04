import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs";
import Programs from "./pages/Programs";
import GeneralProvider from "./hooks/GeneralContext";

export default function App() {
  return (
    <GeneralProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<AboutUs />} path="/aboutus" />
          <Route element={<Programs />} path="/programs" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GeneralProvider>
  );
}
