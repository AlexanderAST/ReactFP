import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./style/App.css";
import PostItem from "./components/PostItem";

function App() {

    const [posts,setPost]=useState([
        {id: 1,title:"Golang",body:"Description"},
        {id: 2,title:"Golang 2",body:"Description"},
        {id: 3,title:"Golang 3",body:"Description"},

    ])


    return (
        <div className="App">
            <Counter></Counter>
            <ClassCounter></ClassCounter>

            {posts.map(post=>
               <PostItem post={post} key={post.id} />
            )}


        </div>

    );

}

export default App;
