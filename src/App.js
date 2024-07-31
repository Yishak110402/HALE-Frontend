import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<Homepage/>} path="/" />
    </Routes>

    </BrowserRouter>
  );
}

