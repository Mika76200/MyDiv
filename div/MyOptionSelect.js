class MyOptionSelect extends MyElementDOMHtml
{
  constructor(optionText,value)
  {
    super();
    this.value = value;
    this.element = document.createElement("option");
    this.setBackGroundColor(ColorDisplayDiv.getColor());
    this.element.text = optionText;
    this.optionText = optionText;
  }
  getValue()
  {
    return this.value;
  }
  getOptionText()
  {
    return this.optionText;
  }
}
//////////////////////////////////////////
class MyOptionSelectSecondValue extends MyOptionSelect
{
  constructor(optionText,value,secondValue)
  {
    super(optionText,value);
    this.secondValue = secondValue;
  }
  getSecondValue()
  {
    return this.secondValue;
  }
}
class MyOptionSelectRegistreForm extends MyOptionSelectSecondValue
{
  constructor(optionText,value,secondValue)
  {
    super(optionText,value,secondValue);
  }
}
///////////////////////////////////
class MyOptionSelectOption extends MyOptionSelect
{
  constructor(optionText,CALLBACK)
  {
    super(optionText);
    this.CALLBACK = CALLBACK;
  }
  getOptionText()
  {
    return this.optionText;
  }
  getCALLBACK()
  {
     return this.CALLBACK;
  }
}
/////////////////////////////////
