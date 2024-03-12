import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/components/Landing";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
