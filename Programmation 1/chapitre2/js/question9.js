var username;
var password;

//Input
username = String(prompt("username:"));
password = String(prompt("password"));

//Check if correct
if (username === "admin" && password === "12345") {
    document.write("Bonjour " + username);
}
else {
    document.write("Votre nom d'utilisateur ou votre mot de passe est invalide.");
}