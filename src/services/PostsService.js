import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { SandboxApi } from "./AxiosService.js"

class PostsService {

  async getPosts() {
    const res = await SandboxApi.get('api/posts ')
    console.log(res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

}

export const postsService = new PostsService()