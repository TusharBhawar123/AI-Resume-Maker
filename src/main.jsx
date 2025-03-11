import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Root from './pages/Root';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import GenerateResume from "./pages/GenerateResume.jsx";
import {Toaster} from "react-hot-toast";

createRoot(document.getElementById('root')).render(<StrictMode>
    <BrowserRouter>
        <Toaster/>
        <Routes>
            <Route path="/" element={<Root/>}>
                <Route path="" element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Services" element={<Services/>}/>
                <Route path="Resume" element={<Resume/>}/>
                <Route path="Contact" element={<Contact/>}/>
                <Route path="GenerateResume" element={<GenerateResume/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
</StrictMode>)
