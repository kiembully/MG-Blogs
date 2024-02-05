export interface SignUpCredentials {
  fullname: string
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
  createdAt: Date
  updatedAt: Date
  email: string
  encryptedPassword: string
  resetPasswordToken: string
  resetPasswordSentAt: Date
  rememberCreatedAt: Date
  profilePicture?: string | Blob
  posts?: Post[]
  comments?: Comment[]
}

export interface Post {
  creatorID: BigInt
  title: string
  body: string
  createdAt: Date
  updatedAt: Date
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
  createdAt: Date
  updatedAt: Date
  voteCounts: VoteCount
  replies: Comment[]
}

export interface VoteCount {
  referenceId: BigInt //id of the post of comment
  upVotes: string[] //array of user id's that has up vote
  downVotes: string[] //array of user id's that has down vote
  //will use hashmap to check if a user has upvoted or downvoted the post or comment to render correct icon. It will have O(1) notation.
}
