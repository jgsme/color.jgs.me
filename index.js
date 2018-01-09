import './style'
import {Component} from 'preact'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      color: this.generateColor(),
    }
  }

  generateColor() {
    return `#${this.generateHex()}${this.generateHex()}${this.generateHex()}`
  }

  generateHex() {
    const candidate = Math.floor(Math.random() * 256).toString(16)
    return candidate.length === 1 ? `0${candidate}` : candidate
  }

  render() {
    const style = {
      backgroundColor: this.state.color,
    }
    return (
      <div style={style}>
        <h1>
          <span>{this.state.color}</span>
        </h1>
        <div>
          <span>
            <span>&copy;&nbsp;2018&nbsp;Takaya&nbsp;Kobayashi&nbsp;</span>
            <a href="https://kbys.tk/y" target="_blank">
              https://kbys.tk/y
            </a>
          </span>
        </div>
      </div>
    )
  }
}
