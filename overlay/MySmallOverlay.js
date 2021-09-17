

class MyContentSmallOverlay extends MyAbstraictContentDivSmallOverlayThumbnail
{
  constructor(p)
  {
    super("content_snall_overlay_file",p);
  }
  setOneFileView(marginTop)
  {
    this.removeAllChilds();
    this.setMarginTop(marginTop);
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

      var img = new MiniImagePrevThumbnailOverlay('image_preview_'+file.id,file.wayFile,divPrevFile.h(),divPrevFile);
          img.setEventClicked(()=>{this.setImageCenter(file,file.id);})

  }
  setImageCenter(thumbnailFile)
  {
      this.divImagePrev.removeAllChilds();

      var divImgCenter = new MyDivFile('div_file_prev_img_profil_'+thumbnailFile.id,null,this.divImagePrev);
          divImgCenter.setSizePourCent(100,100);
          this.divImagePrev.inserDiv(divImgCenter);
      var imgSelect = new ImagePrevThumbnailOverlay('img_select'+thumbnailFile.id,thumbnailFile.wayFile,divImgCenter.h(),divImgCenter);
  }
}

class MySmallOverlay extends MySmallThumbnailOverlay
{
  constructor(divPrev,p)
  {
      super('small_overlay_file',new MyContentSmallOverlay(p),p);

      this.center.setOneFileView(this.getMarginButtonBar());
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
        this.center.setView(this.getMarginButtonBar());

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
