import { combineReducers } from "redux";
import { UsersReducer } from "../../views/Users/Redux/reducer";

const rootReducer = combineReducers({
    Users: UsersReducer
});

export default rootReducer;
