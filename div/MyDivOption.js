class MyDivOption extends MyInsideDivHorizontal
{

	constructor(newID,canClose,canOption,setTextDefault,parent)
	{
		super(newID,parent);
		if(canOption === true)
		{
				this.setEventOption(setTextDefault);
				this.setEvent();
		}
		if(canClose === true)
		{
				this.imgClose = new IconImage("icon_option","/dataweb/img/close.png",this);
				this.imgClose.setMargin(10);
				this.inserImage(this.imgClose,'left');
				this.setEventClose();
		}
	}
	setEvent()
	{
			this.option.addEventListener("change",() => {this.option.execCALLBACK();this.option.resetIndex();});
	}
	setEventOption(setTextDefault)
	{
			this.option = new MyInputSelectOption("option");
			this.option.setTextAlign('center');
			if(setTextDefault === true)
			{
					this.option.addOption(new MyOptionSelectOption(AutoLanguageMyDiv.defaultOption,function(){}));
					this.option.setSize(undefined,30);
			}
			this.inserElement(this.option,'left');
	}
	setEventClose()
	{
			this.imgClose.addEventListener("click",()=>{this.elementParent.closeMe();});
	}
	addOption(option)
	{
		this.option.addOption(option);
	}
	deleteAllOption()
	{
		this.option.deleteAllOption();
	}
	getOption()
	{
		return this.option;
	}
	setBackGroundColorSelect(C)
	{
		this.option.setBackGroundColor(C);
	}

}
