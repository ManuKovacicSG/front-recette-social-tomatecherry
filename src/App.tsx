import {Route, Routes, useNavigate} from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Home/Home";
import Socialpage from "./pages/Social/Social"
import Statisticpage from "./pages/Statistic/Statistic"
import Login from "./pages/Login/Login"
import "../src/styles/tailwind.css";
import RecetteList from "./pages/RecetteList/Recette-list";
import Profile from "./pages/Profile/Profile";
import RecipeForm from "./pages/RecipeForm/RecipeForm";
import { FormEventHandler, useState } from "react";
import { authService } from "./api/auth.service";

function App() {

  const navigate = useNavigate()
  const [LoggedInUser, setLoggedInUser]=useState<string|null>(null)
  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    
    try {
      const result = await authService.login({
        email: 'mi@mail.com',
        password: '1234'
      })
      console.log(result.data.access_token);

      const {access_token} = result.data;

      localStorage.setItem ('token', access_token)

      setLoggedInUser(localStorage.getItem ('token'))

      navigate ('/home', {replace:true});

    } catch (error) {
      console.log (error);
    }
  }

  const onLogOut = ()=>{
    localStorage.removeItem('token')
    setLoggedInUser(null)
    navigate('/')
  }

  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/social" element={<Socialpage />} />
        <Route path="/auth/login" element={<Login handleSubmit ={handleSubmit}/>} />
        <Route path="/statistic" element={<Statisticpage />} />
        <Route path="/recette-list" element={<RecetteList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipeform" element={<RecipeForm />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

