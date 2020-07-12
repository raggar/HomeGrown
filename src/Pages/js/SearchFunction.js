export function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("search-input");
    ul = document.getElementById("ul-content");
    li = ul.getElementsByTagName("li");
	
	if (input) {
        filter = input.value.toUpperCase();
		document.getElementById("ul-content").style.display="block";
	} else {
		document.getElementById("ul-content").style.display="none";
	}
	
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
