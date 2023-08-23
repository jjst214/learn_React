//액션타입, 액션생성함수, 리듀서
//1.액션타입
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//2.액션생성함수
//function setDiff(diff){ return {type:SET_DIFF, diff: diff} } 를 아래처럼 쓴것
export const setDiff = diff => ({type:SET_DIFF, diff: diff});
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

//초기상태
const initialState = {
    number:0,
    diff:1
}

//3.리듀서
export default function counter(state=initialState, action){
    switch(action.type){
        case SET_DIFF:
            return{
                ...state,
                diff: action.diff
            };
        case INCREASE:
            return{
                ...state,
                number: state.number + state.diff
            };
        case DECREASE:
            return{
                ...state,
                number: state.number - state.diff
            };
        default:
            return state;
    }
}