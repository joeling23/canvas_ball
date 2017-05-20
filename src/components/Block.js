const log = i => console.log(i) // log(info) instead of console.log(info)
import React from 'react'




class Block extends React.Component {
  constructor(props) {
        super(props)
    this.x = this.props.x
    this.y = this.props.y
    this.dy = 2
    this.width = this.props.width
    this.height = this.props.height
    this.context = this.props.context
    this.up = false
    this.down = true
    this.vh = this.props.vh
    this.vw = this.props.vw
  }

  draw() {
    const ctx = this.context
    ctx.fillRect(this.x, this.y, this.width, this.height)
    return this
  }

  move() {
      if(this.y + this.dy > this.vh-this.y || this.y + this.dy < this.height) {
        this.dy = -this.dy;
    }
    this.y += this.dy
    return this
  }
}

export default Block