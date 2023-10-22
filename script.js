let users = []
function sinup() {
    let nam = document.getElementById("name").value;
    let em = document.getElementById("Email").value;
    let pss = document.getElementById("pass").value;

    if (nam && em && pss) {
        users.push({
            name: nam,
            email: em,
            password: pss
        }
        )
        console.log(users)
        window.alert("User Registered Successfully")
        document.getElementById("name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("pass").value = "";
    }

    else {
        alert("Please provide complete info")
    }


}
function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("Pass").value;

    for (let i = 0; i < users.length; i++) {
        if (email == users[i].email && pass == users[i].password) {
            window.alert("Login Successfull")
        }
        else {
            window.alert("Invalid Email or password")
        }


    }

    document.getElementById("email").value = "";
    document.getElementById("Pass").value = "";
}