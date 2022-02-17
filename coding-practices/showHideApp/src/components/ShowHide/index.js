// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  clickedFirst = () => {
    const {firstName} = this.state
    if (firstName) {
      this.setState(() => ({firstName: false}))
    } else {
      this.setState(() => ({firstName: true}))
    }
  }

  clickedLast = () => {
    const {lastName} = this.state
    if (lastName) {
      this.setState(() => ({lastName: false}))
    } else {
      this.setState(() => ({lastName: true}))
    }
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <div className="showhide-container">
            <div className="btn-container">
              <button type="button" onClick={this.clickedFirst}>
                Show/Hide Firstname
              </button>

              {firstName && <p className="hide-element">Joe</p>}
            </div>
            <div className="btn-container">
              <button type="button" onClick={this.clickedLast}>
                Show/Hide Lastname
              </button>

              {lastName && <p className="hide-element">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
