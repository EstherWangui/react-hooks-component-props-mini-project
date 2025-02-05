import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList"
import About from "./About"

console.log(blogData);
const{name,image,about,posts}= blogData;
function App() {
  return (
    <>
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
    <Header
    name={name}
    />
    <About
    image={image}
    about={about}
    />
    <ArticleList
    posts={posts}
    />
    </>
  );
}

export default App;
