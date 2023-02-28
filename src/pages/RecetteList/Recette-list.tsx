import React from 'react';
import logo from '../../assets/tomate-logo.svg';
import cachapa from '../../assets/cachapa.svg'
import PrimaryNavbar from '../../components/PrimaryNavbar';

type Props = {}

const RecetteList = (props: Props) => {
  return (
  <body>
    <section>
      <article className='p-8 flex flex-cols-3 gap-2 justify-center'>
        <p className='text-white font-normal'>tomate</p>
        <img src={logo} alt='logo'></img>
        <p className='text-white font-normal'>cherry</p>
      </article>
      <article className="p-4 container mx-auto px-10 content-center bg-[#00C27A]">
        <p className='text-white back font-black text-3xl text-center'>What do you want to eat today?</p>
      </article>
      <div className='p-6 align-middle'>
        <input id="" className='m-2' placeholder='Search'></input>
      </div>
      <article className='flex flex-cols-3 gap-1 p-4 justify-center'>
        <button className='bg-[#00C27A] text-white font-extrabold text-sm h-11 w-72 rounded-full'>Recipes top</button>
        <button className='bg-[#00C27A] text-white font-extrabold text-sm h-11 w-72 rounded-full'>Recommended</button>
        <button className='bg-[#00C27A] text-white font-extrabold text-sm h-11 w-72 rounded-full'>Breakfast</button>
      </article>
      <div className="max-w-sm max-h-44 bg-[#171E2B] rounded-lg overflow-hidden mx-3">
        <div className="flex flex-cols-3 gap-2 p-2 justify-center">
          <img className=" m-4 block mx-auto h-24 rounded-full"
            src={cachapa}
            alt="trend-up" />
          <div className=''>
            <p className="m-2 text-2xl text-white font-bold">Cachapa</p>
            <p className="m-2 text-sm leading-tight font-light text-white ">Esta receta de cachapas venezolanas caseras con queso son irresistibles, una combinación de sabores dulces y salados</p>
          </div>
        </div>
      </div>
      <div className="max-w-sm max-h-44 bg-[#171E2B] rounded-lg overflow-hidden mx-3 my-1">
        <div className="flex flex-cols-3 gap-2 p-2 justify-center">
          <img className=" m-4 block mx-auto h-24 rounded-full"
            src={cachapa}
            alt="trend-up" />
          <div className=''>
            <p className="m-2 text-2xl text-white font-bold">Arrollado de papa</p>
            <p className="m-2 text-sm leading-tight font-light text-white ">Sigue nuestra sencilla receta para preparar esta rica paella, ¡incluso si nunca habías preparado una!</p>
          </div>
        </div>
      </div>
      <div className="max-w-sm max-h-44 bg-[#171E2B] rounded-lg overflow-hidden mx-3 my-1">
        <div className="flex flex-cols-3 gap-2 p-2 justify-center">
          <img className=" m-4 block mx-auto h-24 rounded-full"
            src={cachapa}
            alt="trend-up" />
          <div className=''>
            <p className="m-2 text-2xl text-white font-bold">Paella</p>
            <p className="m-2 text-sm leading-tight font-light text-white ">Sigue nuestra sencilla receta para preparar esta rica paella, ¡incluso si nunca habías preparado una!</p>
          </div>
        </div>
        <Navbar/>
        </>
  )
}

export default RecetteList