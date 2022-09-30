import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { SandboxApi } from "./AxiosService.js"

class PostsService {

  async getPosts() {
    const res = await SandboxApi.get('api/posts')
    console.log(res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
  }
  
  async getPostsByCreatorId(creatorId){
  AppState.posts = []
  const res = await SandboxApi.get('api/posts', {
    params: {
      creatorId
    }
  })
  AppState.posts = res.data.map(p => new Post(p))
  }

  async createPost(formData) {
    const res = await SandboxApi.post('api/posts', formData)
    AppState.posts.push(new Post(res.data))
  }
}

export const postsService = new PostsService()