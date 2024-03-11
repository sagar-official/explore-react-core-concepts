// export default function Todo({ task }) {
//   return <li>Task : {task}</li>;
// }

// Conditional rendering option 1:

// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work Now : {task}</li>;
//   }
//}

// another conditional rendering option :

// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished : {task}</li>;
//   } else {
//     return <li>Work Now : {task}</li>;
//   }
// }

//conditional rendering option 3:

// export default function Todo({ task, isdone }) {
//   return (
//     <li>
//       {isdone ? "Finished" : "Work On"} : {task}
//     </li>
//   );
// }

// another conditional rendering option 4: &&

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task}
//       {isDone && ": Finished"}
//     </li>
//   );
// }

// another conditional rendering option 5 : || (or)
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone || ": Do it"}
//     </li>
//   );
// }

// conditional rendering option 6 :
export default function Todo({ task, isDone }) {
  let listItem;
  if (isDone) {
    listItem = <li>Finished : {task}</li>;
  } else {
    listItem = <li>Work Now : {task}</li>;
  }
  return listItem;
}
