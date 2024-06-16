import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import { useNavigate } from "react-router-dom";
function NewProject(){

    const navigate = useNavigate() //usado para redirecionar para outra pasta

    function createPost(project){
     //inicializar cost e serviços
     project.cost = 0
     project.services =[]

     fetch("http://localhost:5000/projects",{
        method: 'POST', //colocar os dados
        headers:{
            'Content-type': 'application/json', //comunicação pra o json
        },
        body: JSON.stringify(project), //mandando os dados do projeto pelo post, atraves da rota da url
     }).then(
        (resp => resp.json())
        .then((data)=>{
            console.log(data)
        })
     ).catch(err=>console.log(err))
    }

    return(
        <div className={styles.nextproject_container}>
            <h1> Crie seu projeto</h1>
            <p>Crie seu projeto para depois adcionar os serviços</p>
            <p>fomrularoio</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject