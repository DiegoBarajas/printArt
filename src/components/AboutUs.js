import React from 'react'
import PantoneImg from '../assets/pantone.jpg'

const AboutUs = () => {
    return (
        <article className='art-about-us'>
            <h5>En PrintArt nuestra prioridad es la calidad y la satisfacción del cliente, cotiza con nosotros con confianza!</h5>
            
            <section>
                <div className='img'>
                    <img src={PantoneImg} alt='Pantone'/>
                </div>
                
                <div className='p'>
                    <p>Somos una imprenta con sede en la vibrante ciudad de Guadalajara, comprometida con la excelencia en la industria de la impresión. Desde nuestra fundación, hemos estado ofreciendo soluciones de impresión de alta calidad para satisfacer las necesidades de empresas, organizaciones y particulares en toda la región.<br/><br/>Tenemos 30 años de experiencia.</p>
                </div>
            </section>
        </article>
    )
}

export default AboutUs