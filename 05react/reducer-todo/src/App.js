import { useReducer, useRef } from 'react';
import './App.css';
import Counter from './components/Counter';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
//초기 상태값
const initialState = {
  inputs:{
    username: '',
    email: ''
  },
  users : [
    {
      id:1,
      username: 'green',
      email: 'green@naver.com',
      active: false
    },
    {
      id:2,
      username: 'blue',
      email: 'blue@naver.com',
      active: false
    },
    {
      id:3,
      username: 'red',
      email: 'red@naver.com',
      active: false
    }
  ]
}
//reducer 함수
function reducer(state, action){
  switch(action.type){
    case 'INPUTCHANGE':
      return{
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      }
    case 'CREATEUSER':
      return{
        inputs: initialState.inputs,
        users: [
          ...state.users,
          action.user
        ]
      }
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;
  const {username, email} = state.inputs;
  //1.인풋의 값이 변경되면 inputs의 값을 변경
  const onChange = (e) => {
    const {name, value} = e.target;
    dispatch({
      type:'INPUTCHANGE',
      name: name,
      value: value
    });
  }
  //2.등록버튼 클릭시 users 배열에 항목 추가
  //id번호
  const nextId = useRef(4);
  const onCreate = () => {
    dispatch({
      type:'CREATEUSER',
      user:{
        id: nextId.current,
        username: username,
        email: email,
        active: false
      }
    })
    //nextId값을 1씩 더함
    nextId.current += 1;
  }
  return (
    <div className="App">
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
