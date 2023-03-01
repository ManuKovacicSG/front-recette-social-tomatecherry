import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import appServices from '../apiServices/appservices';
import cachapa from "../assets/cachapa.svg";


type Props = {}

export type Recipe = {
  _id:string;
  title: string;
  description: string;
}

const RecipeCard = (props: Props) => {
  
    const [recipe, setRecipe] = useState<Recipe>()
  
    const params = useParams()
  
    useEffect(() => {
      const loadRecipe = async () => {
        if (params.id) {
          const recipe = await appServices.getRecipeById(params.id)
          console.log(recipe)
          setRecipe(recipe)
        }
      }
      loadRecipe()
    }, [params.id])
    
  return (
    <div className="max-w-sm max-h-44 bg-[#171E2B] rounded-lg overflow-hidden mx-3">
    <div className="flex flex-cols-3 gap-2 p-2 justify-center">
      <img
        className=" m-4 block mx-auto h-24 rounded-full"
        src={cachapa}
        alt="trend-up"
      />
      <div className="">
        <p className="m-2 text-2xl text-white font-bold">{recipe?.title}</p>
        <p className="m-2 text-sm leading-tight font-light text-white ">{recipe?.description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default RecipeCard