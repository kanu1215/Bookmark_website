import { createContext } from "react";

const ModalContext = createContext({
    isOpen: false,
    modalData: null,
    openModal: () => {},
    closeModal: () => {}
})

export default ModalContext;