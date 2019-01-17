import React from 'react';
import { Box, Text } from 'grommet';

class Comment extends React.PureComponent {


  render() {
    let { comment, author, date } = this.props;
    return (
      <li>
        <Box
          pad="medium"
          align="center"
          background={{ color: "light-2", opacity: "strong" }}
          round
          gap="small"
          margin="small"
        >
        <Text size="small">
          <ol dangerouslySetInnerHTML={{ __html: comment }}></ol>
          </Text>
          <Box alignSelf="end">
            by: {author} on {Date(date)}
          </Box>
        </Box>
      </li>

    )
  }
}

export default Comment;

