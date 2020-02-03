import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';

// lazy loading https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8138598#overview
const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {

  state = {
    auth: true
  };

  render() {

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink
                to="/posts/"
                // change from default "active" class
                // activeClassName="my-active"
                activeStyle={{
                  textDecoration: 'underline'
                }}
                exact>Posts</NavLink></li>
              <li><NavLink to={{
                // paths are absolute, but we can do something like this
                // pathname: {this.props.match.url + '/new-post'}
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>

        <Switch>
          {/*<Route path="/" exact render={() => <h1>home</h1>} />*/}
          {/*Guard*/}
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
          <Route path="/posts" component={Posts} />
          {/*404 : doesn't work with below redirect */}
          <Route render={() => <h1>not found</h1>} />
          {/*<Redirect from="/" to="/posts" />*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;
