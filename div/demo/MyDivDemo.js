


class MyDivDemo extends MyDisplayDivVertical
{

  constructor(prant)
  {
    super("MyDiv.js",parent);
    this.setSize(400,400);

    this.divHeader = new MyHeaderDiv('header_div','MyDiv',4,parent);

    this.content = new MyInsideDivVertical('newInside',this);
    this.content.setDefaultMargin(10);
    this.content.setSizePourCent(80,100);

        this.divform = new MyForm('div_form',content);

          this.inputFakeuser = new MyInputLabel('fake_user','text','username :',' user');
          this.inputFakemail = new MyInputLabel('fake_email','email','email :',' ');
          this.inputPassword = new MyInputLabel('fake_passwors','password','password :','****');
          this.inputNumber = new MyInputLabel('fake_number','number','number :','10');
          this.inputSearch = new MyInputLabel('fake_search','search','search :',' ');
          this.inputcheckBox = new MyInputLabel('fake_checkbox','checkBox','checkbox :',true);
          this.inputRanger = new MyInputLabel('fake_ranger','ranger',50,'','ranger :');

        this.divform.inserElement(this.inputFakeuser);
        this.divform.inserElement(this.inputFakemail);
        this.divform.inserElement(this.inputPassword);
        this.divform.inserElement(this.inputNumber);
        this.divform.inserElement(this.inputSearch);
        this.divform.inserElement(this.inputcheckBox);
        this.divform.inserElement(this.inputRanger);

        this.image = new MyImage('newImage',"/MyDiv-web/dataweb/image/valid.png",this.content);
        this.paragraphe = new Paragraphe("newsPara",'the Best Library');

    this.content.inserElement(this.divform);
    this.content.inserElement(this.paragraphe);

    this.inputButtonBar = new MyInputButtonDialBar('input_bar_MyDiv.js','ok',()=>{},this);

    this.inserElement(this.divHeader);
    this.inserSeparatorHorizontal();
    this.inserElement(this.content);
    this.inserSeparatorHorizontal();
    this.inserElement(this.inputButtonBar);

  }
}
