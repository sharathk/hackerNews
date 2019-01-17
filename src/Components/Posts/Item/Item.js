import React from 'react';
import { Box, Text } from 'grommet';
import SubItem from './SubItem/SubItem';

class Item extends React.PureComponent {


  render() {
    var post = this.props.post;
    // console.log("each post", post);
    return (
      <Box>
        <li>
          <Text> <a href={post.url}>{post.title}</a> </Text>
          <SubItem post={post} />
        </li>
      </Box>
    )
  }
}

export default Item;