import React from 'react'




class Canvas extends React.Component {
  componentDidMount() {
    this.updateCanvas()
  }
  componentDidUpdate(){
    this.updateCanvas()
  }
  updateCanvas() {
    const audio = new (window.AudioContext || window.webkitAudioContext)()
    const ctx = this.refs.canvas.getContext('2d')
    const canvas = this.refs.canvas
    const mouse = new MouseEvent(canvas)
    const vw = canvas.width  = window.innerWidth
    const vh = canvas.height = window.innerHeight
console.log(vw,vh);
    
    requestAnimationFrame(function gameLoop() {
      ctx.clearRect(0, 0, vw, vh)
      // Start drawing
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(vw / 2, vh / 2, 200, 0, 2*Math.PI);
ctx.fill();


      // End Drawing
      requestAnimationFrame(gameLoop)
    })
  }
  render() {
    return (
      <canvas ref="canvas"/>
    )
  }
}


function randomIntFromRange(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}
export default Canvas
