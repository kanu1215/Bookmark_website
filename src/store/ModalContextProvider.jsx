import { useState } from "react";
import ModalContext from "./ModalContext";

const ModalContextProvider = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const openModal = (data=null) => {
        setModalData(data);
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        setModalData(null);
    }

    const values = {
        isOpen: isOpen,
        modalData: modalData,
        openModal: openModal,
        closeModal: closeModal
    }

    return (
        <ModalContext.Provider value={values}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider;