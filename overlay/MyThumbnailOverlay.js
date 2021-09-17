class MyThumbnailOverlay extends MyOverlayVertical
{
  constructor(newID,height,width,textHeader,typeInputeBar,CALLBACKConfirm,divCenter,parent)
  {
      super(newID,height,width,parent);

      this.divHeader = new MyHeader('header_div',textHeader,4,parent);
      this.divHeader.setBackGroundColor(BackGroundDivHeaderOverlay.getColor());

      this.center = divCenter
      this.center.deleteMargin();

      this.inputButtonBar = new MyInputButtonAutoConfig('input_bar_'+newID,typeInputeBar,()=>{if(CALLBACKConfirm()){this.closeMe();}},()=>{this.closeMe();},this);
      this.inputButtonBar.deleteMargin();
      this.inputButtonBar.setJustifyContent('flex-end');


      this.inserDivToOverlay(this.divHeader);
      this.inserSeparatorHorizontal();
      this.inserDivToOverlay(this.center);

      this.inserSeparatorHorizontal();
      this.inserDivToOverlay(this.inputButtonBar);

      this.center.setSize(pourCent(90,this.h()));
  }
  inserToCenter(element,justifyContent)
  {
    this.center.inserDiv(element,justifyContent);
  }
}
class MyThumbnailOverlayHorizontal extends MyThumbnailOverlay
{
  constructor(newID,height,width,textHeader,typeInputeBar,CALLBACKConfirm,divCenter,p)
  {
      super(newID,height,width,textHeader,typeInputeBar,CALLBACKConfirm,divCenter,p);
  }
}
class MyThumbnailOverlayVertical extends MyThumbnailOverlay
{
  constructor(newID,height,width,textHeader,typeInputeBar,CALLBACKConfirm,divCenter,p)
  {
      super(newID,height,width,textHeader,typeInputeBar,CALLBACKConfirm,divCenter,p);
  }
}
