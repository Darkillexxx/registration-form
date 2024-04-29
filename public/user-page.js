async function redirectUser(event){
    event.preventDefault()

    const username = document.querySelector("#username-input").value
    const email = document.querySelector("#email-input").value

    sessionStorage.setItem("givenUsername", username)
    sessionStorage.setItem("givenEmail", email)

    window.location = "/info"
}