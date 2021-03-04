import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Header(props) {
  function handleAddClick() {
    props.setStatus("add");
  }

  const handleSearchClick = () => {
    props.setSearchMode(true);
  };

  const handleSearchChange = (e) => {
    props.setSearchMode(true);
    props.setSearchValue(e.target.value);
  };

  return (
    <div>
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

        <button
          type="text"
          css={css`
            font-size: 15px;
            height: 30px;
            width: 80px;
            padding: 5px;
            margin: 25px 0 0 150px;
          `}
          onClick={handleAddClick}
        >
          <strong>Add</strong>
        </button>
        <div
          css={css`
            padding: 25px 0 0 0;
          `}
        >
          <label htmlFor="title">Search </label>
          <input
            placeholder="Type Here"
            css={css`
              height: 20px;
            `}
            onChange={handleSearchChange}
          />
          {!props.searchMode && (
            <button
              type="text"
              css={css`
                height: 30px;
                width: 70px;
                padding: 5px;
                margin: 0 20px;
              `}
              onClick={handleSearchClick}
            >
              Search
            </button>
          )}
          {props.searchMode && (
            <button
              type="text"
              css={css`
                height: 30px;
                width: 70px;
                padding: 5px;
                margin: 0 20px;
              `}
              onClick={props.setSearchMode(false)}
            >
              Cancel
            </button>
          )}
        </div>
      </header>
    </div>
  );
}
