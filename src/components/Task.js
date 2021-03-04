import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Task(props) {
  const [edit, setEdit] = useState(false);
  const [temp, setTemp] = useState("");

  function handleDelete(index) {
    props.setList(props.list.filter((item) => item.id !== index));
  }
  function handleDoing(index) {
    props.setList(
      props.list.map((item) =>
        item.id === index
          ? {
              task: item.task,
              date: item.date,
              id: item.id,
              tab: (item.tab = "doing"),
            }
          : item
      )
    );
  }
  function handleDone(index) {
    props.setList(
      props.list.map((item) =>
        item.id === index
          ? {
              task: item.task,
              date: item.date,
              id: item.id,
              tab: (item.tab = "done"),
            }
          : item
      )
    );
  }

  const handleEditClick = () => {
    setTemp(props.task);
    setEdit(!edit);
  };

  const handleTempChange = (e) => {
    setTemp(e.target.value);
  };

  const handleSetTask = (index) => {
    props.setList(
      props.list.map((item) =>
        item.id === index
          ? {
              task: temp,
              date: item.date,
              id: item.id,
              tab: item.tab,
            }
          : item
      )
    );
    setEdit(!edit);
  };

  return (
    <div>
      {edit && (
        <div
          css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 300px
        height: 50px;
        padding: 10px;
        border-bottom: solid 1px black;
        margin: 5px;
      `}
        >
          <input
            type="text"
            name=""
            value={temp}
            onChange={handleTempChange}
            css={css`
              display: block;
              width: 250px;
            `}
          />
          <button type="submit" onClick={() => handleSetTask(props.id)}>
            <i className="fas fa-check"></i>
          </button>
        </div>
      )}
      {!edit && (
        <div
          css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 300px
        height: 50px;
        padding: 10px;
        border-bottom: solid 1px black;
        margin: 5px;
      `}
        >
          <div
            css={css`
              display: block;
            `}
          >
            <div>{props.task}</div>
            <br />
            <div>{props.date}</div>
          </div>
          <div
            css={css`
              display: inline;
              margin: auto 0;
              width: 100px;
              display: flex-wrap;
              justify-content: end;
            `}
          >
            <button
              css={css`
                margin: auto;
                height: 2em;
                border-radius: 3px;
              `}
              onClick={handleEditClick}
            >
              <i className="far fa-edit"></i>
            </button>
            <button
              css={css`
                margin: auto;
                height: 2em;
                border-radius: 3px;
              `}
              onClick={() => handleDelete(props.id)}
            >
              <i className="far fa-trash-alt"></i>
            </button>
            <button
              css={css`
                margin: auto;
                height: 2em;
                border-radius: 3px;
              `}
              onClick={() => handleDoing(props.id)}
            >
              Doing
            </button>
            <button
              css={css`
                margin: auto;
                height: 2em;
                border-radius: 3px;
              `}
              onClick={() => handleDone(props.id)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Task;
