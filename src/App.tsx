import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  MainPage,
  Login,
  Signup,
  CreatePost,
  EditPost,
  NotFoundPage,
  ForgotPassword
} from './pages'
import Profile from './pages/Profile'
import ViewPost from './pages/posts/ViewPost'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/post/:profile-id/create-post' element={<CreatePost />} />
        <Route path='/post/:profile-id/edit-post' element={<EditPost />} />
        <Route path='/post/:profile-id/view-post' element={<ViewPost />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
