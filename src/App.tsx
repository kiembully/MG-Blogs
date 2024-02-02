import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  MainPage,
  Login,
  Signup,
  CreatePost,
  EditPost,
  NotFoundPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post/:profile-id/create-post" element={<CreatePost />} />
        <Route path="/post/:profile-id/edit-post" element={<EditPost />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
