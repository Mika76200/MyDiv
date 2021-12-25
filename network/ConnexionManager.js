


class ConnexionManager
{

    static setDataCookie(reponse,valueEmail,valuePassword,autoConnect)
    {
      Cookie.setCookie('user_id',reponse['user_id'],90);
      Cookie.setCookie('user_email',valueEmail,90);
      Cookie.setCookie('user_password',valuePassword,90);
      Cookie.setCookie('auto_reconnect',autoConnect,90);
      Cookie.setCookie('token',reponse['token'],90);
    }
    static updateDataCookie(reponse,valueEmail,valuePassword)
    {
      
      Cookie.updateCookie('user_id',reponse['user_id'],90);
      Cookie.updateCookie('user_email',valueEmail,90);
      Cookie.updateCookie('user_password',valuePassword,90);
      Cookie.updateCookie('auto_reconnect',Cookie.getCookie('auto_reconnect'),90);
      Cookie.updateCookie('token',reponse['token'],90);
    }
}
