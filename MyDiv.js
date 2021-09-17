

class MyDiv extends MyElementDOMHtml
{
		constructor(newID,newElementParent)
		{
			super(newID,newElementParent);
			this.element = document.createElement('div');
			this.element.id = newID;
			this.setElementParent(newElementParent);

		}
		inserDivElementDOM(elementDOM,justify)
		{
			if(!justify)
			{
				this.element.appendChild(elementDOM);
			}
			else
			{
				elementDOM.style.justifyContent = justify;
				this.element.appendChild(elementDOM);

			}
		}
		inserSpam(spam,justify)
		{
				this.inserElementDOM(spam.getElement(),justify);
		}
		inserImage(image,justify)
		{
				this.inserElementDOM(image.getElement(),justify);
		}
		inserAnchor(anchor,justify)
		{
				this.inserElementDOM(anchor.getElement(),justify);
		}
		deleteAnchor(anchor,justify)
		{
				this.deleteElementDOM(anchor);
		}
		inserHeader(header,justify)
		{
				this.inserElementDOM(header.getElement(),justify);
		}
		inserInput(input,justify)
		{
				this.inserElementDOM(input.getElement(),justify);
		}
		addInput(input,justify)
		{
				this.inserElementDOM(input.getElement(),justify);
		}
		inserTextArea(textArea,justify)
		{
				this.inserElementDOM(textArea.getElement(),justify);
		}
		inserDiv(div,justify)
		{
				this.inserDivElementDOM(div.getElement(),justify);
		}
		inserElement(element,justify)
		{
				this.inserElementDOM(element.getElement(),justify);
		}
		inserButtonBar(bouttonBar,justify)
		{
				this.inserElementDOM(bouttonBar.getElement(),justify);
		}
		inserSeparatorHorizontal()
		{
				var separator = new MySeparatorHorizontal('separator'+this.element.id,'1px','100%');
						this.inserSeparator(separator);
		}
		inserSeparatorVertical()
		{
				var separator = new MySeparatorVertical('separator'+this.element.id,'100%','2px');
						this.inserSeparator(separator);
		}
		inserSeparator(div,justify)
		{
				this.inserElementDOM(div.getElement(),justify);
		}
		setDisplayHorizontal()
		{
			this.setBackGroundColor(ColorDisplayDiv.getColor());
			this.setBorderStyle('solid');
			this.setBorderColor(ColorBorderDivDisplay.getColor());

			if(MyScreemManager.isSmallScreem())
			{
				this.deleteMargin();
			}
			else
			{
				this.setDefaultBorderRadius();
			}
			this.setDefaultSizeBorder();
			this.setDefaultMargin();

			this.setFlexDirection("row");
			this.setDisplay('flex');
		}
		setDisplayVertical()
		{
			this.setBackGroundColor(ColorDisplayDiv.getColor());
			this.setBorderStyle('solid');
			this.setBorderColor(ColorBorderDivDisplay.getColor());
			if(MyScreemManager.isSmallScreem())
			{
				this.deleteMargin();
			}
			else
			{
				this.setDefaultBorderRadius();
			}
			this.setDefaultSizeBorder();
			this.setDefaultMargin();

			this.setFlexDirection("column");
			this.setDisplay('flex');
		}

}
//////////////////////////////////////////
class MyDisplayDiv extends MyDiv
{
	constructor(newID,newElementParent)
	{
		super(newID,newElementParent);
		this.setDefaultMargin();
		this.setDisplay('flex');
	}
}
//////////////////////////////////////////
class MyDivHorizontal extends MyDiv
{
	constructor(newID,newElementParent)
	{
		super(newID,newElementParent);
		this.setFlexDirection("row");
		this.setDisplay('flex');
	}
}
/////////////////////////////////////
class MyDivVertical extends MyDiv
{
	constructor(newID,newElementParent)
	{
		super(newID,newElementParent);
		this.setFlexDirection("column");
		this.setDisplay('flex');
	}
}

//////////////////////////////////////////
class MyDisplayDivHorizontal extends MyDiv
{
	constructor(newID,newElementParent)
	{
		super(newID,newElementParent);
		this.setDisplayHorizontal();
	}
}
////////////////////////////////////////////
class MyDisplayDivVertical extends MyDiv
{
	constructor(newID,newElementParent)
	{
		super(newID,newElementParent);
		this.setDisplayVertical();
	}
}
////////////////////////////////////////////
class MyBackGroumdDiv extends MyDiv
{
	constructor(newID,newElementParent)
	{
		super(newID,newElementParent);
		this.setBackGroundColor(BackGroundColorDiv.getColor());
	}
}
////////////////////////////////////////////
class MyBackGroumdDivVertical extends MyBackGroumdDiv
{
	constructor(newID,newElementParent)
	{
		super(newID,newElementParent);
		this.setBackGroundColor(BackGroundColorDiv.getColor());
		this.setFlexDirection("column");
		this.setDisplay('flex');
	}
}
//////////////////////////////////////////////////
class MyBackGroumdDivHorizontal extends MyBackGroumdDiv
{
	constructor(newID,newElementParent)
	{
		super(newID,newElementParent);
		this.setBackGroundColor(BackGroundColorDiv.getColor());
		this.setFlexDirection("row");
		this.setDisplay('flex');
	}
}
////////////////////////////////////////////
class MyInsideDiv extends MyDiv
{
	constructor(newID,newElementParent)
	{
		super(newID,newElementParent);
		this.setBackGroundColor(InsideColorDiv.getColor());
		this.setFlexDirection("column");
		this.setDisplay('flex');
	}
}
class MyInsideDivVertical extends MyInsideDiv
{
	constructor(newID,newElementParent)
	{
		super(newID,newElementParent);
		this.setDefaultMargin();
	}
}
//////////////////////////////////////////////////
class MyInsideDivHorizontal extends MyDiv
{
	constructor(newID,newElementParent)
	{
		super(newID,newElementParent);
		this.setBackGroundColor(InsideColorDiv.getColor());
		this.setDefaultMargin();
		this.setFlexDirection("row");
		this.setDisplay('flex');
	}
}
/////////////////////////////////////////////////
class MyDivFile extends MyDiv
{
	constructor(newID,refDivPrevLink,newElementParent)
	{
		super("div_file_"+newID,newElementParent);
		this.divPrevLink = refDivPrevLink;
		this.setBackGroundColorDefault();


	}
	setBackGroundColorDefault()
	{
		this.setBackGroundColor(BackGroundColorDivFile.getColor());
	}
	setBackGroundColorSelect()
	{
		this.setBackGroundColor(BackGroundColorDivFileSelect.getColor());
	}
	getDivPrevLink()
	{
		return this.divPrevLink;
	}
}
class MyDivFileProfilAndBannierGroup extends MyDiv
{
	constructor(newElementParent)
	{
		super("div_file",newElementParent);
		this.setBackGroundColorDefault();
	}
	setBackGroundColorDefault()
	{
		this.setBackGroundColor(BackGroundColorDivFileProfilAndBannierGroup.getColor());
	}
}
/////////////////////////////////////////////////
class MyDivFilesBigOverlay extends MyDivFile
{
	constructor(newID,refDivPrevLink,newElementParent)
	{
		super(newID,refDivPrevLink,newElementParent);
	}
}
/////////////////////////////////////////////
class MyDivFilesSmallOverlay extends MyDivFile
{
	constructor(newID,refDivPrevLink,newElementParent)
	{
		super(newID,refDivPrevLink,newElementParent);
		this.setTextAlign('center');
		this.setAlignSelf('center');
		this.setDisplay('flex');
	}
}
