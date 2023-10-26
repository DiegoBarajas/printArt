import React from 'react'
import barnizImg from '../assets/barniz.jpeg';
import plastificadoImg from '../assets/plastificado.jpeg';
import suajeImg from '../assets/suaje.jpeg';

(function () {
    var setting = {"query":"Calle Arista 1470, Artesanos, Guadalajara, Jal., México","width":800,"height":600,"satellite":false,"zoom":17,"placeId":"ChIJ2-99AeCxKIQRM_-XcK9ZZEg","cid":"0x486459af7097ff33","coords":[20.6878436,-103.3585144],"lang":"es","queryString":"Calle Arista 1470, Artesanos, Guadalajara, Jal., México","centerCoord":[20.6878436,-103.3585144],"id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"1020249"};
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=1020249';
    s.async = true;
    s.onload = function (e) {
    window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();

const Paper = () => {
    return (
        <div className='contenedor'>
            <h3>Contamos con:</h3>
            <div style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <section style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <img src={barnizImg} alt='Barniz' style={{
                        width: '70%',
                        maxHeight: '300px',
                        objectFit: 'cover'
                    }}/>
                    <p style={{ color: 'white',   textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Barniz</p>
                </section>

                <section style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <img src={plastificadoImg} alt='Barniz' style={{
                        width: '70%',
                        maxHeight: '300px',
                        objectFit: 'cover'
                    }}/>
                    <p style={{ color: 'white',   textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Plastificado</p>
                </section>

                <section style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <img src={suajeImg} alt='Barniz' style={{
                        width: '70%',
                        maxHeight: '300px',
                        objectFit: 'cover'
                    }}/>
                    <p style={{ color: 'white',   textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Suaje</p>
                </section>
            </div>
            <p style={{ marginTop: '30px', textAlign: 'center', fontSize: '30px', color: 'white',   textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Envío a domicilio sin costo</p>


            <p style={{ marginTop: '60px', textAlign: 'center', fontSize: '40px', color: '#02a4ed',   textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Encuentranos en:</p>
            <div style={{display: 'block', margin: 'auto'}} id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
                <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
                
            <a href="https://1map.com/es/map-embed">1 Map</a>
        </div>            
      <p style={{ marginTop: '10px', textAlign: 'center', fontSize: '20px', color: '#fff',   textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>C. Arista 1470, Artesanos, 44200 Guadalajara, Jal.</p>
                
        </div>
    )
}

export default Paper