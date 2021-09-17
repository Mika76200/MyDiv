class MyMiniOverlay extends MyDiv
{
  constructor(size,parent)
  {
      super("overlay",parent);
      this.setSize(size,size);
  }
}
class MyMiniOverlayHorizontal extends MyMiniOverlay
{
  constructor(size,parent)
  {
      super(size,parent);
      this.setFlexDirection("row");
  }
}
class MyMiniOverlayVertical extends MyMiniOverlay
{
  constructor(size,parent)
  {
      super(size,parent);
      this.setFlexDirection("column");
  }
}
class MyOverlayObjectPrewiev extends MyMiniOverlay
{
  constructor(size,parent)
  {
      super(size,parent);
      this.setBackGroundColor(MyColorBlackTransparent.getColor());
  }
}
class MyOverlayObjectPrewievHorizontal extends MyOverlayObjectPrewiev
{
  constructor(size,parent)
  {
      super(size,parent);
      this.setFlexDirection("row");
  }
}
class MyOverlayObjectPrewievVertical extends MyOverlayObjectPrewiev
{
  constructor(size,parent)
  {
      super(size,parent);
      this.setFlexDirection("column");
  }
}
