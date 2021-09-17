class MyOnglet extends MyInsideDivVertical
{
  constructor(newID,content)
  {
    super(newID);
    this.content = content;
    this.inserDiv(this.content);
  }

}
class MyOngletHeader extends MyInsideDivVertical
{

  constructor(newID,title,CALLBACK)
  {
    super(newID);
    this.title = title;

    this.action = new MyAnchorBoutton('anchor_button',title,title);
    this.button = new MyAnchorBouttonAction('anchor_button_button',this.action,parent);
    this.button.addEventListener('click',()=>{CALLBACK();});
    this.inserAnchor(this.button);

  }
  setFlexBar(flex)
  {
    if(flex != 'none')
    {
      this.button.setColorBarAction(BackGroundColorAnchorActionOnglet.getColor());
    }
    else
    {
      this.button.setColorBarAction(BackGroundColorDiv.getColor());
    }

  }
  getTitle()
  {
    return this.title;
  }
}
class MyDivOngletBoard extends MyInsideDivVertical
{
  constructor(newID)
  {
    super(newID);
    this.arrayHeaderOnglet = [];
    this.arrayContentOnglet = [];

    this.divHeaderOnglet = new MyInsideDivHorizontal('div_header_onglet');
    this.divHeaderOnglet.setJustifyContent('space-around');
    this.inserDiv(this.divHeaderOnglet);

    this.divContentOnglet = new MyInsideDivHorizontal('div_content_onglet');
    this.divContentOnglet.setCenter();
    this.inserDiv(this.divContentOnglet);

  }
  addOnglet(titleOnglet,elementContentOnglet)
  {
    this.arrayHeaderOnglet.push(new MyOngletHeader('div_onglet_header',titleOnglet,()=>{this.setFlexByTitle(titleOnglet);}));
    this.arrayContentOnglet.push(new MyOnglet('div_onglet',elementContentOnglet));

    this.update();
  }
  setFlexByTitle(indexTitleOnglet)
  {

    var indexSearch = 0;
    for(var i = 0; i < this.arrayHeaderOnglet.length; i++)
    {
      if(this.arrayHeaderOnglet[i].getTitle() === indexTitleOnglet)
      {
        indexSearch = i;
      }
    }
    this.setFlexByIndex(indexSearch);
  }
  setFlexByIndex(index)
  {

    for(var i = 0; i < this.arrayHeaderOnglet.length; i++)
    {
      this.arrayContentOnglet[i].setDisplay('none');
      this.arrayHeaderOnglet[i].setFlexBar('none');
    }
    this.arrayContentOnglet[index].setDisplay('flex');
    this.arrayHeaderOnglet[index].setFlexBar('flex');
  }
  update()
  {
    this.divHeaderOnglet.removeAllChilds();
    this.divContentOnglet.removeAllChilds();

    for(var i = 0; i < this.arrayHeaderOnglet.length; i++)
    {
      this.divHeaderOnglet.inserDiv(this.arrayHeaderOnglet[i]);
    }

    for(var i = 0; i < this.arrayContentOnglet.length; i++)
    {
      this.divContentOnglet.inserDiv(this.arrayContentOnglet[i]);
    }

    this.setFlexByIndex(0);
  }

}
