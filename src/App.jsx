import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Homepage from "./pages/home/Homepage";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="bg-slate-900">
      <BrowserRouter>
        <Navbar />
        <div className="pt-16"></div>
        <Homepage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
