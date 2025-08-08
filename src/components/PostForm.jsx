import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      if: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" }); /// Обновление сразу всего, что выше указанно
  };

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Название поста"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })} // Двухстороннее связывание - 2ч
      />
      {/*Неуправляемый/Неконтролируемый компонент
        <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста" />*/}
      <MyInput
        value={post.body}
        type="text"
        placeholder="Описание поста"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton type="submit" onClick={addNewPost}>
        Создать пост
      </MyButton>
    </form>
  );
};

export default PostForm;
