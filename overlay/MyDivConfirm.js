class MyDivConfirm extends MyOverlayVertical
{
	constructor(newID,headerConfirm,content,CALLBACKConfirm,parent)
	{
		super(newID,'auto','auto',parent);

		this.divHeader = new MyHeader('header_div',headerConfirm,4,parent);
		this.divHeader.setBackGroundColor(BackGroundDivHeaderOverlay.getColor());

		if(content)
		{
			this.content = content;
		}

		this.inputButtonBar = new MyInputButtonAutoConfig('input_bar_'+newID,new TypeInput('ConfirmBar',AutoLanguageMyDiv.confirm,AutoLanguageMyDiv.cancel),
																											()=>{CALLBACKConfirm();this.closeMe();},()=>{this.closeMe();},this);

		this.inserDivToOverlay(this.divHeader);
		this.inserSeparatorHorizontal();
		this.inserDivToOverlay(this.content);
		this.inserSeparatorHorizontal();
		this.inserDivToOverlay(this.inputButtonBar);
	}
}
