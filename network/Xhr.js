
class Xhr
{

  constructor()
  {
        this.xhr = new XMLHttpRequest();
        this.prefixError = "/0Ex/g";
        this.reponseJSON = "";
        this.reponse = "";


  }
  requestSingle(url,CALLBACK)
  {
        this.xhr.open('POST',url,false);
        this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        if(CALLBACK != undefined)
        {
          this.addEventListener(CALLBACK,true);
        }
        this.xhr.send('');
  }
  requestSingleNoJson(url,CALLBACK)
  {
        this.xhr.open('POST',url,false);
        this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        if(CALLBACK != undefined)
        {
          this.addEventListener(CALLBACK,false);
        }
        this.xhr.send('');
  }
  createXhrPOST(url,synchrone,CALLBACK)
  {
        this.xhr.open('POST',url,synchrone);
        if(CALLBACK != undefined)
        {
          this.addEventListener(CALLBACK,true);
        }
  }
  createXhrPOSTNoJson(url,synchrone,CALLBACK)
  {
        this.xhr.open('POST',url,synchrone);
        if(CALLBACK != undefined)
        {
          this.addEventListener(CALLBACK,false);
        }
  }
  createXhrPOSTObject(url,synchrone,CALLBACK)
  {
       this.createXhrPOST(url,synchrone,CALLBACK);
       this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  }
  createXhrPOSTForm(url,synchrone,CALLBACK)
  {
       this.createXhrPOST(url,synchrone,CALLBACK);
  }
  createXhrGet()
  {

  }
  sendForm(form)
  {
      this.xhr.send(form);
  }
  sendPost(object)
  {
      this.xhr.send(object);
  }
  setTimeOut(time)
  {
      this.xhr.timeout = time; //  10000ms La requête se terminera si elle n'a pas abouti au bout de 10 secondes
  }
  addEventListener(CALLBACK,isJson)
  {
    this.xhr.addEventListener('readystatechange',()=>
    {
            if(this.xhr.readyState === XMLHttpRequest.DONE && this.xhr.status === 200)  // La constante DONE appartient à l'objet XMLHttpRequest, elle n'est pas globale
            {

                if(isJson)
                {
                    this.reponseJSON = JSON.parse(this.xhr.responseText);

                    if(this.reponseJSON['error'] != undefined)
                    {
                        this.errorRequest(true);
                    }
                    else
                    {
                       CALLBACK(this.reponseJSON,this.xhr);// this.xhr ???
                    }
                }
                else
                {
                    this.reponse = this.xhr.responseText;

                    if(this.reponse.match(this.prefixError))
                    {
                        this.errorRequest(false);
                    }
                    else
                    {
                       CALLBACK(this.reponse,this.xhr);// this.xhr ???
                    }
                }
            }
            else if (this.xhr.readyState === XMLHttpRequest.DONE && this.xhr.status != 200)
            {
              this.errorRequest();
            }
    });
  }
  errorRequest(isJson)
  {
    if(isJson)
    {
      this.setErrorText(this.reponseJSON);
    }
    else
    {
      this.setErrorText(this.reponse);
    }
  }
  setErrorText(reponse)
  {

    // En cas d'erreur !
    if(reponse['error'] ==='0Ex0000' ) // deconnecté
    {
      Connect.reConnect((reponse)=>
      {console.log('reponse');
        if(reponse)
        {
            ConnexionManager.updateDataCookie(reponse,reponse['user_email'],reponse['user_password']);
            window.location.reload();
        }
        else
        {
          var divError = new MyDivErrorReconnect(AutoLanguage.headerError,new MyDivContentErrorReconnect(),parent);
        }
      });

    }
    else if(reponse['error'] === '0Ex0014')
    {
      var divError = new MyDivError(AutoLanguage.headerError,new Paragraphe('',AutoLanguage.unauthorized),parent);
    }

    else if(reponse['error'] === '0Ex0015')
    {
      var divError = document.getElementById("centre");
          divError.innerHTML = AutoLanguage.unauthorizedPageOrNoFound;
    }
    else
    {
        var divError = new MyDivError(AutoLanguage.headerError,new MyDivContentError(this.xhr.status,this.xhr.statusText,reponse['error']),parent);
    }
  }
}
