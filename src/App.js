import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList'
import TodoContextProvider from './contexts/TodoContext';

function App() {
  //wraps components in Provider
  //Provider passes down reducer functions and state to children
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar />
        <AddTodo />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
