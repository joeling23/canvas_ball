const log = i => console.log(i) // log(info) instead of console.log(info)
import React from 'react'




class Rectangle extends React.Component {
  constructor(props) {
        super(props)
    log(props)
    this.context = this.props.context
    this.x = this.props.x
    this.y = this.props.y
    this.width = this.props.width
    this.height = this.props.height
    /* this.end = this.props.end
    this.clockwise = this.props.clockwise */

  }

  draw() {
    const ctx = this.context
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.stroke()
    return this
  }
}

export default Rectangle
