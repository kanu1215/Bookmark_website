import { useContext } from "react";
import "./card.css";
import ModalContext from "../../store/ModalContext";
import BookmarkContext from "../../store/BookmarkContext";

function Card(props) {

    const {openModal} = useContext(ModalContext);
    const {deleteBookmark} = useContext(BookmarkContext);

    function handleEdit() {
        openModal(props.bookmark);
    }

    function handleDelete() {
        deleteBookmark(props.bookmark._id);
    }

    return (
        <div className="card">
            <p className="card-title">{props.bookmark.name}</p>
            <a href={props.bookmark.url}  target="_blank" className="card-url">{props.bookmark.url}</a>
            <button className="btn-edit" onClick={handleEdit}>Edit</button>
            <button className="btn-delete" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Card;