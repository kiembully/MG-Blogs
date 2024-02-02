import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, Login, Signup, CreatePost, EditPost } from "./pages";

function App() {
  useEffect(() => {
    document.title = "MG-Blogs";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
