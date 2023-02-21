import React from 'react'
import logo from '../../assets/tomate-logo.svg'

type Props = {}

const Login = (props: Props) => {
  return (
    <body>
      <section className='flex flex-cols-3 gap-2 justify-center mt-16'>
        <p className='text-white font-normal'>tomate</p>
        <img src={logo} alt='logo'></img>
        <p className='text-white font-normal'>cherry</p>
      </section>
      <section className='grid grid-rows-2 gap-16 ml-14 mr-14 mt-32 justify-center'>
        <h1 className='text-white font-extrabold text-3xl'>¡Únete a nuestra comunidad!</h1>
        <h2 className='text-white font-extrabold text-2xl'>y disfruta de las mejores recetas</h2>
      </section>
      <section className='grid grid-rows-2 gap-12 ml-14 mr-14 mt-20 justify-center'>
        <button className='bg-[#00C27A] text-white font-extrabold text-lg h-11 w-72 rounded-full'>Sign up </button>
        <button className='bg-[#FB2B3A] text-white font-extrabold text-lg rounded-full'>Create account</button>
      </section>
      <section className='grid grid-rows-2 gap-1 ml-14 mr-14 mt-24 justify-center'>
        <p className='text-white font-normal text-lg'>do you already have an account?</p>
        <button className=' text-regal-green font-normal text-lg'>log in</button>
      </section>
    </body>
  )
}

export default Login