import styles from './Home.module.css'
import crieprojetos from '../../img/criarprojetos.gif'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}> {/*trablhar em sessões*/}
        <h1>Bem-vindo ao <span>Tupã</span></h1>
        <p> Comece a gerenciar seus projetos</p>
        <LinkButton to="/newproject" text="Criar Projeto"/>
        <img src={crieprojetos} alt="Const"/>
        </section>
    )
}

export default Home