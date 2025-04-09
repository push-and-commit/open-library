import {Route, Routes} from "react-router";
import Home from "../pages/Home.tsx"
import Layout from "./Layout.tsx"
import './App.css'

const App = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
        </Route>
    </Routes>
);

export default App
