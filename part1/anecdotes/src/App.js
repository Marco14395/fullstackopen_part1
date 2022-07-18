import { useState } from 'react';
import "./App.css"; 

const Anecdotes = (props) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{props.text}</p>
      <p>It has {props.vote} votes</p>
    </>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const Result = (props) => {
  return (
    <>
      <h3>Anecdote that has the most votes</h3>
      <p>{props.text}</p>
      <p>It has {props.vote} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  let [selected, setSelected] = useState(0);

  let points = Array(anecdotes.length).fill(0);
  
  let [votes, setVotes] = useState(points);

  let voteFunction = () => {
    const copy = [...votes]
    copy[selected] += 1;
    setVotes(copy);
  }

  let maxNum = Math.max(...votes);
  let maxNumIndex = votes.indexOf(maxNum);

  return (
    <div className='container'>
      <div className='top-container'>
          <Anecdotes text={anecdotes[selected]} vote={votes[selected]}/>
            <Button onClick={() => {
              let randNum = Math.floor(Math.random() * anecdotes.length);
              setSelected(selected = randNum);
            }} text="Next anecdote"/>
            <Button onClick={voteFunction} text="Vote for anecdote"/>
      </div>
      <div className='bottom-container'>
          <Result text={anecdotes[maxNumIndex]} vote={votes[maxNumIndex]}/>
      </div>
    </div>

  )
}

export default App