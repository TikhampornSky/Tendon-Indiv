//import {useState, useEffect, createContext} from "react"
import axios from 'axios'
import Post from '../[mock]Interface/Post'
import { makeAutoObservable } from "mobx"
import { injectable } from 'inversify'

@injectable()
class GetService {
    title_id = 0
    response: Post[]
    constructor() {
        makeAutoObservable(this)
        this.response = []
    }


    async getPosts(){
        const tmp_response =  await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        this.response = tmp_response.data.slice(0,10)
        return this.response
    }
}

export default GetService