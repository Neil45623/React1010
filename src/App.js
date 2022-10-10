import './App.css';
import HelloWorld from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <HelloWorld test={'test'} />
      </div>
  );
}
const array = [0,1,3];

console.log(...array);

const Person = {
  Name: "yan",
  age:"70"
}

const Yassine = {
  name: "Yassine",
    ...Person
}

console.log(Yassine)
export default App;
