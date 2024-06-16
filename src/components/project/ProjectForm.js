
import styles from './Project.module.css'
import Input from '../form/Input'
import Selection from '../form/Selection'
import SubmitButton from '../form/SubmitButton'
import { useState, useEffect } from 'react'

function ProjectForm({handleSubmit, btnText, projectData}){ //receber o nome do button, para deixar sempre tudo dinâmico
   
    const [categories, setCategories] = useState([])  //esptar a resposta da api
    
    const [project,setProject] = useState(projectData || {}) //vai vir das props o projecDATA, caso estiver vaio manda um array vazio e eu preencho
      
    useEffect(()=>{//use o useEffect para receber todos os valores dos comando a abaixo e nao entrar em loop
        fetch("http://localhost:5000/categories",{ //AQUI NESSA URL QUE VAMOS PEGAR AS INFORMAÇOES DE CATEGORIAS
          method: "GET",
          headers:{
            'Content-Type': 'application/json' //CONSUMO DE API EM JSON
         }
         }).then((resp)=> resp.json()) //transformar as respostas pegadas na url a cima em json, atraves do resp.json() e enviar para outro then
           .then((data)=>{
           setCategories(data) //pego os dados e mando para setCategories q é um array
         })
           .catch((err)=>{
            console.log(err)
         })
        },[]) //[] vai ser o que o useEffect vai receber, por isso um array vazio por enquanto

    const submit =(e) =>{
      e.preventDefault() //para a execurção 
      handleSubmit(project) //executo o metodo que é enviado pra ca {handleSubmit}, de outra pagina. e retorno o projeto q ta cadastrado
    }

    function handleChange(e){
       setProject({...project, [e.target.name]: e.target.value}) //pegando os valores preenchidos no input e setando no setProject
    }

    function handleCategory(e){
      setProject({...project, category:{ //adcionando uma lista de dados em category
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      }}) //pegando os valores preenchidos no input e setando no setProject
   }

    return(
        <form  onSubmit={submit} className={styles.form}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange}/> {/* dessa forma consigo reaproveitar o input, atrves de props// handleOnChange={handleChange} pega os dados e mando pra o metodo hanldeChange*/}
            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total"  handleOnChange={handleChange}/> {/* dessa forma consigo reaproveitar o input, atrves de props*/}
            <Selection name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''}/> {/* dessa forma consigo reaproveitar o input, atrves de props*/}
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm