class MySpam extends MyElementDOMHtml
{
	constructor(newID,text,parent)
	{
		super();
		this.element = document.createElement('spam');
		this.element.id = newID;
		this.setElementParent(parent);
		this.setValue(text);
	}
	setValue(value)
	{
	 	this.element.innerHTML =  MyEmoji.emojiDecode(value);
	}
	addValue(value)
	{
		this.setValue(this.getValue() + value);
	}
	setColorText(color)
	{
		this.element.style.color = color;
	}
	setLeft()
	{
		this.element.style.textAlign = "left";
	}
	getValue()
	{
		return this.element.innerHTML;
	}
}
class MyErrorSpam extends MySpam
{
	constructor(newID,textError)
	{
		super(newID,textError);
		this.setColorText(MyColorRed.getColor());
	}
}
class MyErrorSpamNewPublication extends MyErrorSpam
{
	constructor(newID,textError)
	{
		super(newID,textError);
		this.setDefaultMargin();
		this.setJustifyContent('flex-end');
		this.show();
	}
}
