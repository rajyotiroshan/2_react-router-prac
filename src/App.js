import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
