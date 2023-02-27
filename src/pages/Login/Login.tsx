import React from 'react'
import logo from '../../assets/tomate-logo.svg'
import styles from './Login.module.css'

type Props = {}

const Login = (props: Props) => {
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
        <article className='grid grid-rows-2 gap-8 ml-14 mr-14 justify-center'>
          <button className='bg-[#00C27A] text-white font-extrabold text-lg h-11 w-72 rounded-full'>Log In</button>
          <button className='bg-[#FB2B3A] text-white font-extrabold text-lg h-11 w-72 rounded-full'>Create account</button>
        </article>
      </section>
    </body >
  )
}

export default Login