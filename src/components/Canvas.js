import React from 'react'
import Block from './Block'



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
    requestAnimationFrame(function gameLoop() {
      ctx.clearRect(0, 0, vw, vh)

      block.draw().move()

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
