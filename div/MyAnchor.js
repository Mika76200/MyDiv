	class MyAnchor extends MyElementDOMHtml
	{
			constructor(newID,textNode,title,href)
			{
				super();
				this.newLink = document.createTextNode(textNode);
				this.element = document.createElement('a');
				this.setNameClass('my_anchor');
				this.element.appendChild(this.newLink);
				this.element.id = newID;
				this.element.href = href;
				this.element.title = title;
				this.element.style.textDecoration  = 'none';
				this.element.style.marginLeft = "10px";
				this.element.style.marginRight = "10px";
				this.setCursor('pointer');


			}
			setText(text)
			{
				this.removeAllChilds();
				this.newLink = document.createTextNode(text);
				this.element = document.createElement('a');
				this.element.appendChild(this.newLink);
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
			getTexT()
			{
				return this.newLink;
			}
			removeEventListener(type,funct)
			{
				this.element.removeEventListener(eventTag,funct);
			}
			addEventListener(eventTag,funct)
			{
				this.element.addEventListener(eventTag,funct);
			}
			static disabledAnchor(anchor,time,CALLBACK)
			{
				anchor.removeEventListener('click',CALLBACK);
				var interval = setTimeout(()=>
				{
					anchor.addEventListener('click',CALLBACK);
				},time);
			}
}

class MyAnchorNews extends MyAnchor
{
	constructor(newID,textNode,title,href)
	{
		super(newID,textNode,title,undefined);
		this.setNameClass('my_anchor_news');
		this.element.removeAttribute("href");
		this.addEventListener('click',()=>{window.open(href);});

	}
}
class MyAnchorBoutton extends MyAnchor
{
	constructor(newID,text,title,CALLBACK)
	{
		super(newID,text,title,undefined);
		this.setNameClass('my_anchor_boutton');
		this.element.removeAttribute("href");
		if(CALLBACK != undefined)
		{
			this.addEventListener('click',CALLBACK);
		}

	}

}
class MyAnchorBouttonInputBar extends MyAnchorBoutton
{
	constructor(newID,text,title,CALLBACK)
	{
		super(newID,text,title,CALLBACK);
	}
}
class MyAnchorMiniBoutton extends MyAnchorBoutton
{
	constructor(newID,text,title)
	{
		super(newID,text,title);
		this.setNameClass('my_anchor_boutton');
		this.element.type = 'submit';
		this.setFontSize(10);
	}
}
class MyAnchorBouttonSubmit extends MyAnchorBoutton
{
	constructor(newID,text,title)
	{
		super(newID,text,title);
		this.setNameClass('my_anchor_boutton_submit');
		this.element.type = 'submit';
	}
}
//////////////////////////////////////////////
class MyAnchorBouttonAction extends MyDivVertical
{
	constructor(newID,action,parent)
	{
		super(newID,parent);
		this.setNameClass('my_anchor_boutton_action');
		this.bouton = action;
		this.inserAnchor(this.bouton);

		this.barAction = new MyDivHorizontal(newID+"_barAction",this);
		this.barAction.setSize(3);
		this.inserDiv(this.barAction);

		this.setColorText(ColorAnchorAction.getColor());
		this.setColorBarAction(BackGroundColorAnchorAction.getColor());
		this.setCenter();
		this.setCursor('pointer');
	}
	setDisplayBarAction(display)
	{
		this.barAction.setDisplay(display);
	}
	setColorText(color)
	{
		this.bouton.setColorText(color);
	}
	setColorBarAction(color)
	{
		this.barAction.setBackGroundColor(color);
	}
	/* Open */
	addEventListener(eventTags, funct)
	{
	 	this.bouton.addEventListener(eventTags, funct);
	}
}
///////////////////////////////////////////////
class MyAnchorIconBoutton extends MyOverlayObjectPrewievVertical
{
	constructor(newID,way,title,size,parent)
	{
		super(size,parent);
		this.setNameClass('my_anchor_icon_boutton');
		this.icon = new IconImage('icon_'+newID,way);
		this.icon.setMargin(10,10,5,5);
		this.checkBoxText = new MySpam('title',title);
		this.checkBoxText.setColorText(ColorTextIconAnchor.getColor());
		this.header = new MyInsideDivHorizontal("header",this);
		this.header.inserDiv(this.icon);
		this.header.inserSpam(this.checkBoxText);
		this.inserDiv(this.header);
		this.setZIndex(1);
		this.setCursor('pointer');

	}
	hileIcon()
	{
		this.icon.hile();
	}

	setAction(eventTags, funct)
	{
		this.header.addEventListener(eventTags, funct);
	}
	/* Open */
	addEventListener(eventTags, funct)
	{
	 	this.element.addEventListener(eventTags, funct);
	}
	getIsClicked()
	{
		return this.selecBox.getCheck();
	}
}
class MyAnchorIconDeleteBoutton extends MyAnchorIconBoutton
{
	constructor(newID,size,parent)
	{
		super(newID,"/dataweb/img/delete.ico",AutoLanguage.delete,size,parent);
		this.setNameClass('my_anchor_icon_delete__boutton');
		this.hileIcon();
	}
}
/////////////////////////////
class MyAnchorReactionBoutton extends MyInsideDivHorizontal
{

	constructor(newID,way,wayClicked,title)
	{
		super(newID);
		this.setNameClass('my_anchor_reaction_boutton');
		this.icon = new IconImage('icon_'+newID,way);
		this.iconClicked = new IconImage('icon_'+newID,wayClicked);
		this.isClicked = false;
		this.nbrReaction = parseInt(title);
		this.newLink = new MySpam('',this.nbrReaction);
		this.inserImage(this.icon);
		this.inserSpam(this.newLink);
		this.setCursor('pointer');
	}
	clicked()
	{
		this.nbrReaction++;
		this.displayClicked();
		this.isClicked = true;
	}
	disClicked()
	{
		this.nbrReaction--;
		this.displayDisCliked();
		this.isClicked = false;
	}
	displayClicked()
	{
		this.removeAllChilds();
		this.newLink.setValue(this.nbrReaction);
		this.inserImage(this.iconClicked);
		this.inserSpam(this.newLink);
	}
	displayDisCliked()
	{
		this.removeAllChilds();
		this.newLink.setValue(this.nbrReaction);
		this.inserImage(this.icon);
		this.inserSpam(this.newLink);
	}
	getIsClicked()
	{
		return this.isClicked;
	}
}
/////////////////////////////////////////////
class MyAnchorBouttonFile extends MyAnchorBoutton
{
	constructor(newID,nameItem,text,title)
	{
		super(newID,text,title);
		this.setNameClass('my_anchor_boutton_file');
		this.nameItem = nameItem;
		this.secondElement = document.createElement('input');
		this.secondElement.type = 'file';
		this.secondElement.style.display = 'none';
		this.secondElement.id = newID+'_second';
		this.secondElement.name = this.nameItem;
		this.inserElementDOM(this.secondElement);
	}
	click()
	{
		this.secondElement.click();
	}
	setMultiple()
	{
		this.secondElement.multiple = "multiple";
	}
	setValueInputFile(value)
	{
		this.secondElement.value = value;
	}
	addEventListenerSecondElement(eventTags, funct)
	{
		this.secondElement.addEventListener(eventTags, funct);
	}
	getSecondElement()
	{
		return this.secondElement;
	}
	getValue()
	{
		return this.secondElement.value;
	}
	getFiles()
	{
		return this.secondElement.files;
	}
	getName()
	{
		return this.secondElement.name;
	}
	removeAllfiles()
	{
		this.setValueInputFile("");
	}
}
	///////////////////////////////////////
class MyAnchorBouttonImg extends MyAnchorBouttonFile
{
			constructor(newID,nameItem,text,title)
			{
				super(newID,'image',text,title);
				this.setNameClass('my_anchor_boutton_img');
				this.secondElement.type = 'file';
				this.secondElement.accept = "image/*";
			}
}
class MyAnchorBouttonVideo extends MyAnchorBouttonFile
{
			constructor(newID,text,title)
			{
				super(newID,nameItem,text,title);
				this.setNameClass('my_anchor_boutton_video');
				this.secondElement.type = 'file';
				this.secondElement.accept = "video/*";
			}
}
class MyAnchorBouttonAudio extends MyAnchorBouttonFile
{
		constructor(newID,text,title)
		{
			super(newID,nameItem,text,title);
			this.setNameClass('my_anchor_boutton_audio');
			this.secondElement.type = 'file';
			this.secondElement.accept = "audio/*";
		}
}
/////////////////////////////////////////////////////
class MyAnchorEmail extends MyAnchor
{
	constructor(newID,textNode,title,email)
	{
		super(newID,textNode,title,"mailto:"+email);
		this.setNameClass('my_anchor_email');
	}
}
