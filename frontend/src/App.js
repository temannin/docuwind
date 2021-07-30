import React, { useEffect } from "react";

function App() {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    fetch("/api/v1/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  });

  return (
    <div>
      {posts.map((post) => {
        return <Post {...post}></Post>;
      })}
    </div>
  );
}

function Post({ title, content, author, date }) {
  return <h1>{title}</h1>;
}

function Blurb({ title, content, author, date }) {
  return <div></div>;
}

export default App;
