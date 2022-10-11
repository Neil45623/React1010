import './App.css';
import Login from './components/Login';
import HelloWorld from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Dashboard" element={<Dashboard/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
