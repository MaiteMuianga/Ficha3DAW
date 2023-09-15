import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../img/images.png'
import Container from './Container'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
      <Link to="/">
					<img src={logo} alt="images" />
				</Link>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link to="/">Inicio</Link>
      </li>
      <li className={styles.item}>
        <Link to="/servicos">Servico</Link>
      </li>
      <li className={styles.item}>
        <Link to="/contacto">Contacto</Link>
      </li>
      <li className={styles.item}>
        <Link to="/Acerca">Acerca</Link>
      </li>

    </ul>
    </Container>
    </nav>
  )
}

export default Navbar