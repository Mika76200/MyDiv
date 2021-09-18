

class MyInputButtonBar extends MyInsideDivVertical
{
	constructor(newID,parent)
	{
		super(newID,parent);
	}
	addButton(textButton,Color,CALLBACK)
	{
		this.anchorButton = new MyAnchorBouttonInputBar('anchorBotton_'+textButton,textButton,textButton);
		this.anchorButton.setColorText(ColorAnchorAction.getColor());
		this.anchorButton.addEventListener('click',()=>{CALLBACK();});
		this.addInput(this.anchorButton);
	}
	setZindexButton()
	{
		if(this.hasChildNodes())
		{
				var output = this.element;
				var child  = output.firstChild;
				while(child)
				{
						child.style.zIndex = 1;
						child = output.firstChild;
				}
		}
	}
}
class MyInputButtonBarH extends MyInputButtonBar
{

	constructor(newID,parent)
	{
		super(newID,parent);
		this.setBackGroundColor(ColorInputBar.getColor());
		this.setFlexDirection('row');
		this.setDisplay('flex');
		this.setJustifyContent('flex-end');
	}
}
	////////////////////////////////////////////

class MyInputButtonBarV extends MyInputButtonBar
{

	constructor(newID,parent)
	{
		super(newID,parent);
		this.setBackGroundColor(ColorInputBar.getColor());
		this.setFlexDirection('column');
		this.setDisplay('flex');
	}
}
/////////////////////////////////////
class MyInputButtonDialBar extends MyInputButtonBarH
{
	constructor(newID,textOKButton,CALLBACK,parent)
	{
		super(newID,parent);
		this.addButton(textOKButton,ColorAnchorActionConfirm.getColor(),CALLBACK);
	}
}
class MyInputButtonAutoDialBar extends MyInputButtonBarH
{
	constructor(newID,parent)
	{
		super(newID,parent);
	}
	setDialBar(textOKButton,CALLBACK)
	{
		this.addButton(textOKButton,ColorAnchorActionConfirm.getColor(),CALLBACK);
	}

}
////////////////////////////////
class MyInputButtonConfirmBar extends MyInputButtonAutoDialBar
{
	constructor(newID,parent)
	{
		super(newID,parent)
	}
	setConfirmBar(textOKButton,CALLBACKConfirm,textCancel,CALLBACKCancel)
	{
		this.addButton(textOKButton,ColorAnchorActionConfirm.getColor(),CALLBACKConfirm);
		this.addButton(textCancel,ColorAnchorActionCancel.getColor(),CALLBACKCancel);
	}

}
////////////////////////////////////////////////////////////////////////////
class TypeInput extends Array
{
	constructor(type,textOkOrSend,textCancel)
	{
		super();
		this.push(type);
		this.push(textOkOrSend);
		this.push(textCancel);

	}
	getType()
	{
		return this[0];
	}
	getTextOkOrSend()
	{
		return this[1];
	}
	getTextCancel()
	{
		return this[2];
	}
}
///////////////////////////////////////////////////////////////////////////
class MyInputButtonAutoConfig extends MyInputButtonConfirmBar
{
	constructor(newID,type,CALLBACKConfirm,CALLBACKCancel,parent)
	{
		super(newID,parent);
		if(type.getType() === 'ConfirmBar')
		{
			this.setConfirmBar(type.getTextOkOrSend(),CALLBACKConfirm,type.getTextCancel(),CALLBACKCancel);
		}
		else if(type.getType() === 'DialBar')
		{
			this.setDialBar(type.getTextOkOrSend(),CALLBACKConfirm);
		}
		else if(type.getType() === 'SendBar')
		{
			this.setConfirmBar(type.getTextOkOrSend(),CALLBACKConfirm,type.getTextCancel(),CALLBACKCancel);
		}

	}
}
