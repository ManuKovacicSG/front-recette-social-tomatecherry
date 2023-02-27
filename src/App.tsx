import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Home/Home";
import Socialpage from "./pages/Social/Social"
import Statisticpage from "./pages/Statistic/Statistic"
import Login from "./pages/Login/Login"
import "../src/styles/tailwind.css";
import RecetteList from "./pages/RecetteList/Recette-list";

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/social" element={<Socialpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/statistic" element={<Statisticpage />} />
        <Route path="/recette-list" element={<RecetteList />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

