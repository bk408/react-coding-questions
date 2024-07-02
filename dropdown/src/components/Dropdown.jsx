import { useState } from "react"


const Dropdown = ({options, onSelect}) => {
    const [selectedOption, setSelectedOption] = useState(null)

    const handleClick = (option) => {
        setSelectedOption(option)
        onSelect(option)
    }
  return (
    <div className="container">
      {selectedOption ? selectedOption.label : "please select an option"}

      <div className="data">
        {options.map((option) => (
          <li key={option.value} onClick={() => handleClick(option)}>
            {option.label}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Dropdown