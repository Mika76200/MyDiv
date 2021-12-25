class MyHeader extends MyElementDOMHtml
{

		constructor(newID,text,categorie)
		{
			super();
			this.element = window.document.createElement('h'+categorie);
			this.element.id = newID;
			this.setValue(text);
			this.setMargin(5,5,5,5);
		}
		setValue(text)
		{
			if(this.element.innerHTML == undefined)
			{
				this.element.innerHTML = this.element.innerHTML + text;
			}
			else
			{
				 this.element.innerHTML = text;
			}
		}
		getValue()
		{
			return this.element.innerHTML;
		}
		setCenter()
		{
			this.setAlignSelf('center');
		}
		setHref(href)
		{
			this.element.href = href;
		}
		setColorText(color)
		{
			this.element.style.color = color;
		}
		setDefaultMargin()
		{

			this.element.style.marginLeft = "10px";
			this.element.style.marginRight = "10px";
			this.element.style.marginTop ="10px";
			this.element.style.marginBottom ="10px";

		}
		setAlignSelf(justify)
		{
			this.element.style.alignSelf  = justify;
		}
		setTextAlign(align)
		{
			this.element.style.textAlign   = align;
		}
		setFlex(mode)
		{
			this.element.style.flex = mode;
		}
		getElement(text)
		{
			return this.element;
		}
		addEventListener(eventTags, funct)
		{
		 	this.element.addEventListener(eventTags, funct);
		}
}
////////////////////////////////////////////////
class MyHeaderDiv extends MyHeader
{
	constructor(newID,text,categorie)
	{
		super(newID,text,categorie);
    this.setBackGroundColor(BackGroundDivHeaderOverlay.getColor());
	}
}
