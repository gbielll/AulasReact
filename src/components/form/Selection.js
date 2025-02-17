import styles from './Selection.module.css'

function Selection ({text,name,options,handleOnChange,value}){ //deixar o input de forma dinâmica
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}> {/* //nesse value vai esperar um retorno ou um valor vazio*/}
                <option>Selecione uma opção</option>
                {options.map((option)=>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Selection