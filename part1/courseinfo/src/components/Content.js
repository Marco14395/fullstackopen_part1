import React from 'react';
import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      <Part content= {props.part1}/>
      <Part content= {props.part2}/>
      <Part content= {props.part3}/>
    </div>
  )
}

export default Content