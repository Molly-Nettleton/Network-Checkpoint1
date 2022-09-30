import { Account } from "./Account.js"

export class Post{

  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.creator = new Account(data.creator)
    this.createdAt = data.createdAt
    this.likeIds = data.likeIds
    this.likes = data.likes
  }
}