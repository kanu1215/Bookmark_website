import { useContext } from "react";
import "./bookmark.css";
import BookmarkContext from "../../store/BookmarkContext";
import Card from "../ui/Card";

function Bookmark() {

    const {bookmarks} = useContext(BookmarkContext);

    return (
        <div className="bookmark">
            <h2 className="bookmark-title">All Bookmarks</h2>
            <div className="bookmark-container">
                {
                    bookmarks.map((bookmark)=> (
                        <Card key={bookmark._id} bookmark={bookmark} />
                    ))
                }
            </div>
        </div>
    )
}

export default Bookmark;