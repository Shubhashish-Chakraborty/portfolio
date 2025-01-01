import { BrowserRouter , Routes , Route } from "react-router-dom";

import { Home } from "./pages/Home.tsx";
import { Layout } from "./pages/Layout.tsx";
import { NotFound } from "./pages/NotFound.tsx";

export default function App() {
    return(
    
            <div className="h-screen bg-gradient-to-br bg-blue-50">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route path="/" element={<Home/>}></Route>
                            <Route path="*" element={<NotFound/>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>

    )
}