import { createContext } from "react";
import GetService from "./GetService";
import PostService from './PostService'

//Interface
interface ContainerI {
    getService: React.Context<GetService>
    postService: React.Context<PostService>
    //มี Service อื่นๆด้วยอยู่ในนี้เลย
}

const getservice = new GetService()
const getServiceContext = createContext<GetService>(getservice)

const postservice = new PostService()
const postServiceContext = createContext<PostService>(postservice)

export const containerContext: ContainerI = {
    getService: getServiceContext,
    postService: postServiceContext
}