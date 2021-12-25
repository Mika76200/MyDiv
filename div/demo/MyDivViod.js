


class MyDivViod extends MyDisplayDivVertical
{
  constructor(prant)
  {
    super("MyDivViod.js",parent);
    this.setSize(400,400);

    this.divHeader = new MyHeaderDiv('header_div','MyDivViod',4,parent);

    this.content = new MyInsideDivVertical('newInside',this);
    this.content.setDefaultMargin(10);
    this.content.setSizePourCent(80,100);

    this.inputButtonBar = new MyInputButtonDialBar('input_bar_MyDiv.js','ok',()=>{},this);

    this.inserElement(this.divHeader);
    this.inserSeparatorHorizontal();
    this.inserElement(this.content);
    this.inserSeparatorHorizontal();
    this.inserElement(this.inputButtonBar);
  }
}
