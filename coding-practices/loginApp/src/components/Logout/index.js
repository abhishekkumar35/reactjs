// Write your code here

import './index.css'
import {Component} from 'react'

class Logout extends Component {
  render() {
    const {onClicked} = this.props
    return (
      <button type="button" onClick={onClicked}>
        Logout
      </button>
    )
  }
}

export default Logout
