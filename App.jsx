import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import TaskList from './components/TaskList';
import PrivateRoute from './components/privateRoute';
import store from './redux/store';
import { Provider } from 'react-redux';
import './App.css';
const App = () => {

  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/tasks" element = {<PrivateRoute><TaskList/></PrivateRoute>}></Route>
        <Route path = '*' element = {<Navigate to = '/login' />}></Route>
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
