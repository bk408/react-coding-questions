import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="box">
       
        <h2>Hey, I have a surprise for you.</h2>
        <div>
          <button className="btn" onClick={openModal}>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGdnMHVxMmc0ZjFlaHkyODV1a2U0M3ZydnB1a3N3NGJ4cGRlNGpzbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HlO3BJ8LALPW4sE/200.webp"
              alt="alt"
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-component">
            <div className="container">
              <img
                src="https://media1.giphy.com/media/1gXk4d1BP78qQ2bv7Z/200.webp"
                alt="Funny GIF"
                className="gif"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
