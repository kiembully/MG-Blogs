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
  voteCounts: VoteCount
  image?: string | Blob
  comments: Comment[]
  formattedCreatedAt?: string
  id: number
}

export interface Tags {
  tagID: string
  tagName: string
}

export interface Comment {
  creatorID: BigInt
  postID: BigInt
  message: string
  createdAt: string //this is date and time
  updatedAt: string //this is date and time
  voteCounts: VoteCount
  replies: Comment[]
}

export interface VoteCount {
  referenceId: BigInt //id of the post of comment
  upVotes: string[] //array of user id's that has up vote
  downVotes: string[] //array of user id's that has down vote
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
