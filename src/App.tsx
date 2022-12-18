import BookMark from "@pages/BookMark";
import Explore from "@pages/Explore";
import Home from "@pages/Home";
import List from "@pages/List";
import Messages from "@pages/Messages";
import Notification from "@pages/Notification";
import Profile from "@pages/Profile";
import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/App.css";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/notifications' element={<Notification />} />
      <Route path='/messages' element={<Messages />} />
      <Route path='/bookmarks' element={<BookMark />} />
      <Route path='/lists' element={<List />} />
      <Route path='/profile/:username' element={<Profile />} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  );
}

export default App;
