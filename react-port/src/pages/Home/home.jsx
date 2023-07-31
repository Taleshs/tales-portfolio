import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Scroller from '../../components/scroller'
import Contact from '../../components/contact'
import { HeroSm, HeroMd, HeroLg,Curriculo} from '../../assets'
import Service from '../../components/Services/service'
import Portfolio from '../../components/Portfolio/portfolio'

function Home() {
  return (
    <div className='border-black border-x-2'>
      
    <section className='py-10 lg:py-36 xl:py-48'>

      <div className='container mx-auto gap-8 px-4 flex flex-col md:flex-row
        items-center
      '>
          <div className='md:flex-1 md:order-2'>
          
            <picture className='flex drop-shadow-[10px_-10px_0_rgba(250,204,21,1)]
              border-black rounded-tl-[150px] rounded-br-[150px]
              rounded-xl overflow-hidden 
            '>

              <source srcSet={HeroSm} width='363' height='222' 
              media='(max-width: 400px)' type='image/jpg' />
              <source srcSet={HeroMd} width='608' height='372' 
              media='(max-width: 400px)' type='image/jpg' />
              <img src={HeroLg} width='870' height='532' alt="Me working hard on a computer"/>

            </picture>
          </div>


          <div className='md:flex-1'>


            <h2 className='text-lg md:text-xl font-bold uppercase'>Tales Henrique</h2>
            
            <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold mb-4'>
              FullStack<span className='text-yellow-400'>.</span><br/>
              Developer<span className='text-violet-900'>.</span>
            </h1>

            <p className='text-lg max-w-xl mb-6'>
              Eu crio produtos digitais e serviços para ajudar marcas, organizações e empreendedores a obterem o máximo de suas páginas web.
            </p>


            <div className='flex items-baseline gap-4'>
              <HashLink to='#work' className='px-6 py-4 rounded-md
              bg-teal-600 hover:bg-teal-700 text-white'> 
              Projetos
              </HashLink>

              <a target='_blank' href={Curriculo} className='
                px-6 py-4 rounderd-md text-black flex gap-2
              
              '>
                Curriculo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

      </div>
    </section>

    <Scroller
     text={"✨ Html + Css + JS + React.Js + Tailwind + Sass + MongoDB + Node.js + Express + PHP + Mysql + Wordpress + SEO + Python + Flask + Django, entre outras coisas"}

      link="/contato"
    />


   
    <Portfolio />

    <Service />

    <Contact/>

    </div>
  )
}

export default Home