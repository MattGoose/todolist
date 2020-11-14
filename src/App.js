import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList'
import TodoContextProvider from './contexts/TodoContext';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  //wraps components in Provider
  //Provider passes down reducer functions and state to children
  return (
    // <BrowserRouter>
      <div className="App">
        <TodoContextProvider>
          {/* <Redirect to='/' /> */}
          {/* <Switch>
            <Route exact path='/'> */}
              <Navbar />
              <AddTodo />
              <TodoList />
            {/* </Route>
          </Switch> */}
        </TodoContextProvider>
      </div>
    // </BrowserRouter>
  );
}

export default App;
