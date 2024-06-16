import { Link } from "react-router-dom";
import Container from "./Container";
import style from './Navbar.module.css';
import logotupa from '../../img/logotupa.png';

function NavBar(){
    return(
      <nav className={style.navbar}>
        <Container>
          <Link to='/'><img src={logotupa} alt="Logo"/></Link>
          <ul className={style.list}>
            <li className={style.item}><Link to='/'>Home</Link></li>
            <li className={style.item}><Link to='/company'>Empresa</Link></li>
            <li className={style.item}><Link to='/contact'>Contato</Link></li>
            <li className={style.item}><Link to='/project'>Projeto</Link></li>
            <li className={style.item}><Link to='/newproject'>Novo Projeto</Link></li>
          </ul>
        </Container>
      </nav>
    )
}

export default NavBar;
