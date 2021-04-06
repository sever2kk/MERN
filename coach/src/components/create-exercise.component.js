import React, { Component }  from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';


export default class CreateExercise extends Component {

    constructor(props){
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        this.setState({
        users: ['test_user', 'test_user2', 'test_user3','test_user4'],
        username: 'test_user'
       }) 
    }
    onChangeUserName(event) {
        this.setState({
            username: event.target.value
        });
    }
    onChangeDescription(event) {
        this.setState({
            description: event.target.value
        });
    }
    onChangeDuration(event) {
        this.setState({
            duration: event.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }
    onSubmit(event) {
        event.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };
        console.log(exercise);
        window.location = '/';
    }

    render(){
        return ( 
        <div className="container">
            <h4>Создание тренеровки</h4>
            <hr/>
            <form onSubmit={this.onSubmit} className="my-align-left">
                <div className="form-group">
                    <label>Username:</label>
                    <select
                         ref="userInput" required
                         className="form-control"
                         value={this.state.username}
                         onChange={this.onChangeUserName}
                    >
                        {
                        this.state.users.map( function(user) {
                          return(
                          <option key={user} value={user}>
                              {user}
                          </option>
                          );
                        })
                        }
                    </select>
                </div>
                <div className= "form-group">
                    <label>Description:</label>
                    <input 
                        type="text" required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                    />
                </div>
                <div className= "form-group">
                    <label>Duration (min):</label>
                    <input 
                        type="text" required
                        className="form-control"
                        value={this.state.duration}
                        onChange={this.onChangeDuration}
                    />
                </div>
                <div className= "form-group">
                    <label>Date:</label>
                    <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                    />
                </div>
                <div className= "form-group">
                    <input 
                        type="sumbit"
                        className="btn btn-primary"
                        value="Добавить тренеровку"
                        onChange="this.onChangeDescription"
                    />
                </div>    

            </form>
        </div>
    )
    }
}
