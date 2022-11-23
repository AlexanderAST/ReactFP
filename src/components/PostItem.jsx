import React from 'react';

const PostItem = (props) => {
    console.log(props)
    return (
        <div>
            <div className="post">
                <div className="post_-content">
                    <strong>{props.post.id} {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post_btns">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;