import React from 'react';
import { Box, Collapsible, Button, Text } from 'grommet';
import { More } from "grommet-icons";

import Comments from './Comments/Comments'

class SubItem extends React.PureComponent {
    state = { showComments: false }

    _enableComments=()=>{
        this.setState({ showComments: !this.state.showComments }) 
    }

    render() {
        var post = this.props.post;
        return (
            <Box pad="small">

                <Text size="small">
                    Score: {post.score} Posted by {post.by + ' ' + new Date(post.time)}
                </Text>

                <small>
                    {post.kids &&
                        <Button hoverIndicator="light-1" onClick={() =>this._enableComments()}>
                            <Box pad="small" direction="row" align="center" gap="small">
                                <Text size="small">{this.state.showComments ? 'hide comments' : 'view comments'}</Text>
                                <More size="small" />
                            </Box>
                        </Button>
                    }
                </small>

                <Collapsible direction="horizontal" open={this.state.showComments}>
                    {(this.state.showComments && post.kids) &&
                        <Comments comments={post.kids} />
                    }
                </Collapsible>
            </Box>
        )
    }
}

export default SubItem;