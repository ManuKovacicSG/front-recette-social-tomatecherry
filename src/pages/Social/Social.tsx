import React from 'react'
import PrimaryNavbar from '../../components/PrimaryNavbar';
import logo from '../../assets/tomate-logo.svg';
import cachapa from '../../assets/cachapa.svg'
import lupa from '../../assets/SearchBarAssets/icon_search.svg'
import filter from '../../assets/SearchBarAssets/filter-button.svg'

type Props = {}
  
const Social = (props: Props) => {
  return (
    <>
  <body>
    <section>
      <article className='p-8 flex flex-cols-3 gap-2 justify-center'>
        <p className='text-white font-normal'>tomate</p>
        <img src={logo} alt='logo'></img>
        <p className='text-white font-normal'>cherry</p>
      </article>
     
        <span>
      <div className='p-6 align-middle'>
        <img src={filter} alt="" />
        <input id="" className='m-2' placeholder='Search' ></input><img src={lupa} alt="" />
      </div>
        </span>
    
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
       </div> 
      </section>
      <PrimaryNavbar/>
    </body>
    <PrimaryNavbar/>
    </>
  )
}

export default Social;