import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";
import "./App.css";

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content 
        part1 = {course.parts[0].name + " " + course.parts[0].exercises} 
        part2 = {course.parts[1].name + " " + course.parts[1].exercises} 
        part3 = {course.parts[2].name + " " + course.parts[2].exercises} 
      />
      <Total parts = { course.parts[0].exercises + course.parts[0].exercises + course.parts[0].exercises }/>
    </div>
  )
}

export default App