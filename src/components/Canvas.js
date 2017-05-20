import React from 'react'
import Block from './Block'
import Circle from './Block'




class Canvas extends React.Component {
  componentDidMount() {
    
    this.updateCanvas()
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d')
    const canvas = this.refs.canvas
    const vw = canvas.width  = window.innerWidth;
    const vh = canvas.height = window.innerHeight;
    
    const block = new Block({
      x: 10,
      y: 10,
      width: vw / 2,
      height: 10,
      context: ctx,
      vw: vw,
      vh: vh
    })
    const circle = new Circle({
      x: 50,
      y: 50,
      radius: 100,
      context: ctx,
      start: vw,
      end: vh,
      clockwise: true
    })
    requestAnimationFrame(function gameLoop() {
      ctx.clearRect(0, 0, vw, vh)

      block.draw().move()
      circle.draw()

      requestAnimationFrame(gameLoop)
    })
  }
  render() {
    return (
      <canvas ref="canvas"/>
    );
  }
}



export default Canvas
