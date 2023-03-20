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

	if(isExist(objetArray))
	{
		if(objetArray.length <= 0 || objetArray.length === undefined || objetArray === "")
		{
		   return true;
		}
	}
	return false;
}
function isExist(object)
{
		if(object != undefined)
		{
	  return true;
	}
	return false;
}
function isArray(object)
{
		if (typeof object === "array") {
	  return true;
	}
	return false;
}
function removeInArrayByValue(array,objectSearch)
{
	var filtered = array.filter(function(value, index, arr){
		 return value != objectSearch;
 });
 return filtered;
}
function inArray(array,objectSearch)
{
	if(!isExist(array) && !isExist(objectSearch))
	{
		console.error('error variable ');
		return false;
	}

	for (var property in array)
	{
		if(typeof array[property] ==='object' || typeof array[property] === 'array')
		{
			return inArray(array[property],objectSearch);
		}
		else if(array[property] === objectSearch)
		{
			return true;
		}
	}
	return false;
}
