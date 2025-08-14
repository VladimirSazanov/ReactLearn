import React, { useRef } from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  const refs = useRef({});

  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          if (!refs.current[post.id]) {
            refs.current[post.id] = React.createRef();
          }
          return (
            <CSSTransition
              key={post.id}
              nodeRef={refs.current[post.id]}
              timeout={500}
              classNames="post"
            >
              <PostItem
                ref={refs.current[post.id]}
                remove={remove}
                number={index + 1}
                post={post}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
