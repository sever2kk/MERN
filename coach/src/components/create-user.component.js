import React, { Component } from 'react';


export default class CreateUser extends Component {

    constructor(props){
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
        }
    }

    onChangeUserName(event) {
        this.setState({
            username: event.target.value
        });
    }
    onSubmit(event) {
        event.preventDefault();
        const user = {
            username: this.state.username,
        };
        console.log(user);
        this.setState({
            username: ''
        })
    }

    render(){
    return(
        <div className="container">
            <h4>Создание спортсмена</h4>
            <hr/>
            <form onSubmit={this.onSubmit} className="my-align-left">
                <div className="form-group">
                    <label>Username:</label>
                    <input 
                        type="text" required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUserName}
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


