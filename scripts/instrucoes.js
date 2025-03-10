const openPopup = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const closePopup = document.querySelector(".closePopup");

//Abrir o popup
openPopup.addEventListener("click", () => {
    popup.style.display = "flex";
});

//Fechar o popup ao clicar no botão X
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

//Fechar o popup ao clicar fora dele
popup.addEventListener("click", (e) => {
    if(e.target===popup) {
        popup.style.display = "none";
    }
});