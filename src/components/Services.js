import React from 'react'
import Card from './Card'
import VolanteImg from '../assets/volantes.jpg'
import TarjetaImg from '../assets/tarjetas.jpeg'
import Revistas from '../assets/revista.jpeg'
import FolletoImg from '../assets/folleto.jpg'
import LibretaImg from '../assets/libretas.jpeg'
import CajaImg from '../assets/caja.jpg'


const Services = () => {
    return (
        <article className='art-services'>
            <h3>Les ofrecemos a nuestros clientes:</h3>

            <div className='art-services-div'>
                <section>
                    <Card src={VolanteImg} alt='Volante' title='Volantes' description='Volantes promocionales para hacer crecer tu negocio.'/>
                    <Card src={TarjetaImg} alt='Tarjetas' title='Tarjetas' description='Tarjetas de presentación para ser mas profesional y que tus clientes puedan contactarte.'/>
                    <Card src={Revistas} alt='Revistas' title='Revistas' description='Revistas con información, catalogos o libros.'/>
                </section>

                <section>
                    <Card src={FolletoImg} alt='Folleto' title='Folleto' description='Folletos con información sobre ti, o como usar tu producto.'/>
                    <Card src={LibretaImg} alt='Libreta' title='Libreta' description='Libretas con hojas membretadas para que tus clientes no se olviden de ti.'/>
                    <Card src={CajaImg} alt='Cajas' title='Cajas' description='cajas para guardar tu producto que te represente con tu imagen.'/>
                </section>
            </div>
        </article>
    )
}

export default Services