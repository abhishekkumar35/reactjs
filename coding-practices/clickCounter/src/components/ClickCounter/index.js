// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCounter = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    console.log(count)
    return (
      <div className="bg-container">
        <div className="container">
          <h1>
            The Button has been clicked
            <span className="count-style"> {count} </span>
            times.
          </h1>
          <p>Click the button to increase the count.</p>
          <div className="btn-container">
            <button
              type="button"
              className="btn-style"
              onClick={this.increaseCounter}
            >
              click me!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
