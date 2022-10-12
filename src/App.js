import './App.css';
import Login from './components/Login';
import HelloWorld from './components/HelloWorld';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import menu from './components/Menu';
import navbar from "./components/Navbar"
import Chien from './components/Chien';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Chien" element={<Chien/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;


