
// class mere de MyElementDOMHtml
class MyEvent
{
  constructor()
  {

  }
  addEventListener(eventTags, funct)
  {
    this.element.addEventListener(eventTags, funct);
  }
  removeEventListener(type,funct)
  {
    this.element.removeEventListener(type,funct);
  }
  addEventKeyEnter(CALLBACK)
  {
    this.addEventKey('enter',CALLBACK);
  }
  addEventKey(key,CALLBACK)
  {
      document.addEventListener('keydown', (event) =>
      {
          const nomTouche = event.key;
          if(nomTouche === key && this.isfocus)
          {
              CALLBACK();
          }
      });
  }
  addEventMousseIn(CALLBACKEnter)
  {
    this.element.addEventListener("mouseenter",()=>{

        this.mousseIsElement = true;
        CALLBACKEnter();
    })
  }
  addEventMousseOut(CALLBACKOut)
  {
    this.element.addEventListener("mouseleave",()=>{

        this.mousseIsElement = false;
        CALLBACKOut();
    });
  }
  initEventMousse(CALLBACKEnter, CALLBACKOut)
  {
    this.addEventMousseIn(CALLBACKEnter);
    this.addEventMousseOut(CALLBACKOut);
  }
  isMouseEnter()
  {
    return this.mousseIsElement;
  }
  addEventScroll(funct)
  {
    window.addEventListener("scroll", funct);
  }
}
