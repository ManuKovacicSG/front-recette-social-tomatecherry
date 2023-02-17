import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "../src/pages/homepage/Homepage";
import Socialpage from "./pages/Socialpage"
import Statisticpage from "./pages/Statisticpage"
import "../src/styles/tailwind.css";

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/social" element={<Socialpage />} />
        <Route path="/statistic" element={<Statisticpage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

