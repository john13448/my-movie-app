import React, { Component, Fragment } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';


class MovieList extends Component
{
    constructor()
    {
        super();
        this.state= {
            'MOVIE_DATA': {},
            'isLoading': true,
            'items': 3,
            'showAlert': false
        }
    }
    componentDidMount()
    {
        let formData = new FormData();    

        formData.append('category', 'movies');   
        formData.append('language', 'kannada');
        formData.append('genre', 'all');
        formData.append('sort', 'voting');

        axios.post(`https://hoblist.com/movieList`, formData).then(res => {
            this.setState(preStatre => ({
                MOVIE_DATA: res.data,
                isLoading: false,
            }));
        });
    }

    MovieListData = (value, index) => {

        // return(<h6 key={index}>{value.title}</h6>)
        return(<div className="row" key={index}>
                            <div className="col-xl-3 col-md-6">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <img src={value.poster} className="img-responsive"/>
                                        <h6>{value.title}</h6>
                                        <p><b>Genre:</b> {value.genre}</p>
                                        <p><b>Director:</b>
                                            {
                                                Object.keys(value.director).length > 0 ? (value.director).map((directorVal, directorIndex) => (
                            
                                                <span key={directorIndex}> {directorVal}{value.director.length === -1 ? ', ' : '.'}</span>
                                                )): <span> - </span>
                                            }
                                        </p>
                                        <p><b>Starring:</b> 
                                            {
                                                Object.keys(value.stars).length > 0 ? (value.stars).map((starsVal, starsIndex) => (
                            
                                                <span key={starsIndex}> {starsVal}{value.stars.length === -1 ? ', ' : '.'}</span>
                                                )): <span> - </span>
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>)
    }

    Logout = () => {
        localStorage.clear();
    }

    CompanyInfo = (isTrue) => {
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.setState({ showAlert: isTrue, isLoading: false });
        }, 3000);
    }

    loadMoreItems() 
    {
        this.setState({ isLoading: true });
        setTimeout(() => {
          this.setState({ items: this.state.items + 3, isLoading: false });
        }, 3000);
    }

    render()
    {
        let movieData = this.state.MOVIE_DATA.result;
        let content;
        let isloadMoreBtn;

        if(this.state.isLoading)
        {
            content = "Loading...."
        }
        else if(Object.keys(movieData).length > 0)
        {
            content = (movieData.slice(0, this.state.items)).map((value, index) => {
                return(
                    this.MovieListData(value, index)
                )
            });

            if(Object.keys(movieData).length >= this.state.items)
            {
            isloadMoreBtn = <div className="card-footer text-center">
                                <div className="small align-load-btn">
                                    <button className="btn btn-primary btn-block" onClick= {() => this.loadMoreItems()}>Load More</button>
                                </div>
                            </div>
            }
        }
        else 
        {
            content = <h3>No Record Found</h3>
        }

        return( 
        <Fragment>
            <div className="container-fluid">
                <h4 className="mt-4">Movie Dashboard</h4>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Movie List</li>
                    <li className="breadcrumb-item">
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                Action
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => this.CompanyInfo(true)} href="#">Company Info</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.Logout()} href="/">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ol>
                <Alert show={this.state.showAlert} variant="success">
                    <Alert.Heading>Company Info</Alert.Heading>
                    <p><b>Company: </b> Geeksynergy Technologies Pvt Ltd,</p>
                    <p><b>Address: </b> Sanjaynagar, Bangalore-56</p>
                    <p><b>Phone  : </b> 9876543210</p>
                    <p><b>Email  : </b> abcdef@gmail.com</p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <button onClick={() => this.CompanyInfo(false)} variant="outline-success">
                        Close
                        </button>
                    </div>
                </Alert>
                {content}
                {isloadMoreBtn}
            </div>

        </Fragment>)
    }

}

export default MovieList;
