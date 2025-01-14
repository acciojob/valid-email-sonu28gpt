function validEmail(str) {
  //your JS code here.
	let pat=/^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/;
	return pat.test(str);
	
} 

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
