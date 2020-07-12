import $ from "jquery";

// login modal manager
window.onload = function () {
	if (document.getElementById("login")) {
		document.getElementById("login").addEventListener("click", function () {
			document.getElementById("login-container").style.display = "flex";
		});
	}

	if (document.querySelector(".close")) {
		document.querySelector(".close").addEventListener("click", function () {
			$("#login-container").fadeOut();
		});
	}

	if (document.getElementById("login-container")) {
		document
			.getElementById("login-container")
			.addEventListener("click", function (e) {
				if (!document.querySelector(".modal-content").contains(e.target)) {
					// Clicked out of box
					$("#login-container").fadeOut();
				}
			});
	}
};
