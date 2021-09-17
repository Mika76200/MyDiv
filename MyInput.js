/*
<input type="button"><br>
<input type="checkbox" value ="true"><br>
<input type="color"><br>
<input type="date"><br>
<input type="datetime-local"><br>
<input type="email"><br>
<input type="file"><br>
<input type="hidden"><br>v
<input type="image"><br>
<input type="month"><br>
<input type="number"><br>
<input type="password"><br>
<input type="radio"><br>
<input type="range">v<br>
<input type="reset"><br>
<input type="search"><br>
<input type="submit"><br>
<input type="tel"><br>
<input type="text"><br>
<input type="time"><br>
<input type="url"><br>
<input type="week"><br>
*/

class MyInput extends MyElementDOMHtml
{

		constructor(newID,text)
		{
			super();
			this.element = document.createElement('input');
			this.element.value = "";
			this.element.id = newID;
			this.element.placeholder = text;
			this.deleteBorder();
		}

		/* Open */
		addEventListener(eventTags, funct)
		{
		    this.element.addEventListener(eventTags, funct);
		}
		addToText(value)
		{
			this.setValue(this.getValue() + value);
		}
		setText(text)
		{
			this.setValue(text);
		}
		setValueNoFilter(value)
		{
			this.element.value = value;
		}
		setValue(value)
		{
			this.element.value = MyEmoji.emojiDecode(value);
		}
		setFlexDirection(dir)
		{
			this.element.style.flexDirection = dir;
		}
		setJustifyContent(justify)
		{
			this.element.style.justifyContent  = justify;
		}
		setDisplay(mode)
		{
			this.element.style.display = mode;
		}
		setPlaceHolder(value)
		{
			this.element.placeholder = value;
		}
		getText()
		{
			return this.element.value;
		}
		getValue()
		{
			return this.element.value;
		}
		getID()
		{
			return this.element.id;
		}
		setDefaultStyle()
		{
			this.setStyle("border:solid 1px gray;");
		}


}
/////////////////////////////////////////////
/////////////////////////////////////////////
///////////////////////////////////////////

class MyInputLabel extends MyDiv
{
	constructor(newID,type,nameLabet,value)
	{
		super(newID);
		this.setStyle("display: inline-block;");
		this.label = new MySpam(newID+nameLabet,nameLabet);
		this.label.setMargin(5,0,0,0);
		this.label.setSizePourCent(0,30);

		if(type)
		{
			if(type === 'text'){this.input = new MyInputText(newID);}
			if(type === 'number'){this.input = new MyInputNumber(newID);}
			if(type === 'search'){this.input = new MyInputSearch(newID);}
			if(type === 'file'){this.input = new MyInputFile(newID);}
			if(type === 'email'){this.input = new MyInputEmail(newID);}
			if(type === 'password'){this.input = new MyInputPassWord(newID);}
			if(type === 'checkBox'){this.input = new MyInputCheckBox(newID,true);}
			if(type === 'ranger'){this.input = new MyInputRange(newID,500,0,value,this.label);this.label.setValue(AutoLanguage.searchDistance+value+AutoLanguage.searchUnit);}
		}
		else
		{
			this.input = new MyInputText(newID);
		}

		this.setValue(value);
		this.setFlexDirection('column');
		this.inserSpam(this.label);
		this.inserInput(this.input);
		this.input.getElement().style = "border: hidden; border: 0";

	}
	setPlaceHolder(t)
	{
		this.input.setPlaceHolder(t);
	}
	setAttributeInput(name,value)
	{
		this.input.setAttribute(name,value);
	}
	removeAttributeInput(nameAttribut)
	{
		this.input.removeAttribute(nameAttribut);
	}
	setSizeInput(h,w)
	{
		this.input.setSize(h,w);
	}
	setValueNoFilter(value)
	{
		this.input.setValueNoFilter(value);
	}
	addToText(value)
	{
		this.setValue(this.getValue() + value);
	}
	setText(text)
	{
		this.input.setText(text);
	}
	setValue(value)
	{
		this.input.setValue(value);
	}
	setFocus(bool)
	{
		this.input.setFocus(bool);
	}
	getText()
	{
		return this.input.getText();
	}
	getValue()
	{
		return this.input.getValue();
	}
	getInput()
	{
		return this.input;
	}
	isNaN()
	{
		return this.input.isNaN();
	}
	setDefaultStyle()
	{
		 this.input.setDefaultStyle();
	}
	setSizeTextInput(size)
	{
			this.input.setSizeText(size);
	}
	addEventListenerInput(type,funct)
	{
		this.input.addEventListener(type,funct);
	}
}
class MyInputLabelHorizontal extends MyInputLabel
{
	constructor(newID,type,nameLabet,value)
	{
		super(newID,type,nameLabet,value);
		this.setFlexDirection('column');
	}
}
class MyInputLabelVertical extends MyInputLabel
{
	constructor(newID,type,nameLabet,value)
	{
		super(newID,type,nameLabet,value);
		this.setFlexDirection('row');
	}
}
////////////////////////////////////
class MyInputText extends MyInput
{
	constructor(newID,text)
	{
		super(newID,text);
		this.element.type = 'text';
	}
	addEventKeyEnter(CALLBACK)
	{
				this.isfocus = false;
				this.addEventListener('focus',() =>
				{
						this.isfocus = true;
				});
				this.addEventListener('blur',() =>
				{
						this.isfocus = false;
				});
				document.addEventListener('keydown', (event) =>
				{
						const nomTouche = event.key;
						if(nomTouche === 'Enter' && this.isfocus)
						{
								CALLBACK();
						}
				});
	}

}
/////////////////////////////////////
class MyInputSearch extends MyInputText
{
	constructor(newID)
	{
		super(newID);
		this.element.type = 'search';
	}
	defaultValue(value)
	{
		this.element.defaultValue = value;
	}
	setAutoComplete(bool)
	{
		if(bool === true)
		{
			this.element.autocomplete = "on";
		}
		else
		{
			this.element.autocomplete = "off";
		}

	}
}
	/////////////////////////////////////////////
class MyInputFile extends MyInput
{

	constructor(newID)
	{
		super(newID);
		this.element = new MyInputButton(newID+'_second');
		this.secondElement.type = 'file';
		this.secondElement.style.display = 'none';
	}
	click()
	{
		this.secondElement.click();
	}
	setMultiple()
	{
		this.secondElement.multiple;
	}
	setValueInputFile(value)
	{
		this.secondElement.setValue(value);
	}
	addEventListenerSecondElement(eventTags, funct)
	{
		this.secondElement.addEventListener(eventTags, funct);
	}
	getSecondElement()
	{
		return this.secondElement.getElement();
	}

}
///////////////////////////////////////
class MyInputImg extends MyInputFile
{
	constructor(newID)
	{
		super(newID);
		this.secondElement.type = 'file';
		this.secondElement.accept = "image/*";
	}

}
class MyInputVideo extends MyInputFile
{

	constructor(newID)
	{
		super(newID);
		this.secondElement.type = 'file';
		this.secondElement.accept = "video/*";

	}
}
class MyInputAudio extends MyInputFile
{
	constructor(newID)
	{
		super(newID);
		this.secondElement.type = 'file';
		this.secondElement.accept = "audio/*";

	}
}
///////////////////////////////////////////////////////
class MyInputColor extends MyInput
{
	constructor(newID)
	{
		super(newID);
		this.element.type = 'color';
	}
}
///////////////////////////////////////////////////////
class MyInputCheckBox extends MyInput
{

	constructor(newID,defaultCheck)
	{
		super(newID);
		this.element.type = 'checkbox';
		this.element.checked = defaultCheck;
	}
	setCheck(bool)
	{
		this.element.checked = bool;
	}
	getCheck()
	{
		if(this.element.checked)
		{
			return true;
		}
		return false;
	}
	static isCheck(value)
	{
		if(value === true || value ==='true')
		{
			return true;
		}
		return false;
	}
}
////////////////////////////////////////////////////////
class MyInputButton extends MyInput
{
	constructor(newID,value)
	{
		super(newID);
		this.element.type = 'button';
		this.element.value = value;
	}
}
////////////////////////////////////////////////////////
class MyInputEmail extends MyInput
{
	constructor(newID)
	{
		super(newID);
		this.element.type = 'email';
		this.setPlaceHolder("Email");
	}
}
////////////////////////////////////////////////////////
class MyInputPassWord extends MyInput
{
	constructor(newID)
	{
		super(newID);
		this.element.type = 'password';
		this.setPlaceHolder("********");
	}
}
/////////////////////////////////////////////////////
class MyInputBrith extends MyInput
{
	constructor(newID)
	{
		super(newID);
		this.element.type = 'date';
		this.brith = new Date();
	}
	setDate(date)
	{
		this.element.value = date;
	}
	getDate()
	{
		 this.brith = new Date(this.element.value);
		 return this.brith;
	}
}
/////////////////////////////////////////////////////
class MyInputNumber extends MyInput
{
	constructor(newID)
	{
		super(newID);
		this.element.type = 'number';
	}
	setNumber(value)
	{
		this.element.value = value ;
	}
	isNaN()
	{
		return isNaN(this.element.value);
	}
}
///////////////////////////////////////////////
class MyInputRange extends MyInput
{
	constructor(newID, newMax ,newMin,value,label)
	{
		super(newID);
		this.element.type = 'range';
		if(newMax){this.element.max = newMax;}
		if(newMin){this.element.min = newMin;}
		if(value){this.setValue(value);}
		if(label)
		{
			this.refLabel = label;
			this.addEventListener('change',()=>{ label.setValue(AutoLanguage.searchDistance+this.getValue()+AutoLanguage.searchUnit);});
		}
	}
}
/////////////////////////////////////////////////
class MyDivInputCheckBox extends MyInsideDivHorizontal
{
    constructor(newID,text,defaultCheck)
    {
      super(newID+'_div');

      this.setMargin(0,0,5,5);
      this.checkBox = new MyInputCheckBox(newID+'_checkbox',defaultCheck);
      this.checkBox.deleteMargin();
      this.text = new MySpam(newID+'_spam',text);
      this.text.setMargin(5);
      this.text.setSizeText(12);

      this.inserInput(this.checkBox);
      this.inserSpam(this.text);
    }
    getCheck()
    {
      return this.checkBox.getCheck();
    }
}
