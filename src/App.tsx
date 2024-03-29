import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage, Login, Signup, CreatePost, EditPost, NotFoundPage, ForgotPassword } from './pages'
import Profile from './pages/Profile'
import ViewPost from './pages/posts/ViewPost'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/t/:tag-id' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/post/create-post' element={<CreatePost />} />
        <Route path='/post/:post_id/view-post' element={<ViewPost />} />
        <Route path='/post/:post-id/edit-post' element={<EditPost />} />
        <Route path='/profile/:user_id' element={<Profile />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
