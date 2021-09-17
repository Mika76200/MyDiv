class MyLabel extends MyElementDOMHtml
{
		constructor(newID,newValue)
		{
			super();
			this.element = document.createElement('label');
			this.setValue(newValue);
			this.element.id = newID;
		}
		setFor(id)
		{
			this.element.htmlFor = id;
		}
		setValue(value)
		{
				this.element.innerHTML = value;
		}
		getValue(value)
		{
			return this.element.value;
		}
		getID()
		{
			return this.element.id;
		}
		getElement()
		{
			return this.element;
		}
}
