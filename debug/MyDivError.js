

class MyDivError extends MyDivConfirm
{
    constructor(newID,content,parent)
    {
        super("div_error",AutoLanguageMyDiv.headerDivError,content,()=>{this.sendError();},parent);

    }
    sendError()
    {

   }
}
