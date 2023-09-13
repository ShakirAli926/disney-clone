import './App.css'
import Login from "./Components/Login.jsx";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/about" element={<h2>About</h2>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
