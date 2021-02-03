import React from "react";
import './App.css';
import Header from "./Header.js";
import Sidebar from "./Sidebar";
import Feed from "./Feed.js";
import MessageSender from "./MessageSender";

function App() {
  return (
    <div className="app">
      {/* {Header } */}
      <Header />

      {/* {Body} */}
      <div className="app_body">
        <Sidebar />
        <Feed />
        <MessageSender />
        {/* In Body */}
        {/* {Sidebar} Done */}
        {/* {Feed} */}
        {/* {Widgets} */}
      </div>
    </div>
  );
}

export default App;
