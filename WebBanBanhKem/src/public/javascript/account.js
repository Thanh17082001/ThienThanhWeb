var inputEmail =$('.email__input');
var inputPass =$('.pass__input');
var inputFullname= $('.name__input');
var inputRytepyPass= $('.pass__input--retype')
var btnSubmitLogin= $('#btn__login');
var btnSubmitRegiter= $('#btn__register');
var checkEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// validation form
function errorMessage(element, message){
    const formGroup=element.parent();
    const messageElement=formGroup.children("span")
    formGroup.addClass('account__message-error');
    formGroup.removeClass('account__message-success');
    messageElement.text(message)
    
}
function sucessMessage(element){
    const formGroup=element.parent();
    formGroup.addClass("account__message-success")
    formGroup.removeClass("account__message-error")
}

inputEmail.blur(isEmail)
function isEmail(){
    const checkE=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputEmail.val() .length ==0){
        errorMessage(inputEmail,'Bạn hãy nhập email')
    }
    
    else if(!checkE.test(inputEmail.val())){
        errorMessage(inputEmail,'Email không hợp lệ')
    }
    else{
        sucessMessage(inputEmail)
    }
}

inputFullname.blur(isFullname)
function isFullname(){
    if(inputFullname.val().length==0){
        errorMessage(inputFullname,'Bạn hãy nhập Tên của bạn')
    }
    else{
        sucessMessage(inputFullname)
    }
}

inputPass.blur(isPass)
function isPass(){
    if(inputPass.val().length==0){
        errorMessage(inputPass,'Bạn hãy nhập mật khẩu')
    }
    else if(inputPass.val().length < 8){
        errorMessage(inputPass,'Độ dài mật khẩu là 8 ký tự')

    }
    else{
        sucessMessage(inputPass)
    }
    
}

inputRytepyPass.blur(isMatchPass)
function isMatchPass(){
    if(inputRytepyPass.val().length == 0){
        errorMessage(inputRytepyPass,'Bạn cần nhập lại mật khẩu')
    }
    else if(inputRytepyPass.val() !== inputPass.val()){
        errorMessage(inputRytepyPass,'Mật khẩu không trùng khớp')
    }
    else{
        sucessMessage(inputRytepyPass)
    }
}

btnSubmitLogin.click(submitLogin);
function submitLogin(e){
    var isvalid=1;
    isEmail($(inputEmail[1]));
    isPass();
    const formgroups=$('.login__form div');
    formgroups.each(function( index ) {
        if($(this).hasClass('account__message-error')){
            isvalid=0;
        }
        false;
    });
    if(isvalid){
        
    }else{
        e.preventDefault();
    }
}

btnSubmitRegiter.click(submitRegister);
function submitRegister(e){
    var isvalid=1;
    isEmail($(inputEmail[1]));
    isPass();
    isMatchPass();
    isFullname();
    const formgroups=$('.register__form div');
    formgroups.each(function( index ) {
        if($(this).hasClass('account__message-error')){
            isvalid=0;
        }
        false;
    });
    if(isvalid){
        
    }else{
        e.preventDefault();
    }
}
