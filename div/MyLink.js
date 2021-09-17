class MyLink extends MyElementDOMHtml
{
    constructor(newID,textNode,title,href)
    {
      super();
      this.newLink = document.createTextNode(textNode);
      this.element = document.createElement('a');
      this.element.appendChild(this.newLink);
      this.element.id = newID;
      this.element.href = href;
      this.element.title = title;
      this.element.style.textDecoration  = 'none';
      this.element.style.marginLeft = "10px";
      this.element.style.marginRight = "10px";

    }
    getElement()
    {
      return this.element;
    }
    setHref(href)
    {
      this.element.href = href;
    }
    setTitle(title)
    {
      this.element.title = title;
    }
    setColorText(color)
    {
      this.element.style.color = color;
    }
}
