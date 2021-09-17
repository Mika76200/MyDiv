
class MySeparator extends MyElementDOMHtml
{
	constructor(newID,h,w,parent)
	{
		super(newID,parent);
		this.element = document.createElement('div');
		this.element.id = newID;
		this.elementParent = parent;
		this.element.style.height = h;
		this.element.style.width =  w;
		this.setBackGroundColor(ColorSeparator.getColor());
		this.setDisplay("flex");
	}
}
////////////////////////////////////////////////////////////////
class MySeparatorHorizontal extends MySeparator
{
	constructor(newID,h,w,parent)
	{
		super(newID,h,w,parent);
	}
}
//////////////////////////////////////////////////////////////////
class MySeparatorVertical extends MySeparator
{
	constructor(newID,h,w,parent)
	{
		super(newID,h,w,parent);
	}
}
//////////////////////////////////////////////////////////
