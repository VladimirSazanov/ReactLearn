import React, { useState } from "react";
/*import Counter from './components/Counter';*/
import "./styles/App.css";
/*import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';*/
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton/MyButton";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePost";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "1", body: "Б" },
    { id: 2, title: "3", body: "В" },
    { id: 3, title: "2", body: "А" },
  ]);
  /*Управляемый компонент-компонент, который хранит своё значение в state, часть двухстороннего связывания*/
  /*Двухстороннее связывание-это когда управляемый компонент отображается в UI*/
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  /// Получаем пост из дочернего компонента
  const removePosts = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePosts}
        posts={sortedAndSearchPosts}
        title="Посты про JS"
      />
    </div>
  );
}
/* remove - название пропса, которое внутри компонента. removePosts - значение, которое туда передано*/
export default App;
