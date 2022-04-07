var NORMAL_DELAY_PUSH = 11000;

function sendRequestForm(form,url,CALLBACK)
{
    var xhr = new Xhr();
        xhr.createXhrPOSTForm(url,false,(reponse)=>
        {
            if(parseInt(reponse) == 1)
            {
              CALLBACK(true);
            }
            else if(parseInt(reponse) == 0)
            {
            CALLBACK(false);
            }
            else
            {
              xhr.errorRequest();
              CALLBACK(false);
            }
          });
        xhr.sendForm(form);
}

function sendRequest(url,CALLBACK)
{
    var xhr = new Xhr();
        xhr.requestSingle(url,false,(reponse)=>
        {
            if(parseInt(reponse) == 1)
            {
              CALLBACK(true);
            }
            else if(parseInt(reponse) == 0)
            {
            CALLBACK(false);
            }
            else
            {
              xhr.errorRequest();
              CALLBACK(false);
            }
          });
        xhr.sendForm();
}
function sendResquetFormReponceJson(form,url,CALLBACK)
{
    var xhr = new Xhr();
        xhr.createXhrPOSTForm(url,false,(reponse)=>
        {
          CALLBACK(reponse)
        }
        );
        xhr.sendForm(form);
}
async function sendResquetFormReponceJsonAsynchrone(form,url,CALLBACK)
{
  var xhr = new Xhr();
      xhr.setTimeOut(NORMAL_DELAY_PUSH);
      xhr.setCallbackOnTimeout(()=>{console.log("Timed out.");CALLBACK();});
      xhr.createXhrPOSTAsynchrone(url,(reponse)=>
      {
        CALLBACK(reponse)
      }
      );
      xhr.sendForm(form);
}
