import React, { useState } from "react";
/*import Counter from './components/Counter';*/
import "./styles/App.css";
/*import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';*/
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);
  /*const [title, setTitle] = useState(""); // Двухстороннее связывание - 1ч
  const [body, setBody] = useState("");*/
  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  /// Получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    sortPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  };

  return (
    <div className="App">
      {/*Управляемый компонент*/}
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Посты про JS" />
      ) : (
        <h1 style={{ textAlign: "center" }}>'Посты не найдены'</h1>
      )}
    </div>
  );
}
// create- название пропса
export default App;
