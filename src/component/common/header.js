import React from 'react';
import '../../assets/css/header.css';

export default class Header extends React.Component {
    render(props){
        return(
            <header className="app-header">
                <div className="container">
                    <div className="Logo">{this.props.text}</div>
                    <nav className="app-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}