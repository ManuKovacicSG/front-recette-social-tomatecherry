import React from 'react'
import homeIcon from '../assets/homeIcon.svg'
import statisticsIcon from '../assets/statisticsIcon.svg'
import createIcon from '../assets/createIcon.svg'
import profileIcon from '../assets/profileIcon.svg'
import recipesIcon from '../assets/recipesIcon.svg'

type Props = {}


const PrimaryNavbar = (props: Props) => {
  return (
    <div className="fixed bottom-0 w-full bg-white shadow-lg">
      <nav className="bg-[#171E2B] flex justify-around py-2">
        <a href="/social" className="flex flex-col items-center text-gray-600 hover:text-gray-800 font-medium">
          <img src={homeIcon} alt="Home Icon" className="w-6 h-6" />
          Home
        </a>
        <a href="/statistic" className="flex flex-col items-center text-gray-600 hover:text-gray-800 font-medium">
          <img src={statisticsIcon} alt="Statistics Icon" className="w-6 h-6" />
          Statistics
        </a>
        <a href="/recipeform" className="flex flex-col items-center text-gray-600 hover:text-gray-800 font-medium">
          <img src={createIcon} alt="Create Icon" className="w-6 h-6" />
          Create
        </a>
        <a href="/recipes" className="flex flex-col items-center text-gray-600 hover:text-gray-800 font-medium">
          <img src={recipesIcon} alt="Recipes Icon" className="w-6 h-6" />
          Recipes
        </a>
        <a href="/profile" className="flex flex-col items-center text-gray-600 hover:text-gray-800 font-medium">
          <img src={profileIcon} alt="Profile Icon" className="w-6 h-6" />
          Profile
        </a>
      </nav>
    </div>
  );
}

export default PrimaryNavbar;