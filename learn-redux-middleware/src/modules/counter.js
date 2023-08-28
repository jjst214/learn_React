//액션타입, 액션생성함수, 리듀서
//액션타입
const INCRESE = "INCREASE";
const DECRESE = "DECREASE";

//액션생성함수
export const increase = () => ({type: INCRESE});
export const decrease = () => ({type: DECRESE});

//redux-thunk 함수생성 (Redux에서 비동기 작업처리할때 사용하는 미들웨어)
export const increaseAsync = () => dispatch => {
    setTimeout(()=>dispatch(increase()),1000);
}

export const decreaseAsync = () => dispatch => {
    setTimeout(()=>dispatch(decrease()),1000);
}
//초기값
const initialState = 0;

//리듀서
export default function counter(state=initialState, action){
    switch(action.type){
        case INCRESE:
            return state + 1;
        case DECRESE:
            return state - 1;
        default:
            return state;
    }
}