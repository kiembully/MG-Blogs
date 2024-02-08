export interface SignUpCredentials {
  fullname: string
  username: string
  email: string
  password: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface User {
  id: number
  username: string
  name: string
  created_at: string //this is date and time
  updated_at: string //this is date and time
  email: string
  jti: string
}

export interface Post {
  title: string
  body: string
  tags: string[]
  votes: VoteCount
  image?: string | Blob
  commentsCount: number
  createdAt?: string
  id?: string
  user?: {
    id: number
    name: string
  }
  is_draft: boolean
}

export interface Tags {
  tagID: string
  tagName: string
}

export interface Comment {
  id?: string
  sender_name?: string
  message: string
  createdAt?: string //this is date and time
  updatedAt?: string //this is date and time
  votes?: VoteCount
  replies?: {
    data: [
      {
        attributes: Comment
      }
    ]
  }
  user?: {
    id: number
    name: string
  }
}

export interface VoteCount {
  upvotes: string[] //array of user id's that has up vote
  downvotes: string[] //array of user id's that has down vote
  //will use hashmap to check if a user has upvoted or downvoted the post or comment to render correct icon. It will have O(1) notation.
}

export interface ApiResponse {
  message: string
  response?: {
    data: {
      status: {
        errors: boolean
        message: string
      }
    }
  }
}

export interface PostData {
  id: number
  title: string
  body: string
  tags: string[]
  commentsCount: number
  votes: { upvotes: string[]; downvotes: string[] }
  user: { id: number; name: string }
  createdAt: string
}
