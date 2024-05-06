import './home.css'

function home (){
    return(
        <div className="corpo">
            <h2 className='titulo'>Bem-vindo a Página Inicial da nossa AV2 (3° Tentativa)</h2>
            <p className='sub-titulo'>Agora Vai!!</p>
            <img className='Foto1' src={require('../assets/FOTO5.jpg')} width={386}/>
            <img className='Foto2' src={require('../assets/FOTO6.jpg')} width={370}/>
            <img className='Foto3' src={require('../assets/FOTO7.jpg')} width={374}/>
            <img className='Foto4' src={require('../assets/HOME.jpg')} width={374}/>
            <h4 className='mini1'>Vista de Cima Cimatec Park</h4>
            <h4 className='mini2'>Portaria Senai Cimatec</h4>
            <h4 className='mini3'>Portaria SESI Saúde Piatã</h4>
            <p className='sub1'>Portaria SESI Piatã</p>
        </div>
    )
}

export default home;