

class MyDeviceManager
{
  static isSmartPhone()
  {
  	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
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
}
