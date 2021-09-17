class MyTextArea extends MyElementDOMHtml
{
	constructor(newID)
	{
		super();
		this.element = document.createElement('textarea');
		this.element.value ="";
		this.element.id = newID;
		this.setDefaultStyle();
		this.setBackGroundColor(BackGroundColorParagraphe.getColor());
		this.setDefaultMargin();

	}
	setDefaultStyle()
	{
		this.setStyle("border:solid 1px gray; resize: none;");
	}
	setReadOnly(bool)
	{
		this.element.readOnly = bool;
	}
	addToText(value)
	{
			this.setText(this.getText()+value);
	}
	purgeText()
	{
		this.element.value ="";
	}
	setText(text)
	{
		if(text)
		{
			if(MyEmoji.isEmoji(text))
			{
				this.element.value = MyEmoji.emojiDecode(text);
			}
			else
			{
				this.element.value = text;
			}
		}

	}
	setPlaceHolder(text)
	{
		this.element.placeholder = text;
	}
	getText()
	{
		return MyEmoji.emojiEncode(this.element.value);
	}
	setRows(value)
	{
		this.element.rows = value;
	}

}
