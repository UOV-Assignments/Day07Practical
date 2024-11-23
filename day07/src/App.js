import {useState} from 'react'
import './App.css';
import ChildComp from './ChildComp';

function App() {
  const [childName,setChildName] = useState("Default");
  const receiveName = (name=>{
    setChildName(name);
  })
  return (
    <div className="App">
      <h1>Hello I'm Parent</h1>
      <ChildComp />
    </div>
  );
}

export default App;
