import {useState} from 'react'
import './App.css';
import ChildComp from './ChildComp';

function App() {
  //state for store child component message
  const [childName,setChildName] = useState("Default");

  //function to set child component message
  const receiveName = (name=>{
    setChildName(name);
  })
  return (
    <div className="App">
      <h1>Hello I'm Parent</h1>
      {/* Call the Child Component */}
      <ChildComp setFunc={receiveName} />
      {/* Display the child Component message */}
      <p>Parent : My Child said{childName}</p>
    </div>
  );
}

export default App;
