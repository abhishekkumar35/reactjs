// Write your code here
import './index.css'
import {Component} from 'react'

class Login extends Component {
  render() {
    const {onClicked} = this.props
    return (
      <button type="button" onClick={onClicked}>
        Login
      </button>
    )
  }
}

export default Login
