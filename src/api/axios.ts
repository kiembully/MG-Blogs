import axios from 'axios'
import { LoginCredentials, SignUpCredentials, Post, Comment } from '../helpers'

const instance = axios.create({
  baseURL: 'https://mg-blogs-backend.onrender.com'
})

// const local_token = 'asdsadq2eqw'

export const signup = async (data: SignUpCredentials) => {
  try {
    //implement password encryption here
    const encrypted_password = data.password

    const res = await instance({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      url: '/users',
      data: {
        user: {
          name: data.fullname,
          username: data.username,
          email: data.email,
          password: encrypted_password
        }
      }
    })

    localStorage.setItem('authorization', res.headers.authorization)
    localStorage.setItem('user', JSON.stringify(res.data.status.data))

    return {
      error: false,
      message: res.data.status.message
    }
  } catch (error) {
    console.log(error)
    return {
      error: true,
      message: 'Unable to Sign up'
    }
  }
}

export const signin = async (data: LoginCredentials) => {
  try {
    const res = await instance({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      url: '/users/sign_in',
      data: {
        user: {
          email: data.email,
          password: data.password
        }
      }
    })

    localStorage.setItem('authorization', res.headers.authorization)
    localStorage.setItem('user', JSON.stringify(res.data.status.data))

    return res.data.status
  } catch (error) {
    console.log(error)
    return { code: 404 }
  }
}

export const createPost = async (data: Post) => {
  try {
    const token = localStorage.getItem('authorization')

    if (!token) return { message: 'Unauthorized' }

    const res = await instance({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      url: '/api/posts',
      data: {
        title: data.title,
        body: data.body,
        tags: data.tags,
        comments: data.commentsCount,
        voteCounts: data.voteCounts,
        is_draft: data.is_draft
      }
    })

    return res.status
  } catch (error) {
    return 500
  }
}

export const updatePost = async (data: Post) => {
  try {
    const token = localStorage.getItem('authorization')

    if (!token) return { message: 'Unauthorized' }

    const res = await instance({
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      url: `/api/posts/${data.id}`,
      data: {
        title: data.title,
        body: data.body,
        tags: data.tags,
        comments: data.commentsCount,
        voteCounts: data.voteCounts,
        is_draft: data.is_draft
      }
    })

    return res.status
  } catch (error) {
    return { code: 404 }
  }
}

export const getAllPosts = async () => {
  try {
    const res = await instance({
      method: 'GET',
      url: '/api/posts'
    })

    const data = res.data.data.map((item: any) => item.attributes) || []

    return data
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

    return res.data.data.attributes
  } catch (error) {
    console.log(error)
  }
}

export const getPostsByUserID = async (id: string) => {
  try {
    const res = await instance({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      url: `/api/users/${id}/posts`
    })

    const data = res.data.data.map((item: any) => item.attributes) || []
    return data
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

export const addComment = async (post_id: string, data: Comment) => {
  try {
    const token = localStorage.getItem('authorization')

    if (!token) return { message: 'Unauthorized' }

    const res = await instance({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      url: `/api/posts/${post_id}/comments`,
      data: {
        message: data.message,
        voteCounts: data.voteCounts
      }
    })

    await getCommentsByPost(post_id)

    return res
  } catch (error) {
    console.log(error)
  }
}

export const getCommentsByPost = async (post_id: string) => {
  try {
    const res = await instance({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      url: `/api/posts/${post_id}/comments`
    })
    const data = res.data.data.map((item: any) => item.attributes) || []
    return data
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

export const addReply = async (comment_id: string, data: Comment) => {
  console.log(comment_id)
  console.log(data)
  try {
    // const res = await instance({
    //   method:"POST",
    //   url: ``
    // })
    // return res
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = async (id: string) => {
  try {
    const token = localStorage.getItem('authorization')

    if (!token) return { message: 'Unauthorized' }

    const res = await instance({
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      url: `/api/posts/${id}`
    })

    return res.status
  } catch (error) {
    console.log(error)
  }
}
