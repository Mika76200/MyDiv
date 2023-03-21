

class MyDeviceManager
{
  static isSmartPhone()
  {
  	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|QwantMobile/i.test(navigator.userAgent))
  	{
   		return true;
  	}
  	return false;
  }
  static isQwantMoble()
  {
    if(/QwantMobile/i.test(navigator.userAgent))
    {
      return true;
    }
    return false;
  }
  static getBrowser()
  {
    this.browser = navigator.appCodeName || "An unknown browser";
    return this.browser;
  }
  static getversion()
  {
    this.version = navigator.appVersion || "an unknown version";
    return this.version;
  }
  static getOS()
  {
    this.OS = navigator.platform || "an unknown OS";
    return this.OS;
  }
}
