import React, { Component } from 'react'
import bcrypt from 'bcryptjs'


class Login extends Component {
constructor(props){
    super(props);
    state={
        Email:"",
        Password:""
    }
}
 

login(event){
    console.log("hi");
}
render(){
    return (
        <>
            <div>
                Email:<input className="email login" type="email" required></input><br />
                Password:<input className="password login" type="password" required></input><br />
                <input type="button" value="Sign Up" id="signup" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<input type="button" value="Login" id="login" onClick={this.login} />
            </div>
        </>
    );
}
}

export default Login;