
class MyDivContentError extends MyInsideDivVertical
{
    constructor(status,statusText,idError,parent)
    {
        super("div_error_content",parent);
        var textError = AutoLanguageMyDiv.textError+'<br>'+
                        'status : ' + status +'<br>'+
                        'statusText : ' + statusText +'<br>'+
                        'Error :' + idError + '<br>';

        this.content = new Paragraphe("content",textError);
        this.inserDiv(this.content);
    }
}
