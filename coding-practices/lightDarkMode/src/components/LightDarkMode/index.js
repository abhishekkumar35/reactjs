// Write your code here

import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {container: 'container-dark', heading: 'heading-light', text: 'Light'}

  clicked = () => {
    const {container} = this.state
    if (container === 'container-dark') {
      this.setState(() => ({
        container: 'container-light',
        heading: 'heading-dark',
        text: 'Dark',
      }))
    } else {
      this.setState(() => ({
        container: 'container-dark',
        heading: 'heading-light',
        text: 'Light',
      }))
    }
  }

  render() {
    const {container, heading, text} = this.state
    return (
      <div className="bg-container">
        <div className={container}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button type="button" onClick={this.clicked}>
            {text} Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
