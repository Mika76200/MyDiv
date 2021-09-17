class Paragraphe extends MyElementDOMHtml
{
	constructor(newID,text,titleText)
	{
		super();
		this.element = document.createElement('p');
		this.element.value ="";
		this.element.id = newID;
		this.setBackGroundColor(BackGroundColorParagraphe.getColor());
		this.setDefaultMargin();
	//	this.element.style.width=  "150px"??
	//	this.element.style.overflow = 'hidden';???
		this.setText(text);
		this.setAttribute('title',titleText);

	}
	shoowMe(bool)
	{
		if(bool)
		{
			this.element.style.display = "block";
		}
		else
		{
			this.element.style.display = "none";
		}
	}
	addToText(value)
	{
			this.setText(this.getText()+value);
	}
	setText(text)
	{
		this.element.innerHTML = MyEmoji.emojiDecode(text);
	}
	getText()
	{
		return this.element.innerHTML;
	}
}
