import React from 'react'
import { Link } from "react-router-dom";

const FloatingButton = () => {

  return (
    <>
    <Link to="/">
    <button title="Up"
        class="fixed z-90 bottom-10 right-8 bg-cyan-500 w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:opacity-80 hover:drop-shadow-2xl animate-bounce duration-300">&#8593;</button>

    </Link>
    </>
  )
}

export default FloatingButton