
class MyInputSelect extends MyElementDOMHtml
{
  constructor(optionText)
  {
    super();
    this.value = [];
    this.element = document.createElement("SELECT");
    this.element.text = optionText;
    this.setCursor('pointer');
    this.setDefaultBorderSelect();
    this.setSizePourCent(undefined,100);
    this.setBackGroundColor(BackGroundColorInputSelect.getColor());
  }
  addOption(option)
  {
      if(option)
      {
        if(option.getValue())
        {
            this.value.push(option.getValue());
        }
        else
        {
            this.value.push(0);
        }
        this.element.add(option.getElement());
      }
  }
  selectedByValue(search)
  {
    this.selectedByIndex(this.value.indexOf(search));
  }
  getSelectValue()
  {
      return this.value[this.element.selectedIndex];//option defaut = 0
  }
  selectedByIndex(index)
  {
    if(index > -1)
    {
      this.element[index].selected = "selected";
    }
  }
  setElementSelect(i)
  {
    this.element.selectedIndex = i;
  }
  resetIndex()
  {
    this.element[0].selected = "selected";
  }
  removeOption(keys)
  {
      this.element.remove(keys);
  }
  getTextFirstElementOption()
  {
      return this.element[0].text;
  }
  getSelectTextElementOption()
  {
      return this.element[this.element.selectedIndex].text;
  }
  getValueByTextOption(search)
  {
    for(var i = 0; i < Number(this.element.length-1); i++)
    {
        if(this.element[i].text == search)
        {
          return this.value[i];//option defaut = 0
        }
    }
  }
  getValueFirstElementOption()
  {
      return this.value[0];//option defaut = 0
  }
  deleteAllOption()
  {
    var nameFrstOption = this.getValueFirstElementOption();
    for(var i = this.value.length ; i> -1;i--)
    {

      this.removeOption(i);
    }
      this.addOption(new MyOptionSelect(nameFrstOption));
  }
  setDefaultBorderSelect()
  {
    this.setStyle("border: 0px none;");
    this.deleteBorder();
  }

}
//////////////////////////////////////////////////////////
class MyInputSelectSecondValue extends MyInputSelect
{
  constructor(newID)
  {
      super(newID);
      this.secondValue = [];
  }
  addOption(option)
  {
      if(option)
      {
        this.element.add(option.getElement());

        if(option.getValue())
        {
          this.value.push(option.getValue());
        }
        else
        {
          this.value.push(0);
        }
        if(option.getSecondValue())
        {
          this.secondValue.push(option.getSecondValue());
        }
        else
        {
          this.secondValue.push(0);
        }
      }
  }
  selectedBySecondValue(search)
  {
    this.selectedByIndex(this.secondValue.indexOf(search));
  }
  getSecondValueFirstElementOption()
  {
      return this.secondValue[0];//option defaut = 0
  }
  getSelectSecondValue()
  {
      return this.secondValue[this.element.selectedIndex];//option defaut = 0
  }
  getSelectValueElementOption()
  {
      return this.element[this.element.selectedIndex].text;//option defaut = 0
  }
  removeOption(keys)
  {
      this.element.remove(keys);
      this.value.splice(keys, 1);
      this.secondValue.splice(keys, 1);
  }
  deleteAllOption()
  {
    var nameFrstOption = this.getTextFirstElementOption();
    for(var i = this.value.length ; i> -1;i--)
    {
      this.removeOption(i);
    }
    this.addOption(new MyOptionSelectRegistreForm(nameFrstOption,0,0));
  }
}
////////////////////////
class MyInputSelectRegistreForm extends MyInputSelectSecondValue
{
  constructor(newID)
  {
    super(newID);
  }
}

///////////////////////////////////////////////////////
class MyInputSelectOption extends MyInputSelect
{
  constructor(newID)
  {
      super(newID);
      this.CALLBACK = [];
      this.deleteBorder();
  }
  addOption(option)
  {
      if(option)
      {
        this.element.add(option.getElement());
        this.CALLBACK.push(option.getCALLBACK());
      }

  }
  execCALLBACK()
  {
    this.CALLBACK[this.element.selectedIndex]();//option defaut = 0 this.CALLBACK();
  }
  removeOption(keys)
  {
      this.element.remove(keys);
      this.CALLBACK.splice(keys,1);
  }
  deleteAllOption()
  {
    for(var i = this.CALLBACK.length ; i> -1;i--)
    {
      this.removeOption(i);
    }
  }
}
/////////////////////////////////
