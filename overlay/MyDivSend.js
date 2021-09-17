class MyDivSend extends MyOverlayVertical
{
	constructor(newID,headerSend,content,CALLBACKSend,parent)
	{
		super(newID,'auto','auto',parent);

		this.divHeader = new MyHeader('header_div',headerSend,4,parent);
		this.divHeader.setBackGroundColor(BackGroundDivHeaderOverlay.getColor());

		if(content)
		{
			this.content = content;
		}

		this.inputButtonBar = new MyInputButtonAutoConfig('input_bar_'+newID,new TypeInput('SendBar',AutoLanguage.send,AutoLanguage.cancel),
																											()=>{if(CALLBACKSend()){this.closeMe();}},()=>{this.closeMe();},this);

		this.inserDivToOverlay(this.divHeader);
		this.inserSeparatorHorizontal();
		this.inserDivToOverlay(this.content);
		this.inserSeparatorHorizontal();
		this.inserDivToOverlay(this.inputButtonBar);

	}

}
