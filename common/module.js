
// math
function pourCent(pourCent,toNumber)
{
	if( isNaN(pourCent)){pourCent = parseInt(pourCent);}
	if( isNaN(toNumber)){toNumber = parseInt(toNumber);}

	return pourCent / 100 * toNumber;
}

// core
function isEmpty(objetArray)
{

	if(objetArray != undefined)
	{
		if(objetArray.length <= 0 || objetArray.length === undefined || objetArray === "")
		{
		   return true;
		}
		return false;
	}
	return true;

}
isExist(object)
{
	if(typeof object != "undefined")
	{
	  return true;
	}
	return false;
}
isArray(object)
{
		if (typeof object === "array") {
	  return true;
	}
	return false;
}
