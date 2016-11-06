import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/appActions";
import { Link } from "react-router";
import {LOGO_IMAGE_PATH} from "../../backend/config/constants";
import sweetalert from "sweetalert";
import "../common/styles/sweetalert.css";
import cookie from "react-cookie";

class Header extends Component {

    constructor(props) {
        super(props);
        this.loggedRender = this.loggedRender.bind(this)
        this.notLoggedRender = this.notLoggedRender.bind(this);
        this.logout = this.logout.bind(this);
        this.closeOpenSignInPopup = this.closeOpenSignInPopup.bind(this);
        this.closeOpenRegistrationPopup = this.closeOpenRegistrationPopup.bind(this);
        this.signIn = this.signIn.bind(this);
        this.registerNewUser = this.registerNewUser.bind(this);
    }
    
    render() {

        const username = cookie.load("current-username");
        
        if (username === undefined || username === null)
            return this.notLoggedRender();

        return this.loggedRender();
 
    }

    loggedRender() {

        const username = cookie.load("current-username");

        return (
            <header>
               <div className="header-wrapper">
                   <Link to="/">
                     <img src={LOGO_IMAGE_PATH} className="logo"/>
                   </Link>
                   <div className="user-menu">
                   <ul>
                       <li><a href="#">{username}</a>
                           <ul>
                                <li onClick={this.logout}><a href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                    <span>Hello, </span>
                    </div>
                </div>
            </header>
        );
    }

    notLoggedRender() {

        const {wrongPasswordEntered} = this.props.stateFromReducer;

        if (wrongPasswordEntered) {

            sweetalert({
                 title: "Error!",
                 title: "You have entered an incorrect password",
                 type: "error"
            });

          this.props.wrongPasswordMessageWasDispalyed();
        }

        return (
            <header>
               <div className="header-wrapper">
                  <Link to="/">
                     <img src={LOGO_IMAGE_PATH} className="logo"/>
                   </Link>
                   <button className="registration" onClick={this.closeOpenRegistrationPopup}>Registration</button>
                   <button className="sign-in" onClick={this.closeOpenSignInPopup}>Sign In</button>                 
                   <div id="registration-popup" className="popup">
                       <h4>Registration</h4>
                       <form id="registration-form">
                           <div className="input-row">
                               <label label htmlFor="reg-username">Username:</label>
                               <input pattern=".{5,}" title="5 characters minimum" type="text" id="reg-username" name="reg-username" placeholder="your username" required/>
                           </div>
                           <div className="input-row">
                               <label label htmlFor="reg-password">Password:</label>
                               <input pattern=".{8,}" title="8 characters minimum" type="password" id="reg-password" name="reg-password" placeholder="Type your password" required/>
                           </div>
                           <button onClick={this.registerNewUser}>Register</button>
                       </form>
                   </div>
                    <div id="sign-in-popup" className="popup">
                       <h4>Sign In</h4>
                       <form id="sign-in-form">
                           <div className="input-row">
                               <label label htmlFor="sign-in-username">Username:</label>
                               <input pattern=".{5,}" title="5 characters minimum" type="text" id="sign-in-username" name="sign-in-username" placeholder="your username" required/>
                           </div>
                           <div className="input-row">
                               <label label htmlFor="sign-in-password">Password:</label>
                               <input pattern=".{8,}" title="8 characters minimum" type="password" id="sign-in-password" name="sign-in-password" placeholder="Type your password" required/>
                           </div>
                           <button onClick={this.signIn}>Sign In</button>
                       </form>
                   </div>
               </div>
            </header>
        );
    }

    logout() {
      this.props.logout();
    }

    resetPopupsInputs() {
    	document.querySelector("#reg-username").value = "";
      document.querySelector("#reg-password").value = "";
      document.querySelector("#sign-in-username").value = "";
      document.querySelector("#sign-in-username").value = "";
    }

    componentWillMount() {
      this.props.getAllUsernames();
    }

    closeOpenSignInPopup() {

    	this.resetPopupsInputs();

    	let signInPopup = document.querySelector("#sign-in-popup");
    	let registrationPopup = document.querySelector("#registration-popup");

    	if (signInPopup.style.display === "") {
    		signInPopup.style.display = "block";
    		registrationPopup.style.display = "";
    	}
    	else 
    		signInPopup.style.display = "";
    }
        
    closeOpenRegistrationPopup() {

    	this.resetPopupsInputs();

    	let signInPopup = document.querySelector("#sign-in-popup");
    	let registrationPopup = document.querySelector("#registration-popup");

    	if (registrationPopup.style.display === "") {
    		registrationPopup.style.display = "block";
    		signInPopup.style.display = "";
    	}
    	else 
    		registrationPopup.style.display = "";

    }

    signIn(event) {
    
        let form = document.querySelector("#sign-in-form");
    	
    	if (!form.checkValidity())
    		return;
    	
    	event.preventDefault();

        let username = document.querySelector("#sign-in-username").value;
        let password = document.querySelector("#sign-in-password").value;

        let isFound = false;

        const {usernames} = this.props.stateFromReducer;

        for (let i = 0; i < usernames.length; i++)
            if (usernames[i].username === username)
                isFound = true;

        if (!isFound) {
            sweetalert({
                 title: "Error!",
                 title: "The user " + username + " is not registered",
                 type: "error"
            });
            return;
        }

        this.props.login({username: username, password: password});

        if (!this.props.stateFromReducer.logged) {
            return;
        }

        document.querySelector("#sign-in-popup").style.display = "";

    }

    registerNewUser(event) {
    	
    	let form = document.querySelector("#registration-form");
    	
    	if (!form.checkValidity())
    		return;
    	
    	event.preventDefault();

    	let username = document.querySelector("#reg-username").value;
    	let password = document.querySelector("#reg-password").value;

    	let isFound = false;

    	const {usernames} = this.props.stateFromReducer;

    	for (let i = 0; i < usernames.length; i++)
    		if (usernames[i].username === username)
    			isFound = true;

    	if (isFound) {
        sweetalert({
             title: "Error!",
             title: "The user with " + username + " is already registered",
             type: "error"
        });
    		return;
    	}

    	this.props.createNewUser({username: username, password: password});

    	document.querySelector("#registration-popup").style.display = "";
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const HeaderConnected = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderConnected
