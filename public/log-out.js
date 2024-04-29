function logOut() {
    sessionStorage.removeItem("givenUsername")
    sessionStorage.removeItem("givenEmail")
    window.location = "/home"
}