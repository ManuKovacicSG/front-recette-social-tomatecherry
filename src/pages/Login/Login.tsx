import React, { FormEventHandler } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/tomate-logo.svg'
import styles from './Login.module.css'

type Props = {
  handleSubmit:
  FormEventHandler<HTMLFormElement>
}

export const Login = (props: Props) => {
  const {handleSubmit} = props;
  return (
    <body>
      <section className={styles.login}>
        <article className='flex flex-cols-3 gap-2 justify-center'>
          <p className='text-white font-normal'>tomate</p>
          <img src={logo} alt='logo'></img>
          <p className='text-white font-normal'>cherry</p>
        </article>
        <article className='grid grid-rows-2 gap-8 ml-20 mr-20 justify-center'>
          <h1 className='text-white font-extrabold text-3xl'>¡Únete a nuestra comunidad!</h1>
          <h2 className='text-white font-extrabold text-2xl'>y disfruta de las mejores recetas</h2>
        </article>
        <form onSubmit={handleSubmit} className='grid grid-rows-2 gap-8 ml-14 mr-14 justify-center'>
          <Link to="/statistic"><button className='bg-[#00C27A] text-white font-extrabold text-lg h-11 w-72 rounded-full'>Log In</button></Link>
          <button className='bg-[#FB2B3A] text-white font-extrabold text-lg h-11 w-72 rounded-full'>Create account</button>
        </form>
      </section>
      {/* <section className='grid grid-rows-2 gap-12 ml-14 mr-14 mt-20 justify-center'>
        <button className='bg-[#00C27A] text-white font-extrabold text-lg h-11 w-72 rounded-full'>Sign up </button>
        <button className='bg-[#FB2B3A] text-white font-extrabold text-lg rounded-full'>Create account</button>
      </section>
      <section className='grid grid-rows-2 gap-1 ml-14 mr-14 mt-24 justify-center'>
        <p className='text-white font-normal text-lg'>do you already have an account?</p>
        <button className=' text-regal-green font-normal text-lg'>Log in</button>
      </section> */}
    </body>
  )
}

export default Login