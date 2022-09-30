import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { PostPageApi, SandboxApi } from "./AxiosService.js"

class PostsService {

  async getPosts(pageUrl = '') {
    const res = await PostPageApi.get(pageUrl)
    console.log(res.data);
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.newer
    AppState.previousPage = res.data.older
  }

  async createPost(formData) {
    const res = await SandboxApi.post('api/posts', formData)
    AppState.posts.push(new Post(res.data))
  }
}

export const postsService = new PostsService()