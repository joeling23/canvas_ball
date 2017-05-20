

class MouseEvents {
   constructor(props){
       console.log(props)
      this.canvas = props
   }
     
     move(){
      this.canvas.addEventListener('mousemove', e => {
          this.mx = e.pageX
          this.my = e.pageY 
          this.mouse = {x:this.mx,y:this.my}
          this.getLocation(this.mouse)
      }, false);
        
        return this
     }
     getLocation(mouse){
         return mouse
     }
     click(){
         this.canvas.addEventListener('click', e => {
         console.log(this.mouse)
      }, false);
         
     }
 }
 
    
export default MouseEvents