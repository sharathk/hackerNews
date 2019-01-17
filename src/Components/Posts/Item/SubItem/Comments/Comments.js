import React from 'react';
import Comment from './Comment/Comments';

class Comments extends React.Component {
    constructor() {
        super();
        this.state = { comments: [] };
    }
    componentWillMount() {
        this.props.comments &&
            this.fetchComments();
    }
    fetchComments() {
        var comments = this.props.comments;
        comments.slice(0, 10).map((commentId) => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
                .then(response => response.json())
                .then((itemDetail) => {
                    this.setState((currentState) => {
                        currentState.comments.push(itemDetail);
                        return { posts: currentState.comments };
                    })
                })
        })

    }


    render() {
        var comments = this.props.comments;
        return <ol className="posts">
            {this.state.comments.map(function (comment) {
                return <Comment key={comment.id} comment={comment.text}
                    date={comment.time} author={comment.by}
                />

            })}
        </ol>;
    }
}
export default Comments;