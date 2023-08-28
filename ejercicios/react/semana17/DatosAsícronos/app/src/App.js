import "./App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import NewPostForm from "./components/NewPostForm";

function App() {
  const [posts, setPosts] = useState([]);

  const addNewPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];

    setPosts(updatedPosts);
  };

  return (
    <main className="app">
      <h1>Post App</h1>
      <PostList posts={posts} />
      <NewPostForm addNewPost={addNewPost} />
    </main>
  );
}

export default App;
