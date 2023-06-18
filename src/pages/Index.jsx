import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Layout from "./Layout";
import Project from "./Project";
import Experience from "./Experience";

function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/experience" element={<Experience />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index