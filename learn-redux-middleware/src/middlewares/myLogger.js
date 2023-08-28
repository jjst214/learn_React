// function myLogger(store){
//     return function(next){
//         return function(action){
//             //하고싶은 작업
//         }
//     }
// }
//위 함수들을 아래 화살표 함수처럼 바꾼게 미들웨어
const myLogger = store => next => action => {
    //액션을 출력
    console.log(action);
    //다음 미들웨어 또는 리듀서에게 액션을 전달
    const result = next(action);
    //반환하는 값은 dispatch(action) 결과물이 됩니다.
    console.log(store.getState());
    return result;
}
export default myLogger;