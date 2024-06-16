import styles from './Container.module.css'

function Container(props){ {/*mudar classes/ children pegas os filhos das routes*/}
    return(
      
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>  

    )
}

export default Container