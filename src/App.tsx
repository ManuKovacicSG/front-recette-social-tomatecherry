import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Home/Home";
import Socialpage from "./pages/Social/Social"
import Statisticpage from "./pages/Statistic/Statistic"
import "../src/styles/tailwind.css";

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/social" element={<Socialpage />} />
        <Route path="/statistic" element={<Statisticpage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

