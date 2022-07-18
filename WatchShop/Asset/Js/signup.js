function signup()
{
    document.querySelector(".login-form-container").style.cssText = "display: none;";
    document.querySelector(".signup-form-container").style.cssText = "display: block;";
    document.querySelector(".container-form").style.cssText = "background: linear-gradient(to bottom, rgb(56, 189, 149),  rgb(28, 139, 106)); box-shadow: 2px 3px 3px rgb(56, 189, 149);";
    document.querySelector(".button-1").style.cssText = "display: none";
    document.querySelector(".button-2").style.cssText = "display: block";
    // document.querySelector(".container").style.cssText = "box-shadow: 2px 3px 3px rgb(56, 189, 149);"

};

function login()
{
    document.querySelector(".signup-form-container").style.cssText = "display: none;";
    document.querySelector(".login-form-container").style.cssText = "display: block;";
    document.querySelector(".container-form").style.cssText = "background: linear-gradient(to bottom, rgb(6, 108, 224),  rgb(14, 48, 122)); box-shadow: 2px 3px 3px rgb(6, 108, 224);";
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
        return false
    }
    else{
        userNameSU.style.cssText = "border: 2px solid green"
        return true
    }
}

function checkEmailSU(){
    if(emailSU.value == '' && emailSU.value.includes("@gamil.com") == false){
        emailSU.style.cssText = "border: 2px solid red"
        return false
    }
    else{
        emailSU.style.cssText = "border: 2px solid green"
        return true
    }
}

function checkPassSU(){
    if(passSU.value == ''){
        passSU.style.cssText = "border: 2px solid red"
        return false
    }
    else{
        passSU.style.cssText = "border: 2px solid green"
        return true
    }
}

function checkUserNameLI(){
    if(userNameLI.value == ''){
        userNameLI.style.cssText = "border: 2px solid red"
        return false
    }
    else{
        userNameLI.style.cssText = "border: 2px solid green"
        return true
    }
}

function checkPassLI(){
    if(passLI.value == ''){
        passLI.style.cssText = "border: 2px solid red"
        return false
    }
    else{
        passLI.style.cssText = "border: 2px solid green"
        return true
    }
}


userNameSU.addEventListener('blur', checkUserNameSU, true)
emailSU.addEventListener('blur', checkEmailSU, true)
passSU.addEventListener('blur', checkPassSU, true)

userNameLI.addEventListener('blur', checkUserNameLI, true)
passLI.addEventListener('blur', checkPassLI, true)

const signup_btn = document.getElementsByClassName("signup-button")[0]
signup_btn.addEventListener('click', function(event){
    if(checkEmailSU() == true && checkPassSU() == true && checkUserNameSU() == true){
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
    }
    else{
        window.alert("nhập vào đây đủ thông tin")
    }
})


const login_btn = document.getElementsByClassName("login-button")[0]
login_btn.addEventListener('click', function(event){
    if(checkPassLI() == true && checkUserNameLI() == true){
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
    }
    else{
        window.alert("nhập vào đầy đủ thông tin")
    }
})


let slideIdx = 0
showSlide();
function showSlide(){
    let i;
    let slides = document.getElementsByClassName("slide")
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    slideIdx++
    if(slideIdx > slides.length){
        slideIdx = 1
    }
    slides[slideIdx - 1].style.display = "block"
    setTimeout(showSlide, 2000)
}