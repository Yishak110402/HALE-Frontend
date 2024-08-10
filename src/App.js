import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs";
// import Programs from "./pages/Programs";
import GeneralProvider from "./hooks/GeneralContext";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import OpenEvent from "./pages/OpenEvent";

export default function App() {
  return (
    <GeneralProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<AboutUs />} path="/aboutus" />
          {/* <Route element={<Programs />} path="/programs" /> */}
          <Route element={<ContactUs/>} path="/contact" />
          <Route element={<Events/>} path="/events" />
          <Route element={<OpenEvent/>} path="/events/:index" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GeneralProvider>
  );
}
