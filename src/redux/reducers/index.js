import { combineReducers } from "redux";
import { UsersReducer } from "../../views/Users/Redux/reducer";
import { PostsReducer } from "../../views/Posts/Redux/reducer";

const rootReducer = combineReducers({
    Users: UsersReducer,
    Posts: PostsReducer
});

export default rootReducer;
