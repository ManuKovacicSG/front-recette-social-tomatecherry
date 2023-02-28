import React from 'react';
import logo from '../../assets/tomate-logo.svg';
import cachapa from '../../assets/cachapa.svg'
import PrimaryNavbar from '../../components/PrimaryNavbar';

function RecetteList() {
  return (
    <>
    <div className='text-white' >
 <img src={logo} alt='logo'></img>
    </div>
    <div className='bg-[#00C27A] text-white'>
        <h1>What do you want to eat today?</h1>
        </div>
        <div>
            <input type="text" placeholder='Search' />
            <br />
            <button className='bg-[#00C27A] text-white font-extrabold text-lg h-11 w-72 rounded-full'>Recipes top</button>
            <button className='bg-[#00C27A] text-white font-extrabold text-lg h-11 w-72 rounded-full'>Recommended</button>
            <button className='bg-[#00C27A] text-white font-extrabold text-lg h-11 w-72 rounded-full'>Breakfast</button>
        </div>

        <div className="max-w-sm max-h-44 bg-[#171E2B] rounded-lg overflow-hidden mx-3 my-4">
          <div className="sm:flex sm:items-center px-6 py-4">
            <img
              className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
              src={cachapa}
              alt="trend-up"
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left text-white p-3">
              <p className="text-2xl font-bold">Cachapa</p>
              <p className="text-sm leading-tight font-thin ">
              Esta receta de cachapas venezolanas caseras con queso son irresistibles, una combinación de sabores dulces y salados
              </p>
              <div className="mt-4"></div>
            </div>
          </div>
        </div>
        <div className="max-w-sm max-h-44 bg-[#171E2B] rounded-lg overflow-hidden mx-3 my-4">
          <div className="sm:flex sm:items-center px-6 py-4">
            <img
              className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
              src={cachapa}
              alt="trend-up"
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left text-white p-3">
              <p className="text-2xl font-bold">Cachapa</p>
              <p className="text-sm leading-tight font-thin ">
              Esta receta de cachapas venezolanas caseras con queso son irresistibles, una combinación de sabores dulces y salados
              </p>
              <div className="mt-4"></div>
            </div>
          </div>
        </div>
        <div className="max-w-sm max-h-44 bg-[#171E2B] rounded-lg overflow-hidden mx-3 my-4">
          <div className="sm:flex sm:items-center px-6 py-4">
            <img
              className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
              src={cachapa}
              alt="trend-up"
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left text-white p-3">
              <p className="text-2xl font-bold">Cachapa</p>
              <p className="text-sm leading-tight font-thin ">
              Esta receta de cachapas venezolanas caseras con queso son irresistibles, una combinación de sabores dulces y salados
              </p>
            </div>
          </div>
        </div>
        <PrimaryNavbar/>
        </>
  )
}

export default RecetteList