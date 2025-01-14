import React from "react";
import favoritechart from "../../assets/favoritechart.png";
import vector from "../../assets/Vector.png";
import trendup from "../../assets/trendup.png";
import style from './Statistic.module.css'
import PrimaryNavbar from '../../components/PrimaryNavbar'
import SecondaryNavbar from "../../components/SecondaryNavbar";

type Props = {};

const Statistic = (props: Props) => {
  return (
    <>
    <SecondaryNavbar />
    <body className={style.statistic}>
      
    <div className="max-w-sm max-h-44 bg-[#171E2B] rounded-lg overflow-hidden mx-3 my-4">
  <div className="sm:flex sm:items-center px-6 py-4">
    <img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full" src={favoritechart} alt="trend-up"/>
    <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left text-white p-3">
      <p className="text-2xl font-bold">Recetas mas votadas</p>
      <p className="text-sm leading-tight font-thin ">Sigue nuestra sencilla receta para preparar esta rica paella, ¡incluso si nunca habías preparado una!</p>
      <div className="mt-4">
      </div>
    </div>
  </div>
</div>
 
    <div className="max-w-sm mx-3 my-4 bg-[#171E2B] rounded-lg overflow-hidden ">
  <div className="sm:flex sm:items-center px-6 py-4">
    <img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24" src={vector} alt="trend-up"/>
    <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left text-white p-3">
      <p className="text-2xl font-bold">Tus estadísticas</p>
      <p className="text-sm leading-tight font-thin ">Sigue nuestra sencilla receta para preparar esta rica paella, ¡incluso si nunca habías preparado una!</p>
      <div className="mt-4">
      </div>
    </div>
  </div>
</div>

        <div className="max-w-sm mx-3 my-4 bg-[#171E2B] rounded-lg overflow-hidden ">
          <div className="sm:flex sm:items-center px-6 py-4">
            <img
              className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24"
              src={trendup}
              alt="trend-up"
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left text-white p-3">
              <p className="text-2xl font-bold">Tus estadísticas</p>
              <p className="text-sm leading-tight font-thin ">
                Sigue nuestra sencilla receta para preparar esta rica paella,
                ¡incluso si nunca habías preparado una!
              </p>
              <div className="mt-4"></div>
            </div>
          </div>
        </div>

    </body>
      <PrimaryNavbar/>
</>
  );
};

export default Statistic;
