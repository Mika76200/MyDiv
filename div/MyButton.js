class MyButton extends MyElementDOMHtml
{
		constructor(newID,name,type,text,parent)
		{
			super(newID,parent);
			this.element = document.createElement('button');
			this.element.id = newID;
      this.element.name = name;
      this.element.type = type;
			this.elementParent = parent;
      this.setImmerHtml(text);
		}
		click()
		{
			this.element.click();
		}
}
class MyButtonFile extends MyButton
{
	constructor(newID,name,text,parent)
	{
		super(newID,name,"button",text,parent);
	}
}
