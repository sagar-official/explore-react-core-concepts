import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singer from "./singer";
import BookStore from "./Bookstore";
import Book from "./book";

function App() {
  const actors = ["Shakib", "shoriful Raj", "Jasim", "Rubel"];

  const books = [
    { id: 1, name: "Psysics", price: 100 },
    { id: 2, name: "Math", price: 100 },
    { id: 3, name: "English", price: 100 },
    { id: 4, name: "Biology", price: 100 },
  ];
  const singers = [
    { id: 1, name: "Dr. Mahfuzur ", age: 68 },
    { id: 2, name: "Eva Rahman", age: 38 },
    { id: 3, name: "Shuvo Dev", age: 58 },
    { id: 4, name: "Pritom", age: 28 },
  ];

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
      <Actor name={"Bappa Raz"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core-Concepts" isDone={false}></Todo>
      <Todo task="Try Jsx" isDone={true}></Todo> */}
      {/* <Device name="laptop" price="55"></Device>
      <Device name="mobile" price="12"></Device>
      <Device name="watch" price="10"></Device>
      <Person></Person>
      <Student grade="6" score="79"></Student>
      <Student grade="7" score="78"></Student>
      <Student grade="8" score="66"></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  // console.log(props);
  return <h2>This Device : {props.name}</h2>;
}
function Person() {
  const age = 21;
  const money = 25;
  const person = { name: "shakib", age: 12 };
  return (
    <h3>
      i am a {person.name} with age: {person.age}
    </h3>
  );
}
// const {grade , score} = {grade ='7', score = '99'}
function Student({ grade, score }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>class:{grade}</p>
      <p>score:{score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    margin: "20px",
    border: "5px solid purple",
    borderRadius: "20px",
  };
  // return (
  //   <div style={ {
  //     margin: "20px",
  //     margin: "20px",
  //     border: "5px solid purple",
  //     borderRadius: "20px",
  //   }}>
  //     <h5>devo devo</h5>
  //     <p>coding :</p>
  //   </div>
  // );
  return (
    <div style={developerStyle}>
      <h5>devo devo</h5>
      <p>coding :</p>
    </div>
  );
}

export default App;
