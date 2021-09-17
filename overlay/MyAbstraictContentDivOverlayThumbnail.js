

class MyAbstraictContentDivOverlayThumbnail  extends MyInsideDivHorizontal
{
  constructor(newID,p)
  {
    super(newID,p);
  }
  setView()
	{
		this.removeAllChilds();
		this.divImageSelect = new MyInsideDivVertical('div_image_select',this);
		this.divImageSelect.setOverFlowY();
		this.divImageSelect.setSizePourCent(100,20);
		this.divImageSelect.deleteMargin();

		this.divImagePrev = new MyInsideDivVertical('div_image_center',this);
		this.divImagePrev.setSizePourCent(100,80);
		this.divImagePrev.deleteMargin();

		this.inserElement(this.divImageSelect);
		this.inserElement(this.divImagePrev);
	}
	getSizeMiniImagePreview()
	{
		return this.divImageSelect.w();
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
