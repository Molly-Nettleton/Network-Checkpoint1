import { Account } from "./Account.js"

export class Post{

  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.creator = new Account(data.creator)
    this.createdAt = new Date
      (data.createdAt).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute:'2-digit'
      })
    this.likeIds = data.likeIds
    this.likes = data.likes
  }
}