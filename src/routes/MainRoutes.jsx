import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Default, ES } from "../main/script.js";
import { Projects, About, Contact, Extra } from "../pages/index.js";

export const MainRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/home" element={<Default />}/>
                <Route path="/:lang?" element={<Default />}/>
                <Route exact path="/projects" element={<Projects />}/>
                <Route exact path="/proyectos" element={<Projects />}/>
                <Route exact path="/sobremí" element={<About />}/>
                <Route exact path="/contacto" element={<Contact />}/>
                <Route exact path="/extra" element={<Extra />}/>
            </Routes>
        </BrowserRouter>
    )
}