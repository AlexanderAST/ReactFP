import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    console.log(props)
    return (
        <div>
            <div className="post">
                <div className="post_-content">
                    <strong>{props.number} {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post_btns">
                    <MyButton onClick={()=>props.remove(props.post)}>
                        Удалить
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;