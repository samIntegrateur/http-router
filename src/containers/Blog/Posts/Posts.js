import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Link, Route, Switch} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {

  state = {
    posts: []
  };

  componentDidMount() {
    console.log('props', this.props);
    axios.get('/posts')
      .then(response => {
        // console.log('response', response);
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Max'
          }
        });
        this.setState({posts: updatedPosts});
      })
      .catch(error => {
        console.log('error', error);
        // this.setState({error: true})
      });
  }


  postSelectedHandler = (id) => {
    // navigate by code
    this.props.history.push( '/posts/' + id);
  };

  render() {

    let posts = <p style={{textAlign: 'center'}}>Something wrong</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link key={post.id} to={'/posts/' + post.id}>
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          // </Link>
        )
      });
    }

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
      </div>
    );
  }
}

export default Posts;
