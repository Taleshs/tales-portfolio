import React from 'react'
import { Link } from 'react-router-dom'
import {Jobs} from '../../assets'

function Service() {
  return (
    <section className='border-black border-t-2 px-4 py-12'>

    <div className="container mx-auto">

      <div className='text-center py-12'>
        <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold mb-4'>
          Serviços
        </h1>
        <p className='max-w-xl mx-auto text-lg'>
            Eu venho desenvolvendo sites por um tempo, mas também desfruto igualmente criando outros produtos digitais.
        </p>
      </div>



      <div className='text-black py-12 grid lg:grid-cols-4 items-center'>

        <div>

          <h3 className='text-3xl font-bold mb-4'>Web Design</h3>
          <p className='mb-4 text-lg'>
          Com uma abordagem criativa e focada no usuário, desenvolver designs que se destacam e comunicam a mensagem de forma eficaz se torna parte do dia a dia, junto com a minha experiencia em front-end, os detalhes em torno de uma boa experiencia de usuário, me orgulho dos projetos que desenvolvo.
          </p>
          {/* <Link to={'/web-design'} className='flex gap-2 items-center font-bold mb-14 text-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link> */}

          <h3 className='text-3xl font-bold mb-4'>Web Development</h3>
          <p className='mb-4 text-lg'>
            Como profissional experiente em desenvolvimento web, ofereço soluções inovadoras e personalizadas para projetos online. Com habilidades em diversas linguagens de programação e frameworks, crio sites dinâmicos, intuitivos e visualmente atraentes.
          </p>
          {/* <Link to={'/web-development'} className='flex gap-2 items-center font-bold mb-14 text-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link> */}

        </div>

        <div className='flex justify-center mb-12 md:mb-0 col-span-2'>

          <img src={Jobs} alt="Services I offer" width='611' height='764' loading='lazy' className='
          border-2 border-black rounded-full w-3/5
          drop-shadow-[10px_-10_0_rgba(250,204,21,1)]
          '/>
        </div>

        <div>
        <h3 className='text-3xl font-bold mb-4'>SEO</h3>
          <p className='mb-4 text-lg'>
          Minha abordagem analítica e orientada por dados me permite identificar oportunidades de melhoria e implementar estratégias eficazes para alcançar melhores rankings nas páginas de resultados. Com um profundo conhecimento das últimas práticas de SEO, estou sempre atualizado com as mudanças dos algoritmos dos motores de busca.  
          </p>
          {/* <Link to={'/branding'} className='flex gap-2 items-center font-bold mb-14 text-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link> */}

          <h3 className='text-3xl font-bold mb-4'>WordPress (??)</h3>
          <p className='mb-4 text-lg'>
              Desenvolvo projetos em wordpress a aproximadamente 10 anos, apesar de não ser considerada hoje uma ferramenta muito agil, grande parte dos portais ainda utilizam a ferramenta, então sempre temos algo a aprender e ensinar sobre wordpress.
          </p>
          {/* <Link to={'/wordpress'} className='flex gap-2 items-center font-bold mb-14 text-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link> */}

        </div>

      </div>

    </div>

  </section>
  )
}

export default Service