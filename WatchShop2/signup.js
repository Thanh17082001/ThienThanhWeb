function signup()
{
    document.querySelector(".login-form-container").style.cssText = "display: none;";
    document.querySelector(".signup-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, rgb(56, 189, 149),  rgb(28, 139, 106));";
    document.querySelector(".button-1").style.cssText = "display: none";
    document.querySelector(".button-2").style.cssText = "display: block";

};

function login()
{
    document.querySelector(".signup-form-container").style.cssText = "display: none;";
    document.querySelector(".login-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, rgb(6, 108, 224),  rgb(14, 48, 122));";
    document.querySelector(".button-2").style.cssText = "display: none";
    document.querySelector(".button-1").style.cssText = "display: block";

}

const userNameSU = document.getElementsByClassName("signup")[0]
const emailSU = document.getElementsByClassName("signup")[1]
const passSU = document.getElementsByClassName("signup")[2]

const userNameLI = document.getElementsByClassName("login")[0]
const passLI = document.getElementsByClassName("login")[1]

function checkUserNameSU(){
    if(userNameSU.value == ''){
        userNameSU.style.cssText = "border: 2px solid red;"
    }
    else{
        userNameSU.style.cssText = "border: 2px solid green"
    }
}

function checkEmailSU(){
    if(emailSU.value == '' && emailSU.value.includes("@gamil.com") == false){
        emailSU.style.cssText = "border: 2px solid red"
    }
    else{
        emailSU.style.cssText = "border: 2px solid green"
    }
}

function checkPassSU(){
    if(passSU.value == ''){
        passSU.style.cssText = "border: 2px solid red"
    }
    else{
        passSU.style.cssText = "border: 2px solid green"
    }
}

function checkUserNameLI(){
    if(userNameLI.value == ''){
        userNameLI.style.cssText = "border: 2px solid red"
    }
    else{
        userNameLI.style.cssText = "border: 2px solid green"
    }
}

function checkPassLI(){
    if(passLI.value == ''){
        passLI.style.cssText = "border: 2px solid red"
    }
    else{
        passLI.style.cssText = "border: 2px solid green"
    }
}


userNameSU.addEventListener('blur', checkUserNameSU, true)
emailSU.addEventListener('blur', checkEmailSU, true)
passSU.addEventListener('blur', checkPassSU, true)

userNameLI.addEventListener('blur', checkUserNameLI, true)
passLI.addEventListener('blur', checkPassLI, true)

const signup_btn = document.getElementsByClassName("signup-button")[0]
signup_btn.addEventListener('click', function(event){
    var accArray = []
    var accInfor = {
        userName: userNameSU.value,
        email: emailSU.value,
        pass: passSU.value
    }
    accArray.push(accInfor)
    const accInfors = JSON.parse(localStorage.getItem('acc'))
    if(accInfors == null){
        localStorage.setItem('acc', JSON.stringify(accArray))
        window.alert("tài khoản đã được thêm")

    }
    else{
        if(accInfors.length > 0){
            var temp = accArray.concat(accInfors)
            localStorage.setItem('acc', JSON.stringify(temp))
            window.alert("tài khoản đã được thêm")
        }
    }
})


const login_btn = document.getElementsByClassName("login-button")[0]
login_btn.addEventListener('click', function(event){
    var accReLogin = { 
        userName: userNameLI.value,
        pass: passLI.value
    }
    var flat = 0;
    const accInfors = JSON.parse(localStorage.getItem('acc'))
    for(i = 0; i < accInfors.length; i++){
        if(accReLogin.userName === accInfors[i].userName && accReLogin.pass === accInfors[i].pass){
            flat = 1
            break
        }
    }
    if(flat){
        window.alert("Dang nhap thanh cong")
    }
    else{
        window.alert("sai username hoac mat khau")
    }
})