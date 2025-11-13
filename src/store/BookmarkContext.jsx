import { createContext } from "react";

const BookmarkContext = createContext({
    bookmarks: [],
    addBookmark: () => {},
    updateBookmark: () => {},
    deleteBookmark: () => {}
})

export default BookmarkContext;