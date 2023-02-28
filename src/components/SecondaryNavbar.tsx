import React, { useState } from 'react'
import tomateCherryIcon from '../assets/tomateCherryIcon.svg'
import shoppingListIcon from '../assets/shoppingListIcon.svg'
import notificationIcon from '../assets/notificationIcon.svg'
import searchBarIcon from '../assets/searchBarIcon.svg'

type Props = {}

const SecondaryNavbar = (props: Props) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  
  return (
  <nav className="bg-black shadow-lg my-6">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src={tomateCherryIcon} alt="Logo" className="h-8 w-8" />
      </div>
      <div className="flex items-center">
        <button className="mr-4 focus:outline-none">
          <img src={shoppingListIcon} alt="shopping list icon" className="h-6 w-6 text-gray-600" />
        </button>
        <button className="mr-4 focus:outline-none">
          <img src={notificationIcon} alt="notification icon" className="h-6 w-6 text-gray-600" />
        </button>
        <button className="mr-4 focus:outline-none" onClick={handleSearchClick}>
          <img src={searchBarIcon} alt="searchbar icon" className="h-6 w-6 text-gray-600" />
        </button>
        <img src="/path/to/profile/picture.png" alt="Profile" className="h-8 w-8 rounded-full" />
      </div>
    </div>
    {isSearchOpen && (
      <div className="mt-4 flex items-center">
        <input type="text" placeholder="Search Recipe" className="w-full px-4 py-2 rounded-l-full border border-gray-400 focus:outline-none focus:border-blue-500" />
        <button className="px-4 py-2 rounded-r-full bg-blue-500 text-white font-bold focus:outline-none">Search</button>
      </div>
    )}
  </div>
</nav>
);
}


export default SecondaryNavbar