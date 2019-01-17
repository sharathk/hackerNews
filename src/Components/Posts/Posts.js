import React from 'react';
import { Box } from 'grommet';
import Item from './Item/Item';

class Posts extends React.Component {
  constructor() {
    super();
    this.state = { posts: [], showSidebar: false };

  }

  componentDidMount() {
    this.fetchTopTenNews();
  }

  fetchTopTenNews() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then((data) => {
        data.slice(0, 10).map((newsId) => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`)
            .then(response => response.json())
            .then((itemDetail) => {
              this.setState((currentState) => {
                currentState.posts.push(itemDetail);
                return { posts: currentState.posts };
              })
            })
        });
      })
  }


  render() {

    return (
      <Box>
        <ol className="posts">
          {this.state.posts &&
            this.state.posts.map(function (post) {
              return <Item key={post.id} post={post} />
            })
          }
        </ol>
      </Box>
    )
  }
}

export default Posts;