

class MyCanvas extends MyElementDOMHtml
{
  constructor(id,h,w,color)
  {
    this.color = color;
    this.canvas = document.createElement('canvas');
    this.canvas.id = "c1"+id;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.style.height = h;
    this.canvas.style.width = w;

  }
  CreateToDomElement(newID,elemmentDOM)
  {
    if(!elemmentDOM)
    {
      console.log('elemmentDOM canvas est null');
      return false;
    }
    this.element = elemmentDOM;
    this.element.id = "c1"+newID;
    return true;
  }
  setPoint()
  {
    this.ctx.beginPath();
    this.ctx.lineWidth = '5';
    this.ctx.fillStyle = this.color;
    this.ctx.arc(150,85,40,0,2*Math.PI);
    this.ctx.fill();
  }
  show()
  {
    this.setPoint();
  }
  hile()
  {
    this.ctx.beginPath();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();
  }
  getElement()
  {
    return this.canvas;
  }
}
