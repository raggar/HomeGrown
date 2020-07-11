import $ from 'jquery';

// login modal manager
window.onload=function(){
    document.getElementById('login').addEventListener("click", 
        function() {
            document.getElementById("login-container").style.display = "flex"; 
            $("#register-container").fadeOut();
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


    // register modal manager

    document.getElementById('register').addEventListener("click", 
        function() {
            document.getElementById("register-container").style.display = "flex"; 
            $("#login-container").fadeOut();
    });

    document.querySelector(".close").addEventListener("click", 
        function () {
            $("#register-container").fadeOut();
    });

    document.getElementById("register-container").addEventListener("click", 
        function (e) {
            if (!document.querySelector(".modal-content").contains(e.target)){
            // Clicked out of box
            $("#register-container").fadeOut();
        }
    });
}