
import { Link } from "react-router-dom";
import styles from './LinkButton.module.css'
function LinkButton({ to, text }) { // to=para onde vai quando clicar// text= mensagem de aviso dizendo onde quero usar
    return(
        <Link className={styles.btn} to={to}>
           {text}  {/* receber a ULR E NOME DO BUTTOM DE FORMA DINÂMICA */}
        </Link>
    );
}

export default LinkButton;
