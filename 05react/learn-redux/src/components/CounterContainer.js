import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer(props) {
    //number, diff
    //useSelector(state=>state)
    const {number, diff} = useSelector(state=> ({number: state.counter.number, diff: state.counter.diff}));
    //useDispatch()는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해줌
    const dispatch = useDispatch();
    //각 액션을 디스패치하는 함수
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));
    return (
        <div>
            
        </div>
    );
}

export default CounterContainer;