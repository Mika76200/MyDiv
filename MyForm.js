
class MyForm extends MyElementDOMHtml
{
    constructor(newID,url,newElementParent)
    {
        super();
        this.element = document.createElement("form");
  			this.element.id = newID;
        this.setMethod("post");
        this.setAction(url);
        this.elementParent = newElementParent;
    }
    setMethod(method)
    {
      this.setAttribute('method',method);
    }
    setAction(action)
    {
      this.setAttribute('action',action);
    }
    submit(callback)
    {
      this.element.submit(callback);
    }
}
