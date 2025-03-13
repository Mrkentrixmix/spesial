onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", function () {
        let audio = document.getElementById("bg-music");
        audio.play().catch(error => console.log("Autoplay diblokir, user harus interaksi dulu."));
    });
    