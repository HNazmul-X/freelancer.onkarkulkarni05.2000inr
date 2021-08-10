import { BrowserRouter } from "react-router-dom";
import DefaultRouter from "./Routes/defaultRouter";
import Navbar from "./Components/Navbar/Navbar.jsx"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <DefaultRouter/>
    </BrowserRouter>
  );
}

export default App;
