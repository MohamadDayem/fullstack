import Navbar from "./components/Navbar/Navbar";
import Ouvrages from "./components/Ouvrages/Ouvrages";
import './App.css'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  );
}

export default App;
