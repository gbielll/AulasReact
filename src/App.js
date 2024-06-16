import { BrowserRouter  as Router, Routes, Route} from "react-router-dom";

import Home from './components/pages/Home.js';
import Contact from './components/pages/Contact.js';
import Company from './components/pages/Company.js';
import NewProject from './components/pages/NewProject.js';
import NavBar from "./components/layout/NavBar.js";
import Container from "./components/layout/Container.js";
import Footer from './components/layout/Footer.js'
import Project from "./components/pages/Projects.js";

function App() {
  return (
    <Router> {/*definir rotas*/}
    
    <NavBar/>

    <Container customClass='min-height'> {/*vai mandar as routes como filho, atraves do props. uma forma para mandar varios filhos*/}
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/company" element={<Company/>} />
       <Route path="/project" element={<Project/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/newproject" element={<NewProject/>} />
    </Routes>
    </Container>

    <Footer/> 
   </Router>
  )
}

export default App