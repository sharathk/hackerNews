import React from 'react';
import Comment from './Comment/Comment'

class Comments extends React.Component {
    constructor() {
        super();
        this.state = { comments: [] };
    }
    componentDidMount() {
        this.props.comments &&
            this.fetchComments();
    }
    fetchComments() {
        let comments = this.props.comments;
        comments.slice(0, 10).map((commentId) => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
                .then(response => response.json())
                .then((itemDetail) => {
                    this.setState((currentState) => {
                        currentState.comments.push(itemDetail);
                        return { comments: currentState.comments };
                    })
                })
        })

    }


    render() {
        return (<ol>
            {this.state.comments.map((comment)=>{
                return <Comment key={comment.id} comment={comment.text}
                    date={comment.time} author={comment.by}
                />

            })}
        </ol>
        )
    }
}
export default Comments;