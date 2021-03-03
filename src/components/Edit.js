// import React, { useState } from "react";
// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

// function Add(props) {
//   const [task, setTask] = useState("");
//   const [date, setDate] = useState("");

//   function handleTaskChange(e) {
//     setTask(e.target.value);
//   }
//   function handleDateChange(e) {
//     setDate(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     props.setList([
//       ...props.list,
//       {
//         task: task,
//         date: date,
//         tab: "todo",
//         id: props.id + 1,
//       },
//     ]);
//     props.setStatus("home");
//   }
//   function handleBackClick() {
//     // console.log(props.list);
//     props.setStatus("home");
//   }

//   return (
//     <div
//       css={css`
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         border-radius: 10px;
//       `}
//     >
//       <h1
//         css={css`
//           background-color: lightblue;
//           width: 100%;
//           text-align: center;
//           align-items: center;
//           padding: 15px;
//           margin: 0 0 20px 0;
//           border: 1px black solid;
//         `}
//       >
//         Edit task
//       </h1>
//       <div
//         css={css`
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           border: 1px black solid;
//           margin: auto;
//           width: 50%;
//           border-radius: 10px;
//           padding: 15px;
//         `}
//       >
//         <form
//           // onSubmit={handleSubmit}
//           css={css`
//             width: 500px;
//             align-items: center;
//             display: flex;
//             flex-direction: column;
//           `}
//         >
//           <div>
//             <label htmlFor="title">Task</label>
//             <br></br>
//             <input
//               // value={props.valueTitle}
//               id="title"
//               type="text"
//               onChange={handleTaskChange}
//               css={css`
//                 width: 450px;
//               `}
//               value={props.task}
//             />
//           </div>
//           <br />
//           <button type="submit">SUBMIT</button>
//         </form>
//       </div>
//       <br />
//       <button
//         onClick={handleBackClick}
//         type="text"
//         // primary={true}
//         css={css`
//           margin: auto;
//         `}
//       >
//         BACK
//       </button>
//     </div>
//   );
// }

// export default Add;
