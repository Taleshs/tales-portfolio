import React from 'react'
import { socials } from '../../data'
import { HeroMd } from '../../assets'
import Scroller from '../../components/scroller'
import Contact from '../../components/contact'


function About() {
  return (
    <>

    <section className='py-12 border-x-2 border-black'>

    <div className='container mx-auto px-4 grid gap-8 lg:grid-cols-2'>

      <div>
        <h1 className='text-3xl lg:text-4xl xl:text-6xl font-bold mb-4'>Um pouco sobre mim.</h1>
        <p className='mb-2 text-lg'>
          Desenvolvedor web desde 2011, tive a oportunidade de obter uma visão 360° sobre o que é necessário para evoluir um projeto, pois iniciei minha carreira em agências de marketing digital, como desenvolvedor front-end.
        </p>
        <p className='mb-2 text-lg'>
          Ao longo dos anos, expandi meus conhecimentos e habilidades, tornando-me um full-stack developer. Durante essa jornada, me envolvi com a gestão de projetos e o atendimento ao cliente o que me levou a exercer o papel de Scrum Master.
        </p>
        <p className='mb-4 text-lg'>
          No entanto, minha verdadeira paixão sempre foi a programação e a criação de projetos de qualidade que produzissem resultados significativos. Acredito que a combinação de minhas habilidades técnicas e meu entendimento dos requisitos de negócios me permitiu entregar soluções eficazes e alcançar o sucesso em cada projeto em que me envolvi.
        </p>

        <div className='text-lg font-bold'>Redes</div>

        <div className='mb-8'>

          <ul className='flex gap-6'>
            {socials.map((item, index) => (
              <li key={index}>
                <a target='_blank' href={item.link} rel='noopener noreferrer'
                className='py-2 flex flex-col md:flex-row gap-2 items-center justify-center'>
                <img src={item.icon} alt={item.alt} width='' height='' />
                {item.name}
                </a>
              </li>
            ))}
    
          </ul>
        </div>
      </div>

      <div>
          <img src={HeroMd} alt="Me programming" className='border-black border-2 rounded-xl mb-8' />   
      </div>

    </div>

    </section>

    <Scroller
      text={" ✨ Let's get to work! ✨ Have a project in mind? ✨ Let's get to work! ✨ Have a project in mind? ✨ Let's get to work! ✨ Have a project in mind?"}
      link="/contato"
    />
    <Contact/>

    </>
  )
}

export default About