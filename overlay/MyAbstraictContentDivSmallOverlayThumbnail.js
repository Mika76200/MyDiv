

class MyAbstraictContentDivSmallOverlayThumbnail extends MyInsideDivVertical
{
  constructor(newID,p)
  {
    super(newID,p);
    this.setSizePourCent(100,100);
  }
  setView(marginTop)
  {
    this.removeAllChilds();
    this.setMarginTop(marginTop);

    this.divImageSelect = new MyInsideDivHorizontal('div_image_select',this);
    this.divImageSelect.setOverFlowX();
    this.divImageSelect.setSizePourCent(20,100);
    this.divImageSelect.deleteMargin();

    this.divImagePrev = new MyInsideDivVertical('div_image_center',this);
    this.divImagePrev.setSizePourCent(80,100);
    this.divImagePrev.deleteMargin();

    this.inserElement(this.divImagePrev);
    this.inserElement(this.divImageSelect);
  }
  getSizeMiniImagePreview()
  {
    return this.divImageSelect.h();
  }
  getDivImageSelect()
  {
    return this.divImageSelect;
  }
  getDivImagePrev()
  {
    return this.divImagePrev;
  }
}
