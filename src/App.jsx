import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewTodo, deleteDoto, fetchTodos } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';



function App() {
  
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.todos)
  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addNewTodo( text ));
      setText('');
    }
  }
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className='App'>
      {status === 'loading' ? <>Loading...</> : <>
        <NewTodoForm
          value={text}
          updateText={setText}
          handleAction={handleAction}
        />
        <TodoList /></>}
    </div>
  );
}

export default App;
