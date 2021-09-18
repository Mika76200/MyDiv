
var language;

if (navigator.userLanguage) //Si InternetExplorer v. < 11
{
    language = navigator.userLanguage;
}
else
{
    language = navigator.language;
}


if(language.includes("fr"))
{
  var AutoLanguageMyDiv = {

            currentLanguage: "fr"

  };
}
else if(language.includes("en"))
{

}
else if(language.includes("it"))
{

}
else if(language.includes("es"))
{

}
