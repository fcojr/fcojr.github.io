var enviar = document.querySelector("#enviar");
enviar.addEventListener("click", function(event){
    event.preventDefault();
    alert("Message not sent, please contact by e-mail or phone.");
    document.querySelector("#name").value="";
    document.querySelector("#email").value="";
    document.querySelector("#textarea").value="";
});
