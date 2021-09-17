class MyColor
{
	constructor(r,b,g,t)
	{
		this.R = r;
		this.B = b;
		this.G = g;
		if(t != undefined)
		{
			this.T = t
		}
		else
		{
			this.T= 1;
		}
	}
	getColor()
	{
		return 'rgb('+this.R+','+this.B+','+this.G+','+this.T+')';
	}
	setColor(Color)
	{
		this.R = Color.R;
		this.B = Color.B;
		this.G = Color.G;
		if(Color.T != undefined)
		{
			this.T = Color.T;
		}
		else
		{
			this.T= 1;
		}
	}

}


  var MyColorRed = new MyColor(255, 0, 0);
	var MyColorViolet = new MyColor(255, 0, 255);
	var MyColorBleu = new MyColor(0, 51, 255);
	var MyColorYellow =  new MyColor(255, 241, 118);
  var MyColorMauve =  new MyColor(216, 165, 172);
  var MyColorBiege =  new MyColor(234, 168, 97);
	var MyColorBiegeClair =  new MyColor(228, 180, 119);
	var MyColorGray =  new MyColor(224, 224, 224);
	var MyColorGray2 =  new MyColor(158, 158, 158);
	var MyColorGreen =  new MyColor(3, 192, 60);
	var MyColorWhite =  new MyColor(255, 253, 253);
	var MyColorBlack =  new MyColor(33, 33, 33);
	var MyColorBlackOverlay2 = new MyColor(33, 33, 33,0.5);
	var MyColorBlackOverlay =  new MyColor(33, 33, 33,1);
	var MyColorBlackTransparent =  new MyColor(3, 3, 3,0.5);
	var MyColorTransparent =  new MyColor(0, 0, 0,0);
	//////////////////////////////////////////
	///// profil
	var MyColorIsConnect = MyColorGreen;
	//////////////////////////////////////
/////// errors
	var ColorAnchorerrors = MyColorRed;
/////////////news
	var MyColorTitleDivNews = MyColorWhite;
	var ColorTextDate = MyColorGray2;
/////////////// serach
	var MyColorTitleDivResultat = MyColorBlack;
////////////les buttonbar
	var ColorInputBar = MyColorTransparent;
//// les div
	var BackGroundColorHeadFoot = MyColorBiege;
	var BackGroundDivHeader = MyColorGray;
	var BackGroundDivHeaderOverlay = MyColorGray;
	var BackGroundColorFootDiv = MyColorBlack;
	var BackGroundColorNewsFile = MyColorBlack;
	var BackGroundColorDivFileProfilAndBannierGroup = MyColorWhite;
	var BackGroundColorInputSelect = MyColorTransparent;
	var ColorOverlayDiv = MyColorBlackOverlay2;
	var BackGroundColorPage = MyColorGray;
	var BackGroundColorDiv = MyColorGray;
	var ColorDisplayDiv = MyColorWhite;
	var InsideColorDiv = MyColorTransparent;
	var BackGroundColorCommentaire = MyColorGray;
	var BackGroundColorFormDon = MyColorGray;
// divFiles
var BackGroundColorDivFileSelect = MyColorRed;
var BackGroundColorDivFile = MyColorBlack;
// border
var ColorBorderDivDisplay = MyColorGray2;
var ColorBorderDivFile = MyColorGray;
//////////////// background anchor ////////////
	var BackGroundColorbouttonDon = MyColorBiege;
	var BackGroundColorAnchorAction = MyColorBiege;
	var BackGroundColorAnchorActionStand = MyColorTransparent;
	var BackGroundColorAnchorActionFootBar = MyColorWhite;
	var BackGroundColorAnchorActionOnglet = MyColorBiege;
///// les anchor racourcis
	var ColorAnchorWordDefault = MyColorBlack;
	var ColorAnchorHeaderNewPublication = MyColorBlack;
	var ColorAnchorShorCut = MyColorBlack;
	var ColorAnchorWordWiki = MyColorBlack;
	var ColorAnchorAction = MyColorBleu;
	var ColorAnchorActionConfirm = MyColorGreen;
	var ColorAnchorActionCancel = MyColorRed;
	var ColorAnchorActionMiniCancel = MyColorGray2;
	var ColorTextIconAnchor = MyColorGray;
/////// les anchor de la footbar
	var ColorFootBarAnchor = MyColorWhite;
	var ColorPlusAnchor = MyColorBlack;
	var ColorDonnateAnchore = MyColorBiege;
///// paragraphe
   var BackGroundColorParagraphe = MyColorTransparent;
//////// separator
 	var ColorSeparator = MyColorGray2;
///////emailError
	var ColorEmailText = MyColorBleu;
// blur div files
	var ColorDivSelectDelete = MyColorRed;
	//
	var MyColorSpamAddIn = MyColorGray2;
