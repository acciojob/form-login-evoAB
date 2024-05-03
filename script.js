function getFormvalue() {
	//Write your code here
    const form = document.getElementById("form1");
    // console.log(form.elements);
	let firstName = form.elements["fname"].value;
	let lastName = form.elements["lname"].value;

	alert(firstName+" "+lastName);
}
