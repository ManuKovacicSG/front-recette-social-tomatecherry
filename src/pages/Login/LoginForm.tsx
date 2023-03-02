import React from "react";
import PrimaryNavbar from "../../components/PrimaryNavbar";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import logo from '../../assets/tomateCherryIcon.svg'

const LoginForm = () => {
  return (
    <>
      <div>
        <img src={logo} alt="" />
        <form
          action=""
          className="md:container md:mx-auto my-8 px-10 grid grid-cols-1 gap-3  "
        >
          <label className="text-white">Username:</label>
          <input type="text" placeholder="e.g. Raulito Chef" />
          <label className="text-white">Email:</label>
          <input
            className="text-black"
            type="text"
            placeholder="arber@capiten.com"
          ></input>

          <button className="text-white bg-[#00C27A] p-2 my-7 font-extrabold text-lg h-11 w-72 rounded-full">
            Dive In
          </button>
        </form>
      </div>
      <PrimaryNavbar />
    </>
  );
};

export default LoginForm;
