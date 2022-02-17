// Write your code here
import './index.css'
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogin: false}

  clicked = () => {
    const {isLogin} = this.state
    if (isLogin) {
      this.setState(() => ({isLogin: true}))
    } else {
      this.setState(() => ({isLogin: false}))
    }
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          {!isLogin && <Message message="Please Login" />}
          {isLogin && <Message message="Welcome, User" />}
          {!isLogin && <Login onClicked={this.clicked} />}
          {isLogin && <Logout onClicked={this.clicked} />}
        </div>
      </div>
    )
  }
}

export default Home
