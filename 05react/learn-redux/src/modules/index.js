import counter from "./counter";
import todos from "./todos";
import { combineReducers } from "redux";

//리덕스 모듈 하나로 합치기 combineReducers()
const rootReducer = combineReducers({
    counter,
    todos: todos
});

export default rootReducer;