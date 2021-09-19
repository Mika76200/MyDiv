


class MyDivFullElement extends MyDisplayDivVertical
{
  constructor(prant)
  {
    super("MyDivFullElement.js",parent);
    this.setSize(400,400);

    this.divHeader = new MyHeader('header_div','MyDivFullElement',4,parent);
    this.divHeader.setBackGroundColor(BackGroundDivHeaderOverlay.getColor());

    this.content = new MyInsideDivVertical('newInside',this);
    this.content.setDefaultMargin(10);
    this.content.setSizePourCent(80,100);

        /// ajout d'un formulaire
        this.divform = new MyForm('div_form',content);

          // instance de plusieurs element input text,mail,password etc
          this.inputFakeuser = new MyInputLabel('fake_user','text','username :',' user');
          this.inputFakemail = new MyInputLabel('fake_email','email','email :',' ');
          this.inputPassword = new MyInputLabel('fake_passwors','password','password :','****');
          this.inputNumber = new MyInputLabel('fake_number','number','number :','10');
          this.inputSearch = new MyInputLabel('fake_search','search','search :',' ');
          this.inputcheckBox = new MyInputLabel('fake_checkbox','checkBox','checkbox :',true);
          this.inputRanger = new MyInputLabel('fake_ranger','ranger',50,'','ranger :');

        // ajout des element au formulaire
        this.divform.inserElement(this.inputFakeuser);
        this.divform.inserElement(this.inputFakemail);
        this.divform.inserElement(this.inputPassword);
        this.divform.inserElement(this.inputNumber);
        this.divform.inserElement(this.inputSearch);
        this.divform.inserElement(this.inputcheckBox);
        this.divform.inserElement(this.inputRanger);

        // instance une image et un paragraphe
        this.image = new MyImage('newImage',"/MyDiv-web/dataweb/image/valid.png",this.content);
        this.paragraphe = new Paragraphe("newsPara",'the Best Library');

    // ajout des element form et paragraphe a div cotnent
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
