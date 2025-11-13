import { useContext } from "react";
import BookmarkForm from "./components/AddBookmark/BookmarkForm";
import Bookmark from "./components/layout/Bookmark";
import Header from "./components/layout/Header";
import ModalContext from "./store/ModalContext";

function App() {

  const {isOpen} = useContext(ModalContext);

  return (
    <>
      <Header />
      <Bookmark />
      {isOpen && <BookmarkForm />}
    </>
  )
}

export default App;