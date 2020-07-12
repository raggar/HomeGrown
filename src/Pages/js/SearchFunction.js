window.onload = function() {
	if (document.getElementById("search-input")) {
        document.getElementById("search-input").addEventListener("keyup", function () {
            var input, filter, ul, li, a, i, txtValue;

            input = document.getElementById("search-input");
            filter = input.value.toUpperCase();

            if (filter.length > 0) {
                console.log(filter.length);
                document.getElementById("ul-content").style.display="block";
            } 
            else if (filter.length == 0){
                document.getElementById("ul-content").style.display="none";
            }

            ul = document.getElementById("ul-content");
                li = ul.getElementsByTagName("li");
                // console.log(filter);
                for (i = 0; i < li.length; i++) {
                    a = li[i].getElementsByTagName("a")[0];
                    txtValue = a.textContent || a.innerText;
                    // console.log(txtValue);
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        li[i].style.display = "block";
                    } else {
                        li[i].style.display = "none";
                    }
                }
            
        
		});
	}
}
