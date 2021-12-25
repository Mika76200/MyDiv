class Connect
{
		static Connect(email,password,CALLBACK)
		{
				RequestManager.Connect(email,password,CALLBACK)
		}
		static logout()
		{
				RequestManager.disconnecting(()=>
				{
					Cookie.deleteCookie('user_id');
					Cookie.deleteCookie('user_email');
					Cookie.deleteCookie('user_password');
					Cookie.deleteCookie('token');
					Cookie.setCookie('auto_reconnect',false,365);
				});

		}
		static isConnect(callback)
		{
				RequestManager.isConnect(callback);
		}
		static reConnect(callback)
		{
				RequestManager.reConnect(callback);
		}
}
