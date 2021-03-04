import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import List from "./components/List";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Task from "./components/Task";
import Header from "./components/Header";

function App() {
  let id = 0;

  const [list, setList] = useState([
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

  

  function handleEdit(index) {
    setList(
      list.map((item) =>
        item.id === index
          ? { task: item.task, date: item.date, tab: (item.tab = "doing") }
          : item
      )
    );
    setStatus("edit");
  }

  if (status === "add") {
    return <Add setStatus={setStatus} setList={setList} list={list} id={id} />;
  }
  if (status === "edit") {
    return (
      <Edit
        setStatus={setStatus}
        setList={setList}
        list={list}
        id={id}
        handleEdit={handleEdit}
        searchMode={searchMode}
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
            // handleSearchChange={handleSearchChange}
            setSearchMode={setSearchMode}
            setSearchValue={setSearchValue}
          />
          {!searchMode && (
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
                {list
                  .filter((item) => item.tab === "todo")
                  .map((item) => (
                    <Task
                      key={item.id}
                      task={item.task}
                      date={item.date}
                      id={item.id}
                      setStatus={setStatus}
                      setList={setList}
                      list={list}
                    />
                  ))}
              </List>
              <List heading="DOING">
                {list
                  .filter((item) => item.tab === "doing")
                  .map((item) => (
                    <Task
                      key={item.id}
                      task={item.task}
                      date={item.date}
                      id={item.id}
                      setStatus={setStatus}
                      setList={setList}
                      list={list}
                    />
                  ))}
              </List>
              <List heading="DONE">
                {list
                  .filter((item) => item.tab === "done")
                  .map((item, index) => (
                    <Task
                      key={item.id}
                      index={index}
                      task={item.task}
                      date={item.date}
                      id={item.id}
                      setStatus={setStatus}
                      setList={setList}
                      list={list}
                    />
                  ))}
              </List>
            </div>
          )}
          {searchMode && (
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
                {list
                  .filter(
                    (item) =>
                      item.tab === "todo" &&
                      item.task
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
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
                    />
                  ))}
              </List>
              <List heading="DOING">
                {list
                  .filter(
                    (item) =>
                      item.tab === "doing" &&
                      item.task
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
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
                    />
                  ))}
              </List>
              <List heading="DONE">
                {list
                  .filter(
                    (item) =>
                      item.tab === "done" &&
                      item.task
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <Task
                      key={item.id}
                      index={index}
                      task={item.task}
                      date={item.date}
                      id={item.id}
                      setStatus={setStatus}
                      setList={setList}
                      list={list}
                    />
                  ))}
              </List>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
