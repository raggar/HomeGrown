function myFunction() {
    var input, ul, li, a, i, txtValue;
    input = document.getElementById("myInput").value.toUpperCase();
	
	if (input) {
		document.getElementById("myUL").style.display="block";
	} else {
		document.getElementById("myUL").style.display="none";
	}
	
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(input) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
