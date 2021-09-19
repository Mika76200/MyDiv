

class MyDiv extends MyElementDOMHtml
{
		constructor(newID,newElementParent)
		{
			super(newID,newElementParent);
			this.element = document.createElement('div');
			this.element.id = newID;
			this.setElementParent(newElementParent);

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
