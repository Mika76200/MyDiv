
// math
function pourCent(pourCent,toNumber)
{
	if( isNaN(pourCent)){pourCent = parseInt(pourCent);}
	if( isNaN(toNumber)){toNumber = parseInt(toNumber);}

	return pourCent / 100 * toNumber;
}
