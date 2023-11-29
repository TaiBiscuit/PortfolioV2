import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Default, ES } from "../main/script.js";
import { Projects, About, Contact } from "../pages/index.js";

export const MainRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/home" element={<Default />}/>
                <Route exact path="/" element={<Default />}/>
                <Route exact path="/projects" element={<Projects />}/>
                <Route exact path="/aboutme" element={<About />}/>
                <Route exact path="/contact" element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    )
}