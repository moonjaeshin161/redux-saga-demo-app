export const types = {
    GET_POSTS: 'GET_POSTS',
    GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
    GET_POSTS_ERROR: 'GET_POSTS_ERROR',
}

export function getPosts() {
    return {
        type: types.GET_POSTS
    }
}

export function getPostsSuccess(posts) {
    return {
        type: types.GET_POSTS_SUCCESS,
        payload: posts
    }
}

export function getPostsError(error) {
    return {
        type: types.GET_POSTS,
        payload: error
    }
}