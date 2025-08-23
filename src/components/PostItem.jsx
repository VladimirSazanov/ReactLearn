import React, { forwardRef } from "react";
import MyButton from "./UI/button/MyButton/MyButton";

const PostItem = forwardRef((props, ref) => {
  return (
    <div key={props.post.id} ref={ref} className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
});

PostItem.displayName = "PostItem";

export default PostItem;
