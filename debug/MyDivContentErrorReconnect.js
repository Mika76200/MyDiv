
class MyDivContentErrorReconnect extends MyInsideDivVertical
{
    constructor(status,statusText,idError,parent)
    {
        super("div_error_content",parent);
        this.content = new Paragraphe("content",AutoLanguageMyDiv.textReconnect);
        this.inserDiv(this.content);
    }
}
