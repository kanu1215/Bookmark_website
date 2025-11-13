import { useContext } from "react";
import "./header.css";
import ModalContext from "../../store/ModalContext";

function Header() {

    const {openModal} = useContext(ModalContext);

    return (
        <header className="header">
            <p className="logo">Bookmark Website</p>
            <button className="cta" onClick={() => {openModal()}}>Add Bookmark</button>
            
        </header>
    )
}

export default Header;