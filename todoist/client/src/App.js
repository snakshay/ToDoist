import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import About from './Components/About';
import Signin from './Components/Signin';
import Login from './Components/Login';
import Home from './Components/Home';
import { useSelector } from 'react-redux';
import Dashboard from './Components/Dashboard';
import PageNotFound from './Components/PageNotFound';
import UserNotLogin from './Components/UserNotLogin';
import { useDispatch } from 'react-redux';
import { logIn, setDoing, setDone, setToDo } from './Actions';
import axios from 'axios';
import LogOut from './Components/LogOut';


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem('user') && !localStorage.getItem('password')) {
      // console.log('no user')
    }
    else {
      let userName = localStorage.getItem('user');
      let password = localStorage.getItem('password');
      let body = {
        "userName": userName,
        "passwordHash": password
      }
      console.log('Welcome ' + userName);
      let apiResponse = axios.post('https://todolistserver-snakshay.herokuapp.com/login', body)
        .then((response) => {
          // console.log('in response' + response)
          dispatch(logIn(response.data.userName));
          dispatch(setToDo(Object.values(response.data.todo)));
          dispatch(setDoing(Object.values(response.data.doing)));
          dispatch(setDone(Object.values(response.data.done)));
        })
        .catch((error) => {
          // console.log('Error occurred');
          apiResponse = error.response;
        })
        .finally(() => {
          // console.log('api response' + apiResponse);
          if (apiResponse !== undefined) {
            if (apiResponse.data !== undefined) {
              // console.log(apiResponse.data)

            }
          }
          else {

          }
        });
    }


  }, [dispatch]);
  const User = useSelector((state) => state.User)
  return (
    <>
      <BrowserRouter>
        <Switch className='app'>
          {User.length === 0 ?
            <>
              <Switch>
                <Route exact path='/SignIn'><Navigation /><Signin /></Route>
                <Route exact path='/LogIn'><Navigation /><Login /></Route>
                <Route exact path='/About'><Navigation /><About /></Route>
                <Route exact path='/Home'><Navigation /><Home></Home></Route>
                <Route exact path='/'><Navigation /><Home></Home></Route>
                <Route exact path='/Dashboard'><UserNotLogin /></Route>
                <Route path='/'><PageNotFound /></Route>
              </Switch>
            </>
            :
            <>
              <Switch>
                <Route exact path='/Dashboard'><Navigation /><Dashboard /></Route>
                <Route exact path='/About'><Navigation /><About /></Route>
                <Route exact path='/Home'><Navigation /><Home></Home></Route>
                <Route exact path='/'><Navigation /><Home></Home></Route>
                <Route path='/LogOut'><LogOut /></Route>
                <Route path='/'><PageNotFound /></Route>
              </Switch>
            </>
          }
        </Switch>
      </BrowserRouter>
    </>
  );

}

