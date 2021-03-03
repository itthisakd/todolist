import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Header(props) {
  
  

  function handleAddClick() {
    props.setStatus("add");
  }

  // const handleSearchClick = () => {
  //   props.setTempList(
  //     props.list.filter((item) =>
  //       item.task.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  //   props.setStatus("home")
  //   props.setList(list)
  // }

  return (
    <header
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 70px;
      `}
    >
      <h1
        css={css`
          padding: 0 0 0 15px;
        `}
      >
        To Do List
      </h1>
      <div
        css={css`
          padding: 20px 0 0 0;
        `}
      >
        <label htmlFor="title">Search </label>
        <input
          placeholder="Type Here"
          css={css`
            height: 20px;
          `}
          onChange={props.handleSearchChange}
        />
        {/* <button
          type="text"
          css={css`
            height: 20px;
            padding: 5px;
          `}
          onClick={handleSearchClick}
        >
          Search
        </button> */}
        <button
          type="text"
          css={css`
            height: 30px;
            width: 50px;
            padding: 5px;
            margin: 0 20px;
          `}
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>
    </header>
  );
}
