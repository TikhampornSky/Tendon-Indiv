import { createContext } from "react";
import GetService from "./GetService";
import PostService from './PostService'
import UpdateService from './UpdateService'
import DeleteService from './DeleteService'

//Interface
interface ContainerI {                                  //มี Service อื่นๆด้วยอยู่ในนี้เลย
    getService: React.Context<GetService>
    postService: React.Context<PostService>
    updateService: React.Context<UpdateService>
    deleteService: React.Context<DeleteService>
}

const getservice = new GetService()
const getServiceContext = createContext<GetService>(getservice)

const postservice = new PostService()
const postServiceContext = createContext<PostService>(postservice)

const updateservice = new UpdateService()
const updateServiceContext = createContext<UpdateService>(updateservice)

const deleteservice = new DeleteService()
const deleteServiceContext = createContext<DeleteService>(deleteservice)

export const containerContext: ContainerI = {
    getService: getServiceContext,
    postService: postServiceContext,
    updateService: updateServiceContext,
    deleteService: deleteServiceContext
}