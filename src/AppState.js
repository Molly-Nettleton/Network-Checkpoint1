import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Post.js').Post} */
  posts: {},
  
   /** @type {import('./models/Lad.js').Lad} */
  lads: {},

  /** @type {import('./models/Account.js').Account | null} */
  activeProfile: null,

  nextPage: null,
  previousPage: null
})
