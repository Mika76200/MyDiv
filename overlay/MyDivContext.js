class MyDivContext extends MyDisplayDivVertical
{
	constructor(newID,parent)
 	{
			super(newID,parent);
      this.deleteMargin();
      this.deleteBorderRadius();
    //  this.setPosition(this.elementParent.getPosition());
      this.setPositionFixed();
      this.setZIndex('1');
      document.body.appendChild(this.getElement());
      this.setDisplay('flex');
			this.setPositionContext();
			this.initEventMousse(()=>{this.show();},
															()=>{this.hile();});
			this.addEventScroll(()=>{this.hile();});
	}
	setPositionContext()
	{
		this.c = this.elementParent.getPositionToScreen();
		this.c.y = this.c.y + this.elementParent.h();// margin
		this.c.y = this.c.y - window.scrollY;// margin
		this.setPosition(this.c);
	}
	setPositionContextTop()
	{
		this.ct = this.elementParent.getPositionToScreen();
		this.setPosition(this.ct);
	}

}
