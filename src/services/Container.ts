import { createContext } from "react";
import PostService from "./PostService";

//Interface
interface ContainerI {
    postService: React.Context<PostService>;
    //มี Service อื่นๆด้วยอยู่ในนี้เลย
}
// const authService = new AuthService()
// const userService = new UserService(authService)        // //Inversify will be... ช่วยให้ไม่ต้องประกาศ Dependency แบบนี้เยอะๆ
const postservice = new PostService()
const postServiceContext = createContext<PostService>(postservice)
export const containerContext: ContainerI = {
    postService: postServiceContext
}