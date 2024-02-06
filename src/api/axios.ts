import axios from 'axios'
import { LoginCredentials, SignUpCredentials } from '../helpers'

const instance = axios.create({
  baseURL: 'https://mg-blogs-backend.onrender.com'
})

export const signup = async (token: string, data: SignUpCredentials) => {
  try {
    //implement password encryption here
    const encrypted_password = data.password

    const res = await instance({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      url: '/users',
      data: {
        name: data.fullname,
        username: data.username,
        email: data.email,
        encrypted_password
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

export const signin = async (token: string, data: LoginCredentials) => {
  try {
    const res = await instance({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      url: '/users/sign_in',
      data: {
        username: data.username,
        password: data.password
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

export const getAllPosts = async () => {
  try {
    const res = await instance({
      method: 'GET',
      url: '/api/posts'
    })
  } catch (error) {
    console.log(error)
  }
}

export const getPostByID = async (id: string) => {
  try {
    const res = await instance({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      url: `/api/posts/${id}`
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

export const getAllComments = async (post_id: string) => {
  try {
    const res = await instance({
      method: 'GET',
      url: `/api/posts/${post_id}/comments`
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

export const getCommentByID = async (post_id: string, comment_id: string) => {
  try {
    const res = await instance({
      method: 'GET',
      url: `/api/posts/${post_id}/comments/${comment_id}`
    })
    return res
  } catch (error) {
    console.log(error)
  }
}
