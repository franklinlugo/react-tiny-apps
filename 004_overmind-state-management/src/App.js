import React, { Component } from 'react';
import { connect } from './overmind';
import { StyledApp, Header, Button, Posts, Post } from './Styles';

class App extends Component {
  handleGetPosts = () => {
    this.props.overmind.actions.getPosts();
  };
  handleDeletePost = index => {
    this.props.overmind.actions.deletePost(index);
  };
  render() {
    const { overmind } = this.props;
    const posts = overmind.state.posts.map((post, index) => {
      return (
        <Post key={index} onClick={() => this.handleDeletePost(index)}>
          {post.title}
        </Post>
      );
    });
    return (
      <StyledApp>
        <div className="inner">
          <Header>overmind state management</Header>
          {overmind.state.appState}
          <Button onClick={this.handleGetPosts}>Get posts</Button>
          <Posts>{posts}</Posts>
        </div>
      </StyledApp>
    );
  }
}

export default connect(App);
