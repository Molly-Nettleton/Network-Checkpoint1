import Axios from 'axios'
import { baseURL } from '../env'
export const SandboxApi = Axios.create({
  baseURL,
  timeout: 8000
})

export const PostPageApi = Axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/posts",
  timeout: 3000
})