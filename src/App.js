import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import List from "./components/List";
import Add from "./components/Add";
import Task from "./components/Task";
import Header from "./components/Header";

function App() {
  const [list, setList] = useState([
    //contains mock data
    {
      task: "Do the dishes",
      date: "12/12/2012",
      tab: "todo",
      id: 244,
    },
    {
      task: "Make dinner",
      date: "12/12/2012",
      tab: "doing",
      id: 235,
    },
    {
      task: "Clean the toilet",
      date: "12/12/2012",
      tab: "done",
      id: 236,
    },
  ]);
  const [status, setStatus] = useState("home");
  const [searchValue, setSearchValue] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  const [id, setID] = useState(0);

  const display = (tab) => {
    return list
      .filter((item) => item.tab === tab)
      .map((item) => (
        <Task
          key={item.id}
          task={item.task}
          date={item.date}
          id={item.id}
          setStatus={setStatus}
          setList={setList}
          list={list}
          heading={tab}
        />
      ));
  };

  const displaySearch = (tab) => {
    return list
      .filter(
        (item) =>
          item.tab === tab &&
          item.task.toLowerCase().includes(searchValue.toLowerCase())
      )
      .map((item) => (
        <Task
          key={item.id}
          task={item.task}
          date={item.date}
          id={item.id}
          setStatus={setStatus}
          setList={setList}
          list={list}
          heading={tab}
        />
      ));
  };

  if (status === "add") {
    return (
      <Add
        setStatus={setStatus}
        setList={setList}
        list={list}
        id={id}
        setID={setID}
      />
    );
  } else {
    return (
      <div>
        <div className="App" mode="search">
          <Header
            setStatus={setStatus}
            setList={setList}
            list={list}
            id={id}
            searchMode={searchMode}
            searchValue={searchValue}
            setSearchMode={setSearchMode}
            setSearchValue={setSearchValue}
          />
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              width: 100%;
              height: 100vh;
            `}
          >
            <List heading="TO DO">
              {!searchMode && display("todo")}
              {searchMode && displaySearch("todo")}
            </List>
            <List heading="DOING">
              {!searchMode && display("doing")}
              {searchMode && displaySearch("doing")}
            </List>
            <List heading="DONE">
              {!searchMode && display("done")}
              {searchMode && displaySearch("done")}
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
