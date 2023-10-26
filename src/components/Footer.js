import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer style={{ paddingTop: '20px'}}>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>

                    <div style={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'start',
                        flexDirection: 'column'
                    }}>
                        <section style={{display: 'flex', paddingLeft: '20px', flexDirection: 'column'}}>
                            <p style={{color: 'white', display: 'flex', alignItems: 'center'}}><WhatsAppIcon  style={{color: 'white'}}/><b>WhatsApp:</b> 33 1212 9565</p>
                            <p style={{color: 'white', display: 'flex', alignItems: 'center'}}><PhoneIcon  style={{color: 'white'}}/><b>Telefono:</b> 3044 8142</p>
                            <p style={{color: 'white', display: 'flex', alignItems: 'center'}}><EmailIcon  style={{color: 'white'}}/><b>Correo:</b> multi_grafic@hotmai.com</p>

                        </section>
                    </div>

                    <div style={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'start',
                        flexDirection: 'column'
                    }}>
                        <section style={{display: 'flex', paddingLeft: '20px', flexDirection: 'column'}}>
                            <p style={{color: 'white', display: 'flex', alignItems: 'center'}}><FacebookIcon  style={{color: 'white'}}/><b>Facebook:</b> PrintArt</p>
                            <p style={{color: 'white', display: 'flex', alignItems: 'center'}}><InstagramIcon  style={{color: 'white'}}/><b>Instagram:</b> @print_art</p>
                        </section>
                    </div>

                </div>
                <br/>
                <br/>
                <p style={{color: '#CCC', fontSize: '10px'}}>©2023 PrintArt - Todos los derechos reservados</p>
                <br/>
            </div>
        </footer>
    )
}

export default Footer