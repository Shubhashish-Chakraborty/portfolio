import { BrowserRouter , Routes , Route } from "react-router-dom";

import { Home } from "./pages/Home.tsx";
import { Layout } from "./pages/Layout.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Project } from "./pages/Project.tsx";
import { Contact } from "./pages/Contact.tsx";
import { Skill } from "./pages/Skill.tsx";

export default function App() {
    return(
    
            <div className="h-screen bg-gradient-to-br bg-blue-50">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Home/>}></Route>
                            <Route path="projects" element={<Project/>}></Route>
                            <Route path="skills" element={<Skill/>}></Route>
                            <Route path="contact" element={<Contact/>}></Route>
                            <Route path="*" element={<NotFound/>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>

    )
}