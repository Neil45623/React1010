import './App.css';
import Login from './components/Login';
import HelloWorld from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path = "/HelloWorld" index element={<HelloWorld/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
