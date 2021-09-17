class MyProgress extends MyElementDOMHtml
{
		constructor(newID,newElementParent)
		{
			super(newID,newElementParent);
			this.element = document.createElement('progress');
			this.element.id = newID;
			this.elementParent = newElementParent;
			this.element.max = "100";
		}
		setValue(value)
		{
			this.element.value = value;
		}
		setMax(value)
		{
			this.element.max = value;
		}
}
