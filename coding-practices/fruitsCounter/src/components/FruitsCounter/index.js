// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {bananaEaten: 0, mangoEaten: 0}

  increaseCountBanana = () => {
    this.setState(prevState => ({bananaEaten: prevState.bananaEaten + 1}))
  }

  increaseCountMango = () => {
    this.setState(prevState => ({mangoEaten: prevState.mangoEaten + 1}))
  }

  render() {
    const {bananaEaten, mangoEaten} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="span-style">{mangoEaten} </span> mangoes{' '}
            <span className="span-style"> {bananaEaten} </span>
            bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-img"
                alt="mango"
              />
              <div>
                <button
                  type="button"
                  className="btn"
                  onClick={this.increaseCountMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-img"
                alt="banana"
              />
              <div>
                <button
                  type="button"
                  className="btn"
                  onClick={this.increaseCountBanana}
                >
                  Eat banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
