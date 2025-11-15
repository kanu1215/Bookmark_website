import { useEffect, useState } from "react";
import BookmarkContext from "./BookmarkContext"
import axios from "axios";

const API_URL = "https://crudcrud.com/api/ef87a9951ad3408f92699bbfc150a40e";

const BookmarkContextProvider = (props) => {

    const [bookmarkContextState, setBookmarkContextState] = useState([]);

    useEffect(() => {
        fetchBookmarks();
    }, []);

    const fetchBookmarks = async () => {
        try {
            const res = await axios.get(`${API_URL}/bookmarks`);
            setBookmarkContextState(res.data);
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    const addBookmark = async (bookmark) => {
        try {
            const res = await axios.post(`${API_URL}/bookmarks`, bookmark);
            setBookmarkContextState((prev) => [...prev, res.data]);
        } catch (err) {
            console.error("Add error:", err);
        }
    };

    const updateBookmark = async (updatedBookmark) => {
        try {
            await axios.put(`${API_URL}/bookmarks/${updatedBookmark._id}`, {
                name: updatedBookmark.name,
                url: updatedBookmark.url,
            });

            setBookmarkContextState((prev) =>
                    prev.map((bm) =>
                    bm._id === updatedBookmark._id ? updatedBookmark : bm
                )
            );
        } catch (err) {
            console.error("Update error:", err);
        }
    };

    const deleteBookmark = async (id) => {
        try {
            await axios.delete(`${API_URL}/bookmarks/${id}`);
            setBookmarkContextState((prev) => prev.filter((bm) => bm._id !== id));
        } catch (err) {
            console.error("Delete error:", err);
        }
    };

    const bookmarksData = {
        bookmarks: bookmarkContextState,
        addBookmark: addBookmark,
        updateBookmark: updateBookmark,
        deleteBookmark: deleteBookmark
    }

    return (
        <BookmarkContext.Provider value={bookmarksData}>
            {props.children}
        </BookmarkContext.Provider>
    )
}

export default BookmarkContextProvider;