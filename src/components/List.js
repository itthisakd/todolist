import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function List(props) {

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 31%;
        border: 1px solid black;
        padding: 0px;
      `}
    >
      <h2
        css={css`
          background-color: lightgrey;
          font-size: 20px;
          border-bottom: 1px solid black;
          margin: 0;
          padding: 5px;
          text-align: center;
        `}
      >
        {props.heading}
      </h2>
      {props.children}
    </div>
  );
}

export default List