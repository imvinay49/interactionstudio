import "./App.css";
import Home from "./components/Home.jsx";
import Content from "./components/Content.jsx";
import About from "./components/About.jsx";
import { Routes, Route } from "react-router-dom"; // ✅ Correct import

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<Content />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
