class MyDialog extends MyOverlayVertical
{
  constructor(newID,height,width,textHeader,elementContent,CALLBACK)
  {
      super(newID,height,width,undefined);

      this.divHeader = new MyHeader('header_div_'+newID,textHeader,4,parent);
      this.divHeader.setBackGroundColor(BackGroundDivHeaderOverlay.getColor());
  		this.content = elementContent;

      this.inputButtonBar = new MyInputButtonAutoConfig('input_bar_'+newID,new TypeInput('DialBar',AutoLanguage.Ok),()=>{CALLBACK();this.closeMe();},this);

      this.inserDivToOverlay(this.divHeader);
      this.inserSeparatorHorizontal();
      this.inserDivToOverlay(this.content);
      this.inserSeparatorHorizontal();
      this.inserDivToOverlay(this.inputButtonBar);

  }
}
