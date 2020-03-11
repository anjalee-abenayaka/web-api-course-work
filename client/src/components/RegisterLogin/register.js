import React, { Component } from 'react'

export class Register extends Component {

    state = {
        name: "",
        lastname: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: []
    };

    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return (
                <div className="container">
                    <h3> SignUp</h3>
                    <div className="row">
                        <form className="col s12">
                        <div className="row">
                         <div className="input-field col s6">
                            <input name="name"
                                 value={this.state.name}
                                 onChange={e => this.handleChange(e)}
                                 id="name"
                                 type="text"
                                 className="validate"
                            />
                            <label className="active" htmlFor="email">First Name</label>
                            <span
                                 className="helper-text"
                                 data-error="type a right email"
                                 data-success="right" 
                            />
                         </div>
                        </div>
                            <div className="row">
                               <div className="input-field col s6">
                                  <input name="lastname"
                                   value={this.state.lastname}
                                   onChange={e => this.handleChange(e)}
                                   id="lastname"
                                   type="text"
                                   className="validate"
                            />
                            <label className="active" htmlFor="email">Last Name</label>
                            <span
                                 className="helper-text"
                                  data-error="wrong"
                                  data-success="right" 
                            />   
                      </div>
                            </div>
                <div className="row">
                     <div className="input-field col s6">
                        <input name="email"
                             value={this.state.email}
                             onChange={e => this.handleChange(e)}
                             id="email"
                             type="email"
                             className="validate"
                        />
                        <label className="active" htmlFor="email">Email</label>
                           <span
                              className="helper-text"
                              data-error="type a right email"
                              data-success="right" 
                        />
                     </div>
                 </div>
                        <div className="row">
                           <div className="input-field col s6">
                              <input name="password"
                                  value={this.state.password}
                                   onChange={e => this.handleChange(e)}
                                   id="password"
                                   type="password"
                                   className="validate"
                        />
                        <label className="active" htmlFor="email">Password</label>
                        <span
                              className="helper-text"
                              data-error="wrong"
                              data-success="right" 
                        />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                              <input name="passwordConfirmation"
                                 value={this.state.passwordConfirmation}
                                  onChange={e => this.handleChange(e)}
                                  id="passwordConfirmation"
                                  type="password"
                                  className="validate"
                        />
                        <label className="active" htmlFor="passwordConfirmation">Confirm Password</label>
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
                                       onClick={this.submitForm}> Create an account
                                       </button>
                                
                            </div>
    
                            </div>  
                        </form>
                    </div>
                
                </div>
        )
    }
}

export default Register
