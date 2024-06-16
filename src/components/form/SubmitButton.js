import styles from './SubmitButton.module.css'

function SubmitButton ({text}){ //deixar o input de forma dinâmica,usando em varios lugares
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitButton