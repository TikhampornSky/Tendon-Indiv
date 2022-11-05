interface Post {
    id: number,
    userId: number,
    title: string,
    body: string
}

//interface DataContext extends Array<DataContext>{}
/*
const defaultState = [{
id: 0, 
userId: 0, 
title: '', 
body: ''
}]
*/
//const ThemeContext = createContext<IThemeContext>(GetData);

export default Post