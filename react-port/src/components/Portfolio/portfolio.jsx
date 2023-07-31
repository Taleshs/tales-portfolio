import React from 'react'
import { Link } from 'react-router-dom'
import {PortfolioPattern} from '../../assets'
import { portfolioData } from '../../data'


function Portfolio() {
  return (
    <section id="work" className='px-4 pb-12 border-black border-t-2
    bg-teal-600 bg-fixed
  ' style={{ backgroundImage: "url(" + PortfolioPattern + ")" }} >

    <div className='container mx-auto'>

      <div className='text-white text-center py-12'>
          <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold mb-4'>
            Alguns Projetos
          </h1>
          <p className='max-w-xl mx-auto text-lg'>
            Projetos selecionados que gosto de compartilhar minha experiencia.
          </p>
      </div>

      <div className='grid md:grid-cols-2 gap-8 mb-28'>
        {portfolioData.map((item, index) => (
        <a target='_blank' href={item.link} rel='noopener noreferrer'
        className='md:even:pt-12 ease-in-out duration-75
        hover:translate-y-[-4px] hover:drop-shadow-[10px_8px_0_rgba(0,0,0,1)]'>

          <div className='border-2 border-black rounded-xl overflow-hidden bg-black'>
            <img src={item.thumbnail} alt={item.alt} loading='lazy'/>
          </div>

          <div className='bg-white border-x-2 border-black border-b-2
          rounded-bl-xl rounded-br-xl mx-4 p-4 text-lg flex justify-between gap-4 items-center
          '>

            <div>
              <span className='font-bold'>{item.title} </span>
              <span className='text-zinc-400'>&#9679; {item.category}</span>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </div>
          </a>
        ))}
      </div>


      {/* <Link to={'/work'} className="flex text-xl gap-4 font-bold text-white justify-center mb-8">View all work
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
      </Link> */}

    </div>

  </section>
  )
}

export default Portfolio