import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import ModalContextProvider from './store/ModalContextProvider.jsx';
import BookmarkContextProvider from './store/BookmarkContextProvider.jsx';

createRoot(document.getElementById('root')).render(
    <ModalContextProvider>
      <BookmarkContextProvider>
        <App />
      </ BookmarkContextProvider>
    </ ModalContextProvider>
)