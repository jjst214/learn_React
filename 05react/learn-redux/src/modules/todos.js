//액션타입, 액션생성함수, 리듀서
//1.액션타입
//할 일 추가, 할 일 삭제, 할 일 값변경

const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

//2.액션생성함수
let nextId = 1; //todo데이터에서 사용할 고유 ID
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        text: text,
        id: nextId++,
        isDone: false
    }
});
export const deleteTodo = id => ({
    type: DELETE_TODO,
    id: id
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id: id
});

//초기상태선언
const initialState = [
    {text: "aa", id: 1, isDone: false}
];

//3.리듀서
export default function todos(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                action.todo
            ];
        case DELETE_TODO:
            return state.filter(todo=> todo.id !== action.id);
        case TOGGLE_TODO:
            //배열요소의 todo가 가지고있는 id와 액션객체가 가진 id가 일치하면 isDone(true/false) 값을 반전
            //일치하지 않으면 값 그대로
            return state.map(todo=> todo.id === action.id ? {...todo, isDone: !todo.isDone} : todo);
        default:
            return state;
    }
}