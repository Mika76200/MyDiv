

class MySmallThumbnailOverlay extends MyOverlayHorizontal
{
  constructor(newID,content,parent)
  {
      super(newID,'100%','100%');

      this.deleteTransform();
      this.setPositionInitial();
      this.deleteMargin();

      this.divView.setBackGroundColor(MyColorBlackOverlay.getColor());

      this.closeIcon = new MyAnchorIconBoutton('close_overlay',"noWay",AutoLanguage.close,undefined,this);
      this.closeIcon.hileIcon();
      this.closeIcon.setPositionAbsolute();
      this.closeIcon.setDisplay('flex');
      this.closeIcon.addEventListener('click',()=>{this.closeMe();});
      this.divView.inserDiv(this.closeIcon);

      this.divPrevlink = new MyDivPreViewLinkSmallOverlay(this);
      this.divPrevlink.setMargin('auto');
      this.divView.inserDiv(this.divPrevlink);

      this.center = content;
      this.center.deleteMargin();
      this.center.setSize(pourCent(90,this.h()));

      this.inserDivToOverlay(this.center);
      this.divView.setDisplay('flex');
  }
  getMarginButtonBar()
  {
    return this.closeIcon.h();
  }
  setDivAddOnFonction(divAddOnFonction)
  {
    this.divView.inserAfter(divAddOnFonction,this.divPrevlink);
  }
  setData(divPrev)
  {
    this.divPrevlink.setData(divPrev.getNewsLink(),this.h(),this.w());
  }
}
