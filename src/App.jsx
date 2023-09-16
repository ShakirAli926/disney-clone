import './App.css'
import Login from "./Components/Login.jsx";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/Home" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
