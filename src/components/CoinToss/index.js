import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    total: 0,
    img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onResult = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({
        img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({
        img: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {heads, tails, total, img} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={img} alt="toss result" className="toss-img" />
          <div>
            <button
              type="button"
              className="toss-button"
              onClick={this.onResult}
            >
              Toss Coin
            </button>
          </div>

          <div className="span-container">
            <p className="span-item">Total: {total}</p>
            <p className="span-item">Heads: {heads}</p>
            <p className="span-item">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
