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
function removeInArrayByValue(array,objectSearch,valueSearch)
{
		var result = new Array();

				for(var i = 0; i < array.length; i++)
				{
					if(inArrayByKeysValue(array[i],objectSearch,valueSearch))
					{
						result.push(array[i]);
					}
				}

 	return result;
}
function inArrayByKeysValue(array,objectSearch,valueSearch)
{

	const arraykeys = Object.keys(array);
	for (var property in array)
	{
		if(typeof array[property] === 'array' || typeof array[property] === 'object')
		{
			return removeInArrayByValue(array[property]);
		}
		else if(arraykeys[property] === objectSearch && array[property] != valueSearch)
		{
			return true;
		}
		else
		{
			/// rien
		}
	}
	return false;
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
function convertObjectToArray(obj)
{
	const array = Object.entries(obj);
	return array;
}
function convertArrayToObject(array)
{
	const obj = Object.fromEntries(array);
	return obj;
}
