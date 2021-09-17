class MyIFrame extends MyElementDOMHtml
{
    constructor(newID,link,newElementParent)
    {
        super();
        this.element = document.createElement('iframe');
  			this.element.id = newID;
        this.element.setAttribute("src", link);
        this.elementParent = newElementParent;
    }
}
