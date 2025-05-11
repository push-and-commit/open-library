import {Route, Routes} from "react-router";
import Layout from "./Layout.tsx";
import Home from "../pages/Home.tsx";
import Book from "../pages/Book.tsx";
import About from "../pages/About.tsx";
// import './App.css'

const App = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/works/:key" element={<Book />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Route>
    </Routes>
);

export default App
