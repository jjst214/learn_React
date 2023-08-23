import { useRef, useState } from 'react';
import './App.css';
import List from './Components/List';
import CreateList from './Components/CreateList';

function App() {
  const [lists, setLists] = useState([]);
  const [input, setInput] = useState({
    list:""
  });
  const {list} = input;
  const nextId = useRef(1);
  const onChange = e =>{
    const {name, value} = e.target;
    setInput({
      ...input,
      [name]: value
    })
  }
  const onCreate = () =>{
    setLists([
      ...lists,
      {id:nextId.current, list:list, active:false}
    ])
    setInput({
      list:""
    })
    nextId.current += 1;
  }
  const onRemove = (id) =>{
    setLists(lists.filter(list=>list.id !== id));
  }
  const onToggle = (id) =>{
    setLists(lists.map(list => list.id === id ? {...list, active: !list.active} : list));
  }
  return (
    <div className="App">
      <CreateList onChange={onChange} onCreate={onCreate} list={list}/>
      <List lists={lists} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );
}

export default App;
