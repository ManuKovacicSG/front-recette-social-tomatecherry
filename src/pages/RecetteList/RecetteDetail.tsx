import React, { useEffect, useState } from "react";
import logo from "../../assets/tomate-logo.svg";
import cachapa from "../../assets/cachapa.svg";
import PrimaryNavbar from "../../components/PrimaryNavbar";
import { useParams } from "react-router-dom";
import appServices from '../../apiServices/appservices'
import RecipeCard from "../../components/RecipeCard";

const RecetteDetail = () => {
  return (
    <section>
     
    <article className="p-8 flex flex-cols-3 gap-2 justify-center">
      <p className="text-white font-normal">tomate</p>
      <img src={logo} alt="logo"></img>
      <p className="text-white font-normal">cherry</p>
    </article>

    <article className="p-4 container mx-auto px-10 content-center bg-[#00C27A]">
      <p className="text-white back font-black text-3xl text-center">
        What do you want to eat today?
      </p>
    </article>

    <div className="p-6 align-middle">
      <input id="" className="m-2" placeholder="Search"></input>
    </div>

    <article className="flex flex-cols-3 gap-1 p-4 justify-center">
      <button className="bg-[#00C27A] text-white font-extrabold text-sm h-11 w-72 rounded-full">
        Recipes top
      </button>
      <button className="bg-[#00C27A] text-white font-extrabold text-sm h-11 w-72 rounded-full">
        Recommended
      </button>
      <button className="bg-[#00C27A] text-white font-extrabold text-sm h-11 w-72 rounded-full">
        Breakfast
      </button>
    </article>
    <RecipeCard />

    
    <PrimaryNavbar />
  </section>
  )
}

export default RecetteDetail