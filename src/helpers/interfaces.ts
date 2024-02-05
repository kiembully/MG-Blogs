export interface SignUpCredentials {
  name: string
  username: string
  email: string
  password: string
}

export interface LoginCredentials {
  username: string
  password: string
}

export interface User {
  username: string
  name: string
  created_at: Date
  updated_at: Date
  email: string
  encrypted_password: string
  reset_password_token: string
  reset_password_sent_at: Date
  remember_created_at: Date
  profilePicture?: string | Blob
  posts?: Post[]
  comments?: Comment[]
}

export interface Post {
  creatorID: BigInt
  title: string
  body: string
  created_at: Date
  updated_at: Date
  tags: Tags[]
  voteCounts: VoteCount
  image?: string | Blob
  comments: Comment[]
}

export interface Tags {
  tagID: string
  tagName: string
}

export interface Comment {
  creatorID: BigInt
  postID: BigInt
  message: string
  created_at: Date
  updated_at: Date
  voteCounts: VoteCount
  replies: Comment[]
}

export interface VoteCount {
  reference_id: BigInt //id of the post of comment
  upVotes: string[] //array of user id's that has up vote
  downVotes: string[] //array of user id's that has down vote
  //will use hashmap to check if a user has upvoted or downvoted the post or comment to render correct icon. It will have O(1) notation.
}
