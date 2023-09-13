import './App.css'
import Login from "./Components/Login.jsx";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Header from "./Components/Header.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
