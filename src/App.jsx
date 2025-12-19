// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/mainpage/Header";
import MainPage from "./pages/MainPage";
import CalendarPage from "./pages/CalendarPage";
import VideoPage from "./pages/VideoPage";
import LikedPage from './pages/LikedPage';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/liked" element={<LikedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
