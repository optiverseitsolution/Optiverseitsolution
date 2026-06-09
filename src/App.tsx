import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepage";
import WorkProcess from "./pages/WorkProcess";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/work-process" element={<WorkProcess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;