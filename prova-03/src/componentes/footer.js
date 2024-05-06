import './footer.css'

function footer(){
    return(
        <footer className="baixo">
            <img className='sesi' src={require('../assets/SESI.png')} width={100}/>
            <div className='textinho1'>
                <p>&copy; 2024 Todos os direitos reservados.</p>
            </div>
            <div className='textinho2'>
                <p>Contato: (71) 99999-9999 </p>
            </div>
        </footer>
    )
}

export default footer;