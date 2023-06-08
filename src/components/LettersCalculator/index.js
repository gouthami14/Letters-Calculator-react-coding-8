// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChangeValue = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="body-container">
          <h1 className="heading">
            Calculate the
            <br /> letters <br /> you enter
          </h1>
          <label htmlFor="letter">Enter the phrase</label>
          <input
            id="letter"
            className="input-value"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChangeValue}
          />
          <button className="button" type="button">
            No.of Letters : {count.length}
          </button>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
