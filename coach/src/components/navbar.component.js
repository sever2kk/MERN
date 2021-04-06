import React  from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
            <Link to="/" className="navbar-brand">CoachAssistant</Link>
            <div className="navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Тренеровки</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Расписание</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user" className="nav-link">Пользователи</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}


export default Navbar;