

class MyContentDivBigOverlay extends MyAbstraictContentDivOverlayThumbnail
{
  constructor(p)
  {
    super("content_big_overlay_file",p);
  }
  setOneFileView()
  {
    this.removeAllChilds();

    this.divImagePrev = new MyInsideDivVertical('div_image_center',this);
    this.divImagePrev.setSizePourCent(100,100);
    this.divImagePrev.deleteMargin();

    this.inserElement(this.divImagePrev);
  }
  addImagePrev(file)
  {
     var sizeMiniFile = this.getSizeMiniImagePreview();
      var divPrevFile = new MyDivFile('div_prev_img_'+file.id,null,this.divImageSelect);
          divPrevFile.setSize(sizeMiniFile,sizeMiniFile);
          divPrevFile.setFixSize();
          this.divImageSelect.inserDiv(divPrevFile);

      var img = new ImagePrevThumbnailOverlay('image_preview_'+file.id,file.wayFile,sizeMiniFile,divPrevFile);
          img.setEventClicked(()=>{this.setImageCenter(file,file.id);})

  }
  setImageCenter(thumbnailFile)
  {
      this.divImagePrev.removeAllChilds();

      var divImgCenter = new MyDivFile('div_file_prev_img_profil_'+thumbnailFile.id,null,this.divImagePrev);
          divImgCenter.setSizePourCent(100,100);
          this.divImagePrev.inserDiv(divImgCenter);
      var imgSelect = new ImageCentreThumbnailOverlay('img_select'+thumbnailFile.id,thumbnailFile.wayFile,divImgCenter.h(),0,divImgCenter);
  }
}
class MyBigOverlay extends MyDivThumbnail
{
  constructor(divPrev,p)
  {
      super('big_overlay_file','80%','80%',AutoLanguage.previewOverlayFileHeader,
            new TypeInput('DialBar',AutoLanguage.Ok),()=>{this.closeMe();},new MyContentDivBigOverlay(p),p);

      this.center.setOneFileView();
      this.arrayFiles = null;

      if(divPrev.getArrayWayFiles)
      {
        this.arrayFiles = divPrev.getArrayWayFiles();
      }
      else if (divPrev.getTmpListFiles)
      {
        this.arrayFiles = divPrev.getTmpListFiles();
      }

      if(this.arrayFiles.length > 1)
      {
        this.center.setView();
        this.arrayFiles.forEach((item, i) =>
        {
          var thumbnailFile = new FileThumbnail(i,item);
        	this.center.addImagePrev(thumbnailFile);
        });
      }

      var thumbnailFile = new FileThumbnail(0,this.arrayFiles[0]);
      this.center.setImageCenter(thumbnailFile);
  }

}
