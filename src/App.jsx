import { Routes, Route } from "react-router-dom";
import { MoodMoviesPage } from "./pages/MoodMoviesPage.jsx";
import { DetailPage } from "./pages/DetailPage.jsx";


function App() {

  return (
    <Routes>
        <Route path="/" element={<MoodMoviesPage/>} />
        <Route path="/movie/:id" element={<DetailPage/>} />
    </Routes>
  )
}

export default App
