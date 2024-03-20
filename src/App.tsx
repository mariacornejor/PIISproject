import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/components/Landing";
import GamePage from "./pages/components/GamePage";
import Profile from "./pages/components/Profile";
import Noticias from "./pages/components/NewsPage";
import Register from "./pages/components/Register";
import MasValorados from "./pages/components/MasValorados";
import Nuevos from "./pages/components/Nuevos";
import Login from "./pages/components/Login";
import Foros from "./pages/components/Foros";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<Noticias />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mejorValorados" element={<MasValorados />} />
        <Route path="/nuevos" element={<Nuevos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/foros" element={<Foros />} />
      </Routes>
    </Router>
  );
}

export default App;
