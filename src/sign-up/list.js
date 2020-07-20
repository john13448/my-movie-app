import React, { Component, Fragment } from 'react';
import { Link }                       from 'react-router-dom';
import '../css/style.css'; 

class SignUp extends Component
{
    constructor()
    {
        super();
        this.state = {
            fields: {},
        }
    }

    // form field handle changes
    handleChange = (e) =>
    {
        let fields            = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
    }

    // on click register form
    submituserRegistrationForm = (e) => 
    {
        e.preventDefault();
        if (this.validateForm()) {
            if (localStorage.getItem("MOVIE_USER_NAME") === null && localStorage.getItem("MOVIE_USER_PASSWORD") === null && localStorage.getItem("MOVIE_USER_EMAIL") === null && localStorage.getItem("MOVIE_USER_PHONE_NO") === null && localStorage.getItem("MOVIE_USER_PROFESSION") === null)  
            {
                this.userStorage();
            }
            alert("User Registered Successfully");
            this.props.history.push("/");
        }
    }

    // set user storage
    userStorage = () => 
    {
        localStorage.setItem('MOVIE_USER_NAME', this.state.fields.name);
        localStorage.setItem('MOVIE_USER_PASSWORD', this.state.fields.password);
        localStorage.setItem('MOVIE_USER_EMAIL', this.state.fields.email);
        localStorage.setItem('MOVIE_USER_PHONE_NO', this.state.fields.phoneNo);
        localStorage.setItem('MOVIE_USER_PROFESSION', this.state.fields.profession);
    }
    
    // validate form 
    validateForm = () => 
    {
        let fields = this.state.fields;
        let formIsValid = true;
  
        if (!fields["name"]) {
          formIsValid = false;
          alert('Enter Name')
        }
        else if (!fields["profession"]) {
            formIsValid = false;
            alert('Enter profession')
        }
        else if (!fields["email"]) {
            formIsValid = false;
            alert('Enter email')
        }
        else if (!fields["phoneNo"]) {
            formIsValid = false;
            alert('Enter phoneNo')
        }
        else if (!fields["password"]) {
            formIsValid = false;
            alert('Enter password')
        }

        return formIsValid;
    }

    render()
    {
        return <Fragment>
             <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                                    <div className="card-body">
                                        <form onSubmit= {this.submituserRegistrationForm} > 
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1" for="inputName">Name</label>
                                                        <input className="form-control py-4" id="inputName" type="text" placeholder="Enter name" name="name" value={this.state.fields.name} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1" for="inputProfession">Profession</label>
                                                        {/* <input className="form-control py-4" id="inputProfession" type="text" placeholder="Enter Profession" name="profession" value={this.state.fields.profession} onChange={this.handleChange} /> */}
                                                        <select value={this.state.selectValue} onChange={this.handleChange} className="form-control" id="inputProfession" name="profession">
                                                            <option value="">Select an Profession</option>
                                                            <option value="REACT_DEVELOPER">React Developer</option>
                                                            <option value="ANGULAR_DEVELOPER">Angular Developer</option>
                                                            <option value="PHP_DEVELOPER">PHP Developer</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1" for="inputEmailAddress">Email</label>
                                                        <input className="form-control py-4" id="inputEmailAddress" type="email" aria-describedby="emailHelp" placeholder="Enter email address" name="email" value={this.state.fields.email} onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1" for="inputPhoneNo">Phone NO</label>
                                                        <input className="form-control py-4" id="inputPhoneNo" type="text" aria-describedby="emailHelp" placeholder="Enter phone Number" name="phoneNo" value={this.state.fields.phoneNo} onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1" for="inputPassword">Password</label>
                                                        <input className="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mt-4 mb-0"><button className="btn btn-primary btn-block">Create Account</button></div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center">
                                        <div className="small">
                                        <Link to="/">Have an account? Go to login</Link>
                                            {/* <a href="login.html">Hav an account? Go to login</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>    
    </Fragment>
    }

}

export default SignUp;
