// enahced object literals
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser("Gio", 32, "CO", 1));