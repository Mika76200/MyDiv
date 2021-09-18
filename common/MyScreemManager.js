

class MyScreemManager
{
/* pas utilisable
  static lock()
  {
    if(!this.isLock && MyDeviceManager.isSmartPhone())
    {
      screen.orientation.lock("natural");
      this.isLock = true;
    }
  }
  static unlock()
  {
    // Unlock orientation
    screen.orientation.unlock();
    MyScreemManager.deleteFullScreen();
  }*/
  static setFullScreen()
  {
    // Go into full screen first
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  }
  static deleteFullScreen()
  {
    // Exit full screen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
  static isSmallScreem()
  {
  		if(MyScreemManager.isScreemPortrait())
  		{
  			return true;
  		}
  		return false;
  }
  static isScreemPortrait()
  {
  	if(window.screen.orientation.type ==='portrait-primary' || window.screen.orientation.type ==='portrait-secondary')
  	{
  		return true;
  	}
  	return false;
  }
  static isScreemLandscape()
  {
  	if(window.screen.orientation.type ==='landscape-primary' || window.screen.orientation.type ==='landscape-secondary')
  	{
  		return true;
  	}
  	return false;
  }
  static getScreemOrientation()
  {
  	switch(window.screen.orientation.type)
  	{
  		case EnumOrientationScreem.PORTRAITPRIMARYSTRING:
  				return EnumOrientationScreem.PORTRAITPRIMARY;
  			break;
  	  case EnumOrientationScreem.PORTRAITSECONDARYSTRING:
  				return EnumOrientationScreem.PORTRAITSECONDARY;
  			break;
  		case EnumOrientationScreem.LANDSCAPEPRIMARYSTRING:
  				return EnumOrientationScreem.LANDSCAPEPRIMARY;
  			break;
  		case EnumOrientationScreem.LANDSCAPESECONDARYSTRING:
  				return EnumOrientationScreem.LANDSCAPESECONDARY;
  			break;
  	}
  }
}
