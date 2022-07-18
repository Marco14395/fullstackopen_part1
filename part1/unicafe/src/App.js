import React from 'react'
import { useState } from 'react'
import Button from './components/Button'
import "./App.css"

const StatisticLine = (props) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>{props.text}</td>
                    <td>{props.value}</td>
                </tr>
            </tbody>
        </table>
        
    )
}

const Statistics = (props) => {
    if(props.good === 0 && props.neutral === 0 && props.bad === 0)
    {
        return (
            <div>
                <h4>No feedback given yet!</h4>
            </div>
        )
    }
    return (
        <div>
            <StatisticLine text="Good" value={props.good}/>
            <StatisticLine text="Neutral" value={props.neutral}/>
            <StatisticLine text="Bad" value={props.bad}/>
            <StatisticLine text="All" value={props.all}/>
            <StatisticLine text="Average" value={props.avg}/>
            <StatisticLine text="Positive" value={props.pos}/>
        </div>
    )
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div className='appContainer'>
    <div className='container'>
        <div>
            <h1>Give Feedbacks</h1>
        </div>
        <div className='mg-top'>
            <Button onClick={() => setGood(good + 1)} text="Good" className="goodBtn"></Button>
            <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" className="neutralBtn"></Button>
            <Button onClick={() => setBad(bad + 1)} text="Bad" className="badBtn"></Button>
        </div>
        <div className='left mg-top'>
           <h2>statistics</h2>
            <div>
                <Statistics good={good} bad={bad} neutral={neutral} all={good+bad+neutral} avg={(good-bad)/(good+bad+neutral)} 
                pos={(good)/(good+bad+neutral)}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default App