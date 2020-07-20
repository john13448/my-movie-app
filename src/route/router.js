import React, { Component }                     from 'react';
import { HashRouter as Router, Route }          from 'react-router-dom';

import SignUp                                   from '../sign-up/list';
import Login                                    from '../login/list';
import MovieList                                from '../movie-list/list';

class Routes extends Component
{
    render ()
    {
      return (
          <>
          <Router>
            <Route path="/" exact component={ Login }></Route>
            <Route path="/sign-up" component={ SignUp }></Route>
            <Route path="/movie-list" component={ MovieList }></Route>
          </Router>
          </>
        )
    }
}

export default Routes;


