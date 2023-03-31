

class MyDivCanvas extends MyInsideDivVertical
{
  constructor(newID,h,w,color,newElementParent)
  {
    super("div_"+newID,newElementParent);
    this.h = h;
    this.w = w;
    this.color = color;
    this.idCanvas = newID;

  }
  show()
  {
    this.canvas = new MyCanvas(this.id,this.h,this.w,this.color);
    this.canvas.show();
    this.inserElement(this.canvas);
  }
  hilde()
  {
    this.removeLastChild();
  }
}
