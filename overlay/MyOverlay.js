class MyOverlay extends MyElementDOMHtml
{

	constructor(newID,height,width,direction,newElementParent)
	{
		super(newID,newElementParent);

		this.arrayElement = new Array();

		this.disenableScrollableElement();

		this.elementOverlay = document.createElement("div");
		this.elementOverlay.id = "elementOverlay_"+ newID;
		this.elementOverlay.style.height = '100%';
		this.elementOverlay.style.width = '100%';
		this.elementOverlay.style.position = "fixed";/* Stay in place */
		this.elementOverlay.style.Zindex = 1; /* Sit on top */
		this.elementOverlay.style.left = 0;//0
    this.elementOverlay.style.top = 0;//0
		this.elementOverlay.style.backgroundColor = ColorOverlayDiv.getColor();

		if(direction === 'v')
		{
			this.divView = new MyDisplayDivVertical("centre_"+newID,this);
			this.divView.setCenter();
		}
		else
		{
			this.divView = new MyDisplayDivHorizontal("centre_"+newID,this);
			this.divView.setCenter();
		}

		var newH = pourCent(height,window.innerHeight);
		var newW = pourCent(width,window.innerWidth);

		this.element = this.divView.element;
		this.element.id = newID;
		this.elementParent = newElementParent;

		this.setSize(newH,newW);
		this.element.style.position = "absolute";	 /* postulat de départ */
		this.element.style.Zindex = 1; /* Sit on top */
		this.element.style.left = '50%';//  /* à 50%/50% du parent référent */
    this.element.style.top = '50%';//
    this.element.style.transform = "translate(-50%, -50%)"; /* décalage de 50% de sa propre taille */

		document.body.appendChild(this.elementOverlay);// tres inportant
		this.elementOverlay.appendChild(this.element);



	}
	deleteTransform()
	{
		this.element.style.transform = "translate(0%, 0%)";
	}
	setDefaultMargin()
	{
		this.divView.setDefaultMargin();
	}
	setSize(height,width)
	{
		this.element.style.height = height+'px';
		this.element.style.width = width+'px';
	}
	setSizePourCent(height,width)
	{
		this.element.style.height = height+'%';
		this.element.style.width = width+'%';
	}
	inserDivToOverlay(div,justifyContent)
	{
	    this.divView.inserDiv(div,justifyContent);
	}
	inserElementToOverlay(div,justifyContent)
	{
	    this.divView.inserElement(div,justifyContent);
	}
	inserSeparatorHorizontal()
	{
			this.divView.inserSeparatorHorizontal();
	}
	hileElementOverlay()
	{
		this.elementOverlay.style.height = '0%';
		this.elementOverlay.style.width = '0%';
	}
	enableScrollableElement()
	{
		for(var i = 0; i < this.arrayElement.length; i++)
		{
			this.arrayElement[i].element.style.overflowX = this.arrayElement[i].overflowX;
			this.arrayElement[i].element.style.overflowY = this.arrayElement[i].overflowY;
		}
	}
	disenableScrollableElement()
	{
		var arrayElementTmp = document.getElementsByClassName(NAMECLASSSCROLLABLE);

				for(var i = 0; i < arrayElementTmp.length; i++)
				{
					this.arrayElement.push(new ParametreOverflow(arrayElementTmp[i],arrayElementTmp[i].style.overflowX ,arrayElementTmp[i].style.overflowY));
				}
				for(var i = 0; i < this.arrayElement.length; i++)
				{
					this.arrayElement[i].element.style.overflowX = 'hidden';
					this.arrayElement[i].element.style.overflowY = 'hidden';
				}
	}
	closeMe()
	{
		 this.enableScrollableElement();
		 this.elementOverlay.style.display = "none";
		 this.element.style.display = "none";

	}

}
class MyOverlayVertical extends MyOverlay
{
	constructor(newID,height,width,newElementParent)
	{
		super(newID,height,width,'v',newElementParent);
	}
}
class MyOverlayHorizontal extends MyOverlay
{
	constructor(newID,height,width,newElementParent)
	{
			super(newID,height,width,'h',newElementParent);
	}
}
