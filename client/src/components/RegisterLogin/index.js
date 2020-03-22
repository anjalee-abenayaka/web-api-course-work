/*import React, { Component } from 'react'
import  { connect } from 'react-redux'
//import { response } from 'express';
import { loginUser } from '../../actions/user_actions'
import { Link } from 'react-router-dom';

export  class RegisterLogin extends Component {
    state = {
        email: "",
        password: "",
        errors: []
    };

    displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error}</p>)

    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value })
    }
submitForm = event => {
    event.preventDefault();
    let dataToSubmit = {
        email: this.state.email,
        password: this.state.password
    };
    if (this.isFormvalid(this.state)){
        this.setState({ errors: [] })
        this.props.dispatch(loginUser(dataToSubmit))
        .then(response => {
            if (response.payload.loginSuccess){
                this.props.history.push('/')
            }else {
                this.setState({
                    errors: this.state.errors.concat(
                        "Failed to Log in, please check your Email and Password"
                    )
                })
            }
        })
    } else {
        this.setState({
            errors: this.state.errors.concat('Email and Password required')
        })
    }
}

isFormvalid = ({ email, password }) => email && password;

    render() {
        return (
            <div className="container">
                <h2> Login</h2>
                <div className="row">
                    <form className="col s6">
                    <div className="row">
                     <div className="input-field col s12">
                        <input name="email"
                             value={this.state.email}
                             onChange={e => this.handleChange(e)}
                             id="email"
                             type="email"
                             className="validate"
                        />
                        <label htmlFor="email"> Email </label>
                        <span
                        className="helper-text"
                        data-error="type a right email"
                        data-success="right" 
                        />
                     </div>
                    </div>
                        <div className="row">
                         <div className="input-field col s12">
                        <input name="password"
                         value={this.state.password}
                         onChange={e => this.handleChange(e)}
                          id="password"
                          type="password"
                          className="validate"
                        />
                        <label htmlFor="email"> Password </label>
                        <span
                        className="helper-text"
                        data-error="wrong"
                        data-success="right" 
                        />

                            </div>
                        </div>

                       {this.state.errors.length > 0 && (
                           <div>
                               {this.displayErrors(this.state.errors)}
                           </div>
                       )}

                        <div className="row">
                            <div className="col s12">
                                <button
                                   className="btn waves-effect red lighten-2"
                                   type="submit"
                                   name="action"
                                   onClick={this.submitForm}> Login 
                                   </button>&nbsp;&nbsp;
                            
                                <Link to="/register">
                                <button
                                   className="btn waves-effect red lighten-2"
                                   type="submit"
                                   name="action"
                                   onClick={this.submitForm}> SignUp </button>
                                   </Link>
                            
                        </div>

                        </div>  
                    </form>
                </div>
            
            </div>
        )
    }
}
function mapStateToProps( state ){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(RegisterLogin);*/
