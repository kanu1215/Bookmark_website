import { useContext, useEffect, useState } from "react";
import Modal from "../ui/Modal";
import BookmarkContext from "../../store/BookmarkContext";
import ModalContext from "../../store/ModalContext";

import "./bookmarkForm.css";

function BookmarkForm(props) {

    const [websiteName, setWebsiteName] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const {addBookmark, updateBookmark} = useContext(BookmarkContext);
    const {closeModal, modalData} = useContext(ModalContext);

    function handleWebsiteName(e) {
        setWebsiteName(e.target.value);
    }

    function handleWebsiteUrl(e) {
        setWebsiteUrl(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(websiteName === "") {
            setErrMsg("Enter a valid website name!");
            return;
        }

        if(websiteUrl === "") {
            setErrMsg("Enter a valid website URL!");
            return;
        }

        const bookmark = {
            name: websiteName,
            url: websiteUrl,
        };

        if (modalData && modalData._id) {
            updateBookmark({...bookmark,_id: modalData._id }); 
        } else {
            addBookmark(bookmark);
        }

        closeModal();
    }

    useEffect(() => {
        if (modalData) {
            setWebsiteName(modalData.name || "");
            setWebsiteUrl(modalData.url || "");
        }
    }, [modalData]);

    return (
        <Modal
            title={modalData ? "Edit Bookmark" : "Add Bookmark"}
        >
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Website Name here..." value={websiteName} onChange={handleWebsiteName} />

                <input type="url" placeholder="Enter Website URL here..." value={websiteUrl} onChange={handleWebsiteUrl} />

                <p className="err">{errMsg}</p>
                <div className='btn-container'>

                    <button className="cta-secondary" type="button" onClick={closeModal}>Cancel</button>
                    <button className="cta" type="submit">
                        {modalData ? "Update Bookmark" : "Add Bookmark"}
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default BookmarkForm;