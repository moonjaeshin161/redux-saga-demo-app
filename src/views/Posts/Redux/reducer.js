import { types } from "./action"

const initialState = {
    posts: [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    ]
}

export const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POSTS_SUCCESS:
            let newPosts = action.payload
            return {
                ...state,
                posts: newPosts
            }
        default: return state;
    }
}