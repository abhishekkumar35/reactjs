// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {text: 'subscribe'}

  clicked = () => {
    const {text} = this.state
    if (text === 'subscribe') {
      this.setState(() => ({text: 'subscribed'}))
    } else {
      this.setState(() => ({text: 'subscribe'}))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Welcome</h1>
          <p className="para-text">Thank you! Happy Learning</p>
          <div className="btn-container">
            <button type="button" onClick={this.clicked}>
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
