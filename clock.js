//Our function to create the clock
function Time()
{
	//Create a new date variable
	var date=new Date();
	//Create variables for minute, second, and hour
	var hours=date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();
	var milli=date.getMilliseconds();
	//Call addZero to prepend zeros if needed
	minutes=addZero(minutes);
	seconds=addZero(seconds);
	//Print the time to an html element
	document.getElementById('clock').innerHTML=hours+":"+minutes+":"+seconds+":"+milli;
	//Set the functions interval to repeat
	clock=setTimeout(function(){Time()},500);
}

//Our function to prepend zeros to our mins/seconds
function addZero(digit)
{
	//If the number passed is 9 or less
	if (digit<=9)
	  {
		//Add a zero in front of it
		digit="0" + digit;
	  }
	//Then return it to where it was called
	return digit;
}
