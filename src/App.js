import { BrowserRouter } from "react-router-dom";
import DefaultRouter from "./Routes/defaultRouter";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
    try {
        if (document.location.pathname === "/" && document.location.hash === "") {
            document.location.href = document.location.href + "#header";
        }
    } catch (e) {
        console.log(e);
    }

    return (
        <BrowserRouter>
            <Navbar />
            <DefaultRouter />
        </BrowserRouter>
    );
}

export default App;
