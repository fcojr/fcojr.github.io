var enviar = document.querySelector("#enviar");
enviar.addEventListener("click", function(event){
    event.preventDefault();
    alert("Message not sent, please contact by e-mail or phone.");
    document.getElementById("form").reset();
});