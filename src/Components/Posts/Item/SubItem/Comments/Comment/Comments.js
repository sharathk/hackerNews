import React from 'react';
import { Box,Text } from 'grommet';

class Comment extends React.Component {


  render() {
    let { comment, author, date } = this.props;
    return (
      <Box
        pad="large"
        align="center"
        background={{ color: "light-2", opacity: "strong" }}
        round
        gap="small"
        margin="small"
      >

        <Text size="small" dangerouslySetInnerHTML={{ __html: comment }}>
        
</Text>
        <Box alignSelf="end">
          by: {author} on {Date(date)}
        </Box>
      </Box>

    )
  }
}

export default Comment;

