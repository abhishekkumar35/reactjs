// Write your code here

import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0, check: 'Even'}

  clicked = () => {
    const randNumber = Math.floor(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randNumber}))
    const {count} = this.state
    if (count % 2 === 0) {
      this.setState(() => ({check: 'Even'}))
    } else {
      this.setState(() => ({check: 'Odd'}))
    }
  }

  render() {
    const {count, check} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Count {count}</h1>
          <p>Count is {check}</p>
          <button type="button" onClick={this.clicked}>
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
