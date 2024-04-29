async function getUsernameInfo(){
    document.getElementById("welcome-user").textContent = sessionStorage.getItem("givenUsername")
    document.getElementById("username-input").textContent = sessionStorage.getItem("givenUsername")
    document.getElementById("email-input").textContent = sessionStorage.getItem("givenEmail")
}

window.onload = ()=> getUsernameInfo()