const log = i => console.log(i) // log(info) instead of console.log(info)
import React from 'react'




class Circle extends React.Component {
  constructor(props) {
        super(props)
    log(props)
    this.context = this.props.context
    this.x = this.props.x
    this.y = this.props.y
    this.radius = this.props.radius
    this.start = this.props.start
    this.end = this.props.end
    this.clockwise = this.props.clockwise
    
  }

  draw() {
    const ctx = this.context
    ctx.arc(this.x, this.y, this.radius, this.start, this.end, this.clockwise)
    ctx.fill()
    return this
  }
}

export default Circle