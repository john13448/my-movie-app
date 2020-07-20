import React, { Component, Fragment } from 'react';
import { Link }                       from 'react-router-dom';
import '../css/style.css'; 

class Login extends Component
{
    constructor()
    {
        super();
        this.state = {
            fields: {},
        }
    }

    // handle changes 
    handleChange = (e) =>
    {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
    }

    // on click login form submit
    submitUserLoginForm = (e) => 
    {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = this.state.fields;
            
            if(localStorage.getItem("MOVIE_USER_NAME") !== fields["name"])
            {
                alert("Enter correct username");
            }
            else if(localStorage.getItem("MOVIE_USER_PASSWORD") !== fields["password"])
            {
                alert("Enter correct password")
            }
            else if(localStorage.getItem("MOVIE_USER_NAME") === fields["name"] && localStorage.getItem("MOVIE_USER_PASSWORD") === fields["password"])
            {
                alert("User login successfully");
                this.props.history.push("/movie-list");
            }
        }
    }

    // validate form 
    validateForm = () => 
    {
        let fields = this.state.fields;
        let formIsValid = true;
        if(localStorage.getItem("MOVIE_USER_NAME") === null && localStorage.getItem("MOVIE_USER_PASSWORD") === null)
        {
            formIsValid = false;
            alert("Signup Now");
        }
        else if (!fields["name"]) {
          formIsValid = false;
          alert('Enter Name')
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
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                    <div className="card-body">
                                        <form onSubmit= {this.submitUserLoginForm}>
                                            <div className="form-group">
                                                <label className="small mb-1" for="inputEmailAddress">Email</label>
                                                <input className="form-control py-4" id="inputEmailAddress" type="text" placeholder="Enter name" name="name" value={this.state.fields.name} onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label className="small mb-1" for="inputPassword">Password</label>
                                                <input className="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" name="password" value={this.state.fields.passowrd} onChange={this.handleChange} />
                                            </div>
                                    
                                            <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <button className="btn btn-primary btn-block">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center">
                                        <div className="small">
                                                <Link to="/sign-up">SignUp Now</Link>
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

export default Login;
