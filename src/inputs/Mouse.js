 class MouseEvents {
     move(e){
      let mouse = {}
      const mx = e.pageX
      const my = e.pageY 
      mouse =  {x:mx,y:my}
      console.log(mouse)
     }
 }
 
    
export default MouseEvents