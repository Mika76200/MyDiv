
var XhrTestReponse;
var XhrTestReponseJSON;

class XhrTest extends Xhr
{
  constructor()
  {
    super();
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
                    XhrTestReponseJSON = this.reponseJSON;
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
                    XhrTestReponse = this.reponse;
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
  static getReponseTest()
  {
    return XhrTestReponse;
  }
  static getReponseJSONTest()
  {
    return XhrTestReponseJSON;
  }
}
