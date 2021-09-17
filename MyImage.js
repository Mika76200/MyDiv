class MyImage extends MyElementDOMHtml
{
  constructor(idImg,wayImg,parent)
  {
     super();
     this.element = new Image();
     this.orientation = 0;
     this.element.id = idImg;
     this.elementParent = parent;
     this.hasRotation = true;

       this.element.addEventListener('load', () =>
       {
           this.element.innerHTML = '';
           if(parent)parent.inserElementDOM(this.element);

           this.setAutoRotation();
           this.setParametreImg();
       });

     this.element.src = wayImg;
     this.element.style.display = 'block';
     this.element.innerHTML = '<span>Chargement en cours...</span>';
  }
  setParametreImg(h,w)
  {
    /// fonction virtuel
  }
  setBlur()
  {
    this.element.style.filter = " blur(10px)";
  }
  setEventClicked(CALLBACK)
  {
    this.addEventListener("click",()=>{CALLBACK();});
  }
  setAutoRotation()
  {
    if(MyDeviceManager.isQwantMoble())
    {
      if(this.orientation && this.hasRotation)
      {
        switch(this.orientation)
        {
          case 1:
              this.setRotation(0);
            break;
          case 2:
              // mirror horizontal
            break;
          case 3:
              this.setRotation(180);
            break;
          case 4:
               // mirror verticzl
            break;
          case 5:
               //Mirror horizontal and rotate 270 CW
            break;
          case 6:
              this.setRotation(90);
            break;
          case 7:
               // Mirror horizontal and rotate 90 CW
            break;
          case 8:
              this.setRotation(-90);
            break;
        }
      }
    }
  }
  setRotation(deg)
  {
    this.element.style.webkitTransform = 'rotate('+deg+'deg)';
    this.element.style.mozTransform    = 'rotate('+deg+'deg)';
    this.element.style.msTransform     = 'rotate('+deg+'deg)';
    this.element.style.oTransform      = 'rotate('+deg+'deg)';
    this.element.style.transform       = 'rotate('+deg+'deg)';
  }
  setOrientation(o)
  {
    this.orientation = o;
  }
  getOrientation()
  {
    return this.orientation;
  }
  static isImage(way)
  {
    if(way.indexOf(".png") > -1 || way.indexOf(".jepg")  > -1 || way.indexOf(".jpg") > -1 ||
       way.indexOf("tiff") > -1 || way.indexOf(".bnp") || way.indexOf(".gif"))
    {
        return true;
    }
    return false;
  }
}
class IconImage extends MyImage
{
  constructor(idImg,wayImg,parent)
  {
     super(idImg,wayImg,parent);
  }
  setParametreImg()
  {
      this.setMaxSize(32);
  }
}
class ImageAutoSize extends MyImage
{

  constructor(idImg,wayImg,sizeMax,parent)
  {
      super(idImg,wayImg,parent);
      this.sizeMax = sizeMax;
      this.marginTop = 0;
      this.marginLeft = 0;
      this.isMargin = true;
  }
  setIsMargin(bool)
  {
      this.isMargin = bool;
  }
  setParametreImg()
  {
    if(this.isMargin)
    {
        if(this.element.height > this.element.width)
        {
            this.setSizeHeigth();
            this.setMarginSizeHeigth()
        }
        else if(this.element.height < this.element.width)
        {
            this.setSizeWidth();
            this.setMarginSizeWidth();
        }
        else if(this.element.height === this.element.width)
        {
            this.setSize(this.sizeMax,this.sizeMax);
        }
    }
    else
    {
      this.element.width = this.sizeMax;
    }
  }
  setMarginSizeHeigth()
  {
    var diffL =  this.sizeMax - this.w();
    this.marginLeft = diffL /2;
  }
  setMarginSizeWidth()
  {
    var diffT =  this.sizeMax - this.h();
    this.marginTop = diffT /2;
    this.setMarginValueText("auto","auto",this.marginTop+"px",'auto');
  }
  setSizeHeigth()
  {
      this.element.height = this.sizeMax;
  }
  setSizeWidth()
  {
      this.element.width = this.sizeMax;
  }
}
class ImagePreviewOverlayable extends ImageAutoSize
{
  constructor(idImg,wayImg,s,parent)
  {
    super(idImg,wayImg,s,parent);
    this.addEventListener("click",()=>
    {
      if(!MyScreemManager.isSmallScreem())
      {
        var bigOverlay = new MyBigOverlay(parent.getDivPrevLink(),this);
      }
      else
      {

        var smallOverlay = new MySmallOverlay(parent.getDivPrevLink(),this);
      }
    });
  }
}
class ImageAutoSizeW extends MyImage
{
  constructor(idImg,wayImg,s,parent)
  {
    super(idImg,wayImg,parent);
    this.s = s;
 }
 setParametreImg()
 {
     this.element.width = this.s;
 }
}
class ImageAutoSizeH extends ImageAutoSize
{
  constructor(idImg,wayImg,s,parent)
  {
     super(idImg,wayImg,s,parent);
  }
}
class ImagePreviewMessage extends ImagePreviewOverlayable
{
  constructor(idImg,wayImg,s,parent)
  {
     super(idImg,wayImg,s,parent);
  }
}
class ImageNews extends ImagePreviewOverlayable
{
  constructor(idImg,wayImg,s,parent)
  {
    super(idImg,wayImg,s,parent);
    this.hasRotation = false;
  }
}
///////////////////////////////
class ImagePreview extends ImageAutoSize
{
  constructor(idImg,wayImg,s,orientation,parent)
  {
    super(idImg,wayImg,s,parent);
    this.orientation = orientation;
  }
}
/////////////////////////////////////////////////
class ImagePreviewDeletable extends ImagePreview
{
  constructor(idImg,wayImg,s,orientation,parent)
  {
    super(idImg,wayImg,s,orientation,parent);
    this.deleteIcon = new MyAnchorIconDeleteBoutton("delete_anchor_image_"+idImg,s,this);
    this.elementParent.inserDiv(this.deleteIcon);
    this.setEventMouse();
    this.hileIcon();
  }
  setEventMouse()
  {
    this.addEventListener("mouseenter",()=>{this.showIcon();});
    this.deleteIcon.addEventListener("mouseleave",()=>{this.hileIcon();});
  }
  setEventIcon(CALLBACK)
  {
    this.deleteIcon.setAction("click",()=>{CALLBACK();});
  }
  setEventClicked(CALLBACK)
  {
    this.deleteIcon.addEventListener("click",()=>{CALLBACK();});
    //this.addEventListener("click",()=>{CALLBACK();});
  }
  setSelect()
  {
    this.getParent().setBackGroundColorSelect();
    this.showIcon();
  }
  setDisSelect()
  {
    this.getParent().setBackGroundColorDefault();
    this.hileIcon();
  }
  hileIcon(deleteIcon)
  {
      this.deleteIcon.hile();
  }
  showIcon()/// virtuel
  {

  }
}
class ImagePreviewDeletableH extends ImagePreviewDeletable
 {
  constructor(idImg,wayImg,s,orientation,parent)
  {
    super(idImg,wayImg,s,orientation,parent);
  }
  showIcon()
  {
      var newCoodonate = this.getPositionToScroll(this.elementParent.getParent(),this.elementParent);
          this.deleteIcon.setPosition(new Coordinate2D(this.elementParent.getParent().offsetLeft(),newCoodonate.y-this.marginTop));
          this.deleteIcon.setPositionAbsolute();
          this.deleteIcon.show();
  }
}
class ImagePreviewDeletableW extends ImagePreviewDeletable
{
  constructor(idImg,wayImg,s,orientation,parent)
  {
    super(idImg,wayImg,s,orientation,parent);
  }
  showIcon()
  {
      var newCoodonate = this.getPositionToScroll(this.elementParent.getParent(),this.elementParent);
          this.deleteIcon.setPosition(new Coordinate2D(newCoodonate.x-this.marginLeft,this.elementParent.getParent().offsetTop()));
          this.deleteIcon.setPositionAbsolute();
          this.deleteIcon.show();
  }
}
/////////////////////////////////////////////////////

class ImageCentreThumbnailOverlay extends ImagePreview
{
  constructor(idImg,wayImg,h,orientation,parent)
  {
    super(idImg,wayImg,h,orientation,parent);
  }
}
class ImageCentreThumbnailMiniOverlay extends ImageCentreThumbnailOverlay
{
  constructor(idImg,wayImg,h,orientation,parent)
  {
    super(idImg,wayImg,h,orientation,parent);
  }
  setMarginSizeWidth()
  {
    var diffT =  this.sizeMax - this.h();
    this.marginTop = diffT /2;
    this.setMarginValueText('0px',"0px",this.marginTop+"px",'auto');
  }
  setSizeWidth()
  {
      this.element.style.width = '100%';
  }
}
//
class ImagePrevThumbnailOverlay extends ImageAutoSize
{
  constructor(idImg,wayImg,w,parent)
  {
     super(idImg,wayImg,w,parent);
  }
}
class MiniImagePrevThumbnailOverlay extends ImageAutoSize
{
  constructor(idImg,wayImg,w,parent)
  {
     super(idImg,wayImg,w,parent);
  }
}
///////////////////
class ImagePreviewDeletablePublicationPreview extends ImagePreviewDeletableW
{
  constructor(idImg,wayImg,w,orientation,parent)
  {
    super(idImg,wayImg,w,orientation,parent);
  }
}
class ImagePrevewThumbnailOverlayDeletetable extends ImagePreviewDeletableH
{
  constructor(idImg,wayImg,w,parent)
  {
    super(idImg,wayImg,w,0,parent);
  }
}
class ImagePreviewDeletableSmallOverlayPreview  extends ImagePreviewDeletableW
{
  constructor(idImg,wayImg,w,orientation,parent)
  {
    super(idImg,wayImg,w,orientation,parent);
  }
}
class MiniImage extends ImageAutoSize
{
  constructor(idImg,wayImg,size,parent)
  {
     super(idImg,wayImg,size,parent);
  }
}

class MiniImageNetWorkSocialShorcut extends ImageAutoSize
{
  constructor(idImg,wayImg,size,href,alt,parent)
  {
    super(idImg,wayImg,size,parent);
    this.setAttribute('title',alt);
    this.addEventListener("click",()=>{location.href = href;})
    this.setCursor('pointer');
  }
}
class MiniImageProfil extends ImageAutoSize
{
  constructor(idImg,wayImg,parent)
  {
     super(idImg,wayImg,HEIGTHIMAGEMINIPROFIL,parent);
  }
}
class MiniImageProfilChat extends ImageAutoSize
{
  constructor(idImg,wayImg,parent)
  {
     super(idImg,wayImg,HEIGTHIMAGEMINIPROFILCHAT,parent);
  }
}
class MiniImageGroup extends ImageAutoSize
{
  constructor(idImg,wayImg,parent)
  {
     super(idImg,wayImg,HEIGTHIMAGEMINIGROUP,parent);
  }
}
class MiniImageProfilNotifs extends ImageAutoSize
{
  constructor(idImg,wayImg,parent)
  {
     super(idImg,wayImg,HEIGTHIMAGEMINIPROFILNOTIFS,parent);
  }

}
class MyGifImage extends MyImage
{
  constructor(idImg,wayImg,parent)
  {
     super(idImg,wayImg,parent);
     this.setNameClass('gif');
  }

}
///////////////////
class ImageAutoSizeProfilAndGroupBannier extends ImageAutoSize
{
  constructor(idImg,wayImg,s,parent)
  {
    super(idImg,wayImg,s,parent);
  }
  setParametreImg()
  {
    if(this.isMargin)
    {
        if(this.element.height > this.element.width)
        {
            this.setSizeHeigth();
            this.setMarginSizeHeigth()
        }
        else if(this.element.height < this.element.width)
        {
            this.setSizeWidth();
            this.setMarginSizeWidth();
        }
        else if(this.element.height === this.element.width)
        {
            this.setSize(this.sizeMax,this.sizeMax);

        }
    }
    else
    {
      this.element.width = this.sizeMax;
    }
    this.element.style.width =  "100%";
    this.element.style.height =  'auto';
  }
}
class ImageProfil extends ImageAutoSizeProfilAndGroupBannier
{
  constructor(idImg,wayImg,s,parent)
  {
    super(idImg,wayImg,s,parent);
  }
}
class MyBannierGroup extends ImageAutoSizeProfilAndGroupBannier
{
  constructor(idImg,wayImg,s,parent)
  {
     super(idImg,wayImg,s,parent);
  }
}
///////////////////
class ImageSmallOverlay extends ImageAutoSize
{
  constructor(idImg,wayImg,parent)
  {
     super(idImg,wayImg,getSizeHeightWindows(),parent);
     this.maxHeight = parseInt(parent.element.style.height);
     this.maxWidth = parseInt(parent.element.style.width);
  }
  setParametreImg()
  {
    if(this.isMargin)
    {
        if(this.element.height > this.element.width)
        {
            this.setSizeHeigth();
            this.setMarginSizeHeigth()
        }
        else if(this.element.height < this.element.width)
        {
            this.setSizeWidth();
            this.setMarginSizeWidth();
        }
        else if(this.element.height === this.element.width)
        {
            this.setSize(this.sizeMax,this.sizeMax);
        }
    }
    else
    {
      this.element.width = this.sizeMax;
    }
    this.element.style.width =  "100%";
    this.element.style.height =  'auto';
  }

}
