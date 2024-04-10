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
import Torneos from "./pages/components/Torneos";
import TorneoIniciado from "./pages/components/TorneoIniciado";
import TorneoFinalizado from "./pages/components/TorneoFinalizado";
import EditProfile from "./pages/components/EditProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/game" element={<GamePage />} />
        <Route
          path="/game/tic-tac-toe"
          element={<GamePage enlace="http://185.236.248.96:3002/" />}
        />
        <Route
          path="/game/chess"
          element={<GamePage enlace="http://185.236.248.96:3037/" />}
        />
        <Route
          path="/game/snow-fight"
          element={<GamePage enlace="http://185.236.248.96:5000/" />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<Noticias />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mejorValorados" element={<MasValorados />} />
        <Route path="/nuevos" element={<Nuevos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/foros" element={<Foros />} />
        <Route path="/torneos" element={<Torneos />} />
        <Route path="/torneo-iniciado" element={<TorneoIniciado />} />
        <Route path="/torneo-finalizado" element={<TorneoFinalizado />} />
        <Route path="/EditProfile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
