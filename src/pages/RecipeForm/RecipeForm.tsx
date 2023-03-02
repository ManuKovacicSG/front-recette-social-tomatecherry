import React from "react";
import PrimaryNavbar from "../../components/PrimaryNavbar";
import SecondaryNavbar from "../../components/SecondaryNavbar";

type Props = {};

const RecipeForm = (props: Props) => {
  return (
    <>
      <div>
        <SecondaryNavbar />
        <form
          action=""
          className="md:container md:mx-auto my-8 px-10 grid grid-cols-1 gap-3  "
        >
          <label className="text-white">Title</label>
          <input type="text" placeholder="e.g. Asado de tira" />
          <label className="text-white">Description</label>
          <textarea name="description" />
          <label className="text-white">
            Cooking time: <input type="number" className="text-black" />
          </label>
          <label className="text-white">Ingredients:</label>
          <select name="ingredients">
            <option label="choose at least two"></option>
            <option value="Harina">Harina</option>
            <option value="Agua">Agua</option>
            <option value="Sal">Sal</option>
          </select>
          <label className="text-white">Tags:</label>
          <input type="text" />
        <button className="text-white bg-[#00C27A] p-2 my-7 font-extrabold text-lg h-11 w-72 rounded-full">Submit</button>
        </form>
      </div>
      <PrimaryNavbar />
    </>
  );
};

export default RecipeForm;
