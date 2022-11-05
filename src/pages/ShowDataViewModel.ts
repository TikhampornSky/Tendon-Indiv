// import {useEffect, useState} from "react";
import Post from "../interfaces/Post";
import { makeAutoObservable } from "mobx"
import PostService from "../services/PostService";

export interface ShowDataIViewModel {
    getPostsDataShow: () => Post[]
    getViewPosts: () => Post[]
}

class ShowDataViewModel{               //การเขียนจะคล้ายๆกับตอนเขียนคลาสของ Service
    private postService: PostService 
    private posts: Post[]

    constructor(postService:PostService) {
        makeAutoObservable(this)
        
        this.postService = postService;
        this.posts = [];
    }

    ShowDataViewModelFunction = (() => {     
        this.getPostsDataShow()
        return this.posts
    })

    async getPostsDataShow() {
        const tmpPost =  await this.postService.getPosts()
        this.posts = tmpPost
        return this.posts
    }

    public getViewPosts() {
        return this.posts
    }

    public setViewPosts(posts: Post[]) {
        this.posts = posts
    }

}

// class ShowDataClass {                           //จะถูกลบทิ้งไป
//     postService = useContext(postServiceContext)                 //<---------------
//     // state: posts = {
//     //     posts: [{id: 0, userId: 0, title: '', body: ''}]
//     // }
    
//     constructor() {
//         makeAutoObservable(this, {
//             ShowDataViewModel: action
//         })
//     }
    
//     ShowDataViewModel = (():ShowDataIViewModel => {     //ย้ายขึ้นมาเป็นอีกคลาส ที่เขียนอยู่ข้างบน
//         const [posts, setPosts] = useState<Post[]>([{id: 0, userId: 0, title: '', body: ''}])        
//         useEffect(() => {                                                                                       //use Effect จะถูกใช้เมื่อการ Render Component
//             test()
//         }, [])
    
//         const test = async () => {
//             const posts = await this.postService.getPosts()
//             setPosts(posts)
//             posts.forEach(post=> {
//                 console.log(post.title)
//             });
//         }
    
//         const submit = () => {}
    
//         return { posts, submit }
//     })
// }

// export default ShowDataClass

export default ShowDataViewModel