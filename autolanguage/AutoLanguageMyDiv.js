
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

            currentLanguage: "fr",
            defaultOption:"...",
            headerDivError:"Une erreur est survenue !",
            textError:"Une erreur est survenue!",
            errorSelect :" vous n'avez rien selectionné",
            textReconnect:" vous avez été déconnecté veulliez-vous reconnecter",
            unauthorized: " Vous n'êtes pas autorisé à effectuer cette requête",
            unauthorizedPageOrNoFound: "<spam style='margin: 10px;'> Vous n'êtes pas autorisé à consulter cette page ou cette page est inexistante </spam>",
            confirm:"Comfirmer",
            cancel:"Annuler",
            delete:"Supprimer",
            deleted:"Supprimé"


  };
}
else if(language.includes("en"))
{
    var AutoLanguageMyDiv = {

          currentLanguage: "en",
          defaultOption:"...",
          headerDivError:" Error",
          textError:"Une erreur est survenue!",
          errorSelect :" vous n'avez rien selectionné",
          textReconnect:" vous avez été déconnecté veulliez-vous reconnecter",
          unauthorized: " Vous n'êtes pas autorisé à effectuer cette requête",
          unauthorizedPageOrNoFound: "<spam style='margin: 10px;'> Vous n'êtes pas autorisé à consulter cette page ou cette page est inexistante </spam>",
          confirm:"Comfirmer",
          cancel:"Annuler",
          delete:"Supprimer",
          deleted:"Supprimé"
  };
}
else if(language.includes("it"))
{

}
else if(language.includes("es"))
{

}
