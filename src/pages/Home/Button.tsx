import React from 'react'

type Props = {}

const Button = (props: Props) => {
  return (
      <a href="/localhost:3000/social" className="bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-10 w-64 rounded-full">
        Bon appetit
      </a>
  )
}

export default Button