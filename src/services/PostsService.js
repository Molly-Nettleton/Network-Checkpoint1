import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { PostPageApi, SandboxApi } from "./AxiosService.js"

class PostsService {

  async getPosts(pageUrl = '') {
    AppState.nextPage = {}
  AppState.previousPage = {}
    const res = await PostPageApi.get(pageUrl)
    console.log(res.data);
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
  }

  async createPost(formData) {
    const res = await SandboxApi.post('api/posts', formData)
    AppState.posts.push(new Post(res.data))
  }

  async getPostsByCreatorId(creatorId) {
    AppState.posts = []
    const res = await SandboxApi.get('api/posts',
      {
        params: { creatorId }
      })
    
    AppState.posts = res.data.posts.map(p => new Post(p))
     AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
  }

  async getPostsBySearchTerm(term, page = 1) {
    const res = await SandboxApi.get('api/posts', {
      params: {
        query: term,
        page
      }
    })
    AppState.term = term
    // AppState.page = page
    // AppState.lastPage = res.data.total_pages
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async deletePost(id) {
    const res = await SandboxApi.delete(`api/posts/${id}`)
    AppState.posts = AppState.posts.filter(p => p.id != id)
  }

  async likePost(id) {
    const res = await SandboxApi.post(`api/posts/${id}/like`)
    let post = AppState.posts.findIndex(p => p.id == id)
    AppState.posts.splice(post,1, new Post(res.data))
  }
}

export const postsService = new PostsService()