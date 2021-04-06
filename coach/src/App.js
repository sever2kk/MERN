import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

  export default class  App extends Component {
    render() {
   return (
    <div className="App">
      <Router>
      <Navbar/>
      <h2>Система управления спортивным тренеровками</h2>
      <Route path="/" exact component={ExercisesList}/>
      <Route path="/edit/:id" exact component={EditExercise}/>
      <Route path="/create" exact component={CreateExercise}/>
      <Route path="/user" exact component={CreateUser}/>
      </Router>
  
    </div>
    );
 }
}

