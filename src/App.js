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
    { id: 1, title: "1", body: "Б" },
    { id: 2, title: "3", body: "В" },
    { id: 3, title: "2", body: "А" },
  ]);
  /*const [title, setTitle] = useState(""); // Двухстороннее связывание - 1ч
  const [body, setBody] = useState("");*/
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function getSortedPost() {
    console.log("Отработала функция сортировки постов");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort]),
      );
    }
    return posts;
  }

  const sortedPost = getSortedPost();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  /// Получаем пост из дочернего компонента
  const removePosts = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      {/*Управляемый компонент*/}
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
        />
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
        <PostList
          remove={removePosts}
          posts={sortedPost}
          title="Посты про JS"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>'Посты не найдены'</h1>
      )}
    </div>
  );
}
// create- название пропса
export default App;
