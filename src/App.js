import React from "react";
import "./App.css";
import Portada from "./components/portada/Portada";
import Modal from "./components/modalProjects/Modal";
import useModal from "./hooks/useModal";




function App() {
  

  const [isOpenModal, openModal, closeModal] = useModal();

  return (
    <div className="App">
      <Portada />
      <button className="projects-btn" onClick={openModal}>
        <h4>Projects</h4>
      </button>
      <Modal isOpen={isOpenModal} closeModal={closeModal} />
    </div>
  );
}
export default App;
