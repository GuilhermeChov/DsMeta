import logo from '../../assets/img/Logo.svg'
import './styles.css'

function Header() {
    return (
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="linkedin.com/in/guilherme-ferreira-52a608205"> Guilherme Ferreira</a>
                    </p>
                </div>
            </header>
    )
}

export default Header