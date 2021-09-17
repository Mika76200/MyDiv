var EnumMyElementDOMHtml =
{
	defaultMargin: 10,
	defaultBorderRadius: "5"
}

//hhhhhhhhhhhhh
class MyElementDOMHtml extends MyEvent
{
		constructor()
		{
			super();
		}
		CreateToDomElement(newID,elemmentDOM,newElementParent)
		{
			if(!elemmentDOM)
			{
				console.log('elemmentDOM est null');
				return false;
			}
			this.element = elemmentDOM;
			this.setElementParent(newElementParent);
			this.element.id = newID;
			this.mousseIsElement = null;
			return true
		}
		setElementID(newID)
		{
			this.element.id = newID;
		}
		setElementParent(p)
		{
			this.elementParent = p;
		}
		setImmerHtml(text)
		{
			this.element.innerHTML = text;
		}
		setAttribute(name,value)
		{
			this.element.setAttribute(name,value)
		}
		removeAttribute(nomAttribut)
		{
			this.element.removeAttribute(nomAttribut);
		}
		setNameClass(name)
		{
			this.element.className = name;
		}
		hasChildNodes()
		{
			return this.element.hasChildNodes();
		}
		removeChild(childElement)
		{
				this.element.removeChild(childElement);
		}
		getChildNodes()
		{
			return this.element.childNodes;
		}

		removeFirstChild()
		{
			if(this.hasChildNodes())
			{
					var output = this.element;
					var child  = output.firstChild;
							output.removeChild(child);
			}
		}
		removeAllChilds()
		{
				if(this.hasChildNodes())
				{
						var output = this.element;
						var child  = output.firstChild;
						while(child)
						{
								output.removeChild(child);
								child = output.firstChild;
						}
				}
		}
		removeLastChild()
		{
			if(this.hasChildNodes())
			{
					var output = this.element;
					var child  = output.lastChild;
					console.log(child);
							output.removeChild(child);
			}
		}
		show()
		{
			this.element.style.display = "flex";
		}
		hile()
		{
			this.element.style.display = "none";
		}
		closeMe()
		{
			this.close();
		}
		close()
		{
			this.element.style.display = "none";
			this.deleteMe();
		}
		deleteMe()
		{
			if(this.hasChildNodes())
			{
				this.removeAllChilds();
			}
		}
		inserElementDOM(elementDOM,justify)
		{
			if(!justify)
			{
				this.element.appendChild(elementDOM);
			}
			else
			{
				elementDOM.style.alignSelf = justify;
				this.element.appendChild(elementDOM);
			}
		}
		insertBeforeFristChild(element)
		{

			this.insertBefore(element.getElement(),this.element.firstChild);
		}
		insertBeforeLastChild(element)
		{
			this.insertBefore(element.getElement(),this.element.lastChild);
		}
		insertBefore(element,beforElement)
		{
			this.element.insertBefore(element, beforElement);
		}
		insertAfterFristChild(newElement)
		{
			this.insertAfter(newElement.getElement(),this.element.firstChild);
		}
		insertAfterLastChild(newElement)
		{
			this.insertAfter(newElement.getElement(),this.element.lastChild);
		}
		inserAfter(newElement, afterElement)
		{
			this.insertAfter(newElement.getElement(), afterElement.getElement());
		}
		insertAfter(newElement, afterElement)
		{
		    var parent = afterElement.parentNode;
		    if (parent.lastChild === afterElement)
				{ // Si le dernier élément est le même que l'élément après lequel on veut insérer, il suffit de faire appendChild()
		        parent.appendChild(newElement);
		    }
				else
				{ // Dans le cas contraire, on fait un insertBefore() sur l'élément suivant
		        parent.insertBefore(newElement, afterElement.nextSibling);
		    }
		}
		setCursor(C)
		{
			this.element.style.cursor = C;
		}
		setParent(E)
		{
			this.elementParent = E;
		}
		setSize(h,w)
		{
			if(h)this.element.style.height = h +"px";
			if(w)this.element.style.width =  w +"px";
		}
		copySize(S)
		{
			this.setSize(S.h,S.w);
		}
		setSizePourCent(h,w)
		{
			if(h)this.element.style.height = h+"%";
			if(w)this.element.style.width =  w+"%";
		}
		setFixSize(bool)
		{
			if(bool || bool === undefined)
			{
				this.element.style.maxHeight = this.element.style.height;
				this.element.style.minHeight = this.element.style.height;
				this.element.style.maxWidth = this.element.style.width;
				this.element.style.minWidth = this.element.style.width;
			}
			else
			{
				this.element.style.maxHeight = null;
				this.element.style.minHeight = null;
				this.element.style.maxWidth = null;
				this.element.style.minWidth = null;
			}

		}
		setMaxSize(h,w)
		{
			if(h && w == undefined)
			{
				this.element.style.maxHeight = h+'px';
				this.element.style.maxWidth = h+'px';
			}
			else if(w && h == undefined)
			{
				this.element.style.maxHeight = w+'px';
				this.element.style.maxWidth = w+'px';
			}
		}
		getSize()
		{
			return new Size(this.h(),this.w());
		}
		setSizeText(value)
		{
			this.element.style.fontSize = value+'px';
		}
		setPosition(c)
		{
			if(c.x)this.element.style.left = c.x +"px";
			if(c.y)this.element.style.top = c.y +"px";
		}
		setPositionToScreen(c)
		{
			if(c.x)this.element.style.left = (this.w()/2) + c.x +"px";
			if(c.y)this.element.style.top =  (this.h()/2) + c.y +"px";
		}
		setFocus(bool)
		{
			if(bool)
			{
				this.element.focus();
			}
			else
			{
				this.element.blur();
			}
		}
		setPositionInitial()
		{
			this.element.style.position = "initial";
		}
		setPositionStatic()
		{
			this.element.style.position = "static";
		}
		setPositionFixed()
		{
			this.element.style.position = "fixed";
		}
		setPositionRelative()
		{
			this.element.style.position = "relative";
		}
		setPositionAbsolute()
		{
			this.element.style.position = "absolute";
		}
		setDefaultMargin()
		{
			this.element.style.marginLeft = EnumMyElementDOMHtml.defaultMargin+"px";
			this.element.style.marginRight = EnumMyElementDOMHtml.defaultMargin+"px";
			this.element.style.marginTop = EnumMyElementDOMHtml.defaultMargin+"px";
			this.element.style.marginBottom = EnumMyElementDOMHtml.defaultMargin+"px";
		}
		setMarginValueText(L,R,T,B)
		{
			this.deleteMargin();
			if(L)this.element.style.marginLeft = L;
			if(R)this.element.style.marginRight = R;
			if(T)this.element.style.marginTop = T;
			if(B)this.element.style.marginBottom = B;
		}
		setMargin(L,R,T,B)
		{
			this.deleteMargin();
			if(L)this.element.style.marginLeft = L+"px";
			if(R)this.element.style.marginRight = R+"px";
			if(T)this.element.style.marginTop =T+"px";
			if(B)this.element.style.marginBottom =B+"px";
		}
		setMarginTop(T)
		{
			if(T)this.element.style.marginTop =T+"px";
		}
		setMarginPourCent(L,R,T,B)
		{
			this.deleteMargin();
			if(L)this.element.style.marginLeft = L+"%";
			if(R)this.element.style.marginRight = R+"%";
			if(T)this.element.style.marginTop =T+"%";
			if(B)this.element.style.marginBottom =B+"%";
		}
		setMarMarginAuto()
		{
			this.element.style.margin = "auto";
			this.element.style.marginLeft = "auto";
			this.element.style.marginRight = "auto";
			this.element.style.marginTop = "auto";
			this.element.style.marginBottom = "auto";
		}
		deleteMargin()
		{
			this.element.style.marginLeft = "0px";
			this.element.style.marginRight = "0px";
			this.element.style.marginTop ="0px";
			this.element.style.marginBottom ="0px";
		}
		setStyle(style)
		{
			this.element.style = style;
		}
		setFontSize(size)
		{
			this.element.style.fontSize = size+"px";
		}
		setShadow(s)
		{
			this.element.style.boxShadow = s+"px "+s+"px "+s+"px "+s+"px";
		}
		deleteShadow()
		{
			this.element.style.boxShadow = "0px 0px 0px 0px";
		}
		setDefaultShadow()
		{
			this.element.style.boxShadow = "1px 1px 1px 1px";
		}
		setDefaultBorderRadius()
		{
			this.element.style.borderRadius =  	EnumMyElementDOMHtml.defaultBorderRadius+"px";
		}
		setBorderRadius(L,R,T,B)
		{
			this.element.style.borderRadius = L+"px "+R+"px "+T+"px "+B+"px";
		}
		deleteBorderRadius()
		{
			this.element.style.borderRadius = "0px";
		}
		setBorderStyle(style)
		{
			this.element.style.borderStyle = style;
		}
		setDefaultSizeBorder()
		{
			this.element.style.borderWidth = "1px 1px 1px 1px";
		}
		setSizeBorder(value)
		{
			this.element.style.borderWidth = value;
		}
		deleteSizeBorder()
		{
			this.element.style.borderWidth = "0px 0px 0px 0px";
		}
		deleteBorder()
		{
			this.setBorderStyle("hidden");
			this.deleteSizeBorder();
		}
		setBorderColor(color)
		{
			this.element.style.borderColor = color;
		}
		setBackGroundColor(color)
		{
			this.element.style.backgroundColor = color;
		}
		setOffsetWidth(offsetWidth)
		{
			this.element.offsetWidth = offsetWidth;
		}
		setFlexDirection(dir)
		{
			this.element.style.flexDirection = dir;
		}
		setJustifyContent(justify)
		{
			this.element.style.justifyContent  = justify;
		}
		setAlignContent(align)
		{
			this.element.style.alignContent  = align;
		}
		setAlignItems(align)
		{
			this.element.style.alignItems  = align;
		}
		setAlignSelf(justify)
		{
			this.element.style.alignSelf  = justify;
		}
		setZIndex(p)
		{
			this.element.style.zIndex = p;
		}
		setCenter()
		{
			this.setAlignSelf('center');
			this.setTextAlign('center');
		}
		setColorText(color)
		{
			this.element.style.color = color;
		}
		setAlignSelf(justify)
		{
			this.element.style.alignSelf  = justify;
		}
		setTextAlign(align)
		{
			this.element.style.textAlign   = align;
		}
		setFlex(mode)
		{
			this.element.style.flexGrow = mode;
		}
		setDisplay(mode)
		{
			this.element.style.display = mode;
		}
		setOverFlow(style)
		{
			this.setNameClass(NAMECLASSSCROLLABLE);
			if(style === 'hidden')
			{
				this.element.style.overflow = 'hidden';
			}
			else
			{
				this.element.style.overflow = "overlay";
			}
		}
		setOverFlowY(style)
		{
			this.element.style.overflowY = "scroll";
			this.element.style.overflowX = "hidden";
			this.setOverFlow(style);
		}
		setOverFlowX(style)
		{
			this.element.style.overflowY = "hidden";
			this.element.style.overflowX = "scroll";
			this.setOverFlow(style);
		}
		deleteOverFlow()
		{
			this.removeAttribute('overflow');
		}
		setScrollBarTop()
		{
			this.element.scrollTop = this.element.scrollTopMax;
		}
		setScrollBarTopTo(size)
		{
			this.element.scrollTop = size;
		}
		getScrollbarWidth()
		{
  		return this.element.scrollWidth;
		}
		setDisabled(bool)
		{
			this.element.disabled = bool;
		}
		getElement()
		{
			return this.element;
		}
		getID()
		{
			return this.element.id;
		}
		getParent()
		{
			return this.elementParent;
		}
		offsetLeft()
		{
			return this.element.offsetLeft;
		}
		offsetTop()
		{
			return this.element.offsetTop ;
		}
		h()
		{
			return this.element.offsetHeight;
		}
		w()
		{
			return this.element.offsetWidth;
		}
		t()
		{
			return this.element.offsetTop;
		}
		b()
		{
			return this.element.offsetButton;
		}
		getClientHeight()
		{
			return this.element.clientHeight;
		}
		getClientWidth()
		{
			return this.element.clientWidth;
		}
		getSizeBorder()
		{
			return this.element.style.borderWidth;
		}
		getSize()
		{
			return new Size(this.h(),this.w());
		}

		getPosition()
		{
			return new Coordinate2D(this.offsetLeft(),this.offsetTop());
		}
		getPositionToScroll(divScroll,divParentToImage)
		{

			return new Coordinate2D(this.offsetLeft() - divParentToImage.element.scrollLeft - divScroll.element.scrollLeft,
																			this.offsetTop()- divParentToImage.element.scrollTop - divScroll.element.scrollTop);
		}
		getPositionToScreen()
		{
			return getPositionElementById(this.element.id);
		}
		getRect()
		{
			return new Rectangle(this.offsetLeft(),this.offsetTop(),this.h(),this.w(),this.t(),this.b());
		}
};
