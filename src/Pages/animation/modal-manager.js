import $ from 'jquery';

// login modal manager
window.onload=function(){
    document.getElementById('login').addEventListener("click", 
        function() {
            document.getElementById("login-container").style.display = "flex"; 
    });

    document.querySelector(".close").addEventListener("click", 
        function () {
            $("#login-container").fadeOut();
    });

    document.getElementById("login-container").addEventListener("click", 
        function (e) {
            if (!document.querySelector(".modal-content").contains(e.target)){
            // Clicked out of box
            $("#login-container").fadeOut();
        }
    });


   
}