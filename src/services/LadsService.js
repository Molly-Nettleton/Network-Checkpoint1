import { AppState } from "../AppState.js"
import { Lad } from "../models/Lad.js"
import { SandboxApi } from "./AxiosService.js"

class LadsService{

  async getLads() {
    const res = await SandboxApi.get('api/ads')
    console.log(res.data)
    AppState.lads = res.data.map(l => new Lad(l))
}
}

export const ladsService = new LadsService()