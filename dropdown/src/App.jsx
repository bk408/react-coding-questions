
import { useState } from 'react';
import './App.css'
import Dropdown from './components/Dropdown'

function App() {
   const options = [
     { label: "Option 1", value: "option1" },
     { label: "Option 2", value: "option2" },
     { label: "Option 3", value: "option3" },
   ];
  
   const [selectedOption, setSelectedOption] = useState(null);

   const handleClick = (option) => {
     setSelectedOption(option);
     console.log("selected option is", option)

     
    if (option.value === "option1") {
      alert("option 1 is selected");
    } else if (option.value === "option2") {
      alert("option 2 is selected");
    } else if (option.value === "option3") {
      alert("option 3 is selected");
    }
   };

  return (
    <div className="app">
      <h2>Dropdown example</h2>
      <Dropdown options={options} onSelect={handleClick} />
      <p>Selected Option: {selectedOption ? selectedOption.label : "None"}</p>
    </div>
  );
}

export default App
