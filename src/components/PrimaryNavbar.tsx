import React from 'react'
import homeIcon from '../assets/homeIcon.svg'
import statisticsIcon from '../assets/statisticsIcon.svg'
import createIcon from '../assets/createIcon.svg'
import profileIcon from '../assets/profileIcon.svg'
import recipesIcon from '../assets/recipesIcon.svg'
import { Link } from 'react-router-dom'


type Props = {}


const PrimaryNavbar = (props: Props) => {
  return (
    <div className="fixed bottom-0 w-full bg-white shadow-lg">
      <nav className="bg-[#171E2B] flex justify-around py-2">
        <Link to="/social" className="flex flex-col items-center text-gray-600 hover:text-gray-800 font-medium">
          <img src={homeIcon} alt="Home Icon" className="w-6 h-6" />
          Home
        </Link>
        <Link to="/statistic" className="flex flex-col items-center text-gray-600 hover:text-gray-800 font-medium">
          <img src={statisticsIcon} alt="Statistics Icon" className="w-6 h-6" />
          Statistics
        </Link>
        <Link to="/recipeform" className="flex flex-col items-center text-gray-600 hover:text-gray-800 font-medium">
          <img src={createIcon} alt="Create Icon" className="w-6 h-6" />
          Create
        </Link>
        <Link to="/recipes" className="flex flex-col items-center text-gray-600 hover:text-gray-800 font-medium">
          <img src={recipesIcon} alt="Recipes Icon" className="w-6 h-6" />
          Recipes
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-gray-600 hover:text-gray-800 font-medium">
          <img src={profileIcon} alt="Profile Icon" className="w-6 h-6" />
          Profile
        </Link>
      </nav>
    </div>
  );
}

export default PrimaryNavbar;