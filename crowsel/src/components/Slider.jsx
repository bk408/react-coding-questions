import { useState } from "react"


const Slider = ({listData}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
     setCurrentIndex((prevIndex) => prevIndex === 0 ? listData.length - 1 : prevIndex - 1)
    }

    const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex === listData.length - 1 ? 0 : prevIndex + 1)
    }
  return (
    <div className="container">
      <button className="nav-button prev" onClick={handlePrev} >&#8592;</button>
      <div className="container-images">
        {listData.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <div className="slider-images">
              <img src={item.imag} alt={item.name} className="slider-image" />
            </div>
            <div className="slider-details">
              <h2>{item.name}</h2>
              <p>{item.userID}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="nav-button next" onClick={handleNext} >&#8594;</button>
    </div>
  );
}

export default Slider