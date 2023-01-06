var btnsQuanlity=document.querySelectorAll('.changequanlity');
for(var i=0;i<btnsQuanlity.length;i++){
    btnsQuanlity[i].addEventListener('click',changeQuanlity);
}

function changeQuanlity(e){
    var btnQuanlity=e.target;
    var id=btnQuanlity.parentElement.parentElement.querySelector('.id').innerText;
    valueQuanlity=parseInt(valueQuanlity);
    var valueQuanlity= btnQuanlity.parentElement.parentElement.querySelector('.quantity');
    console.log(btnQuanlity.value === '-')
    if(btnQuanlity.value === '-' ){
        valueQuanlity.value --;
    }else{
        valueQuanlity.value ++;
    }
    var href='/update/?id=' + id + '&quantity=' + valueQuanlity.value;
    btnQuanlity.parentElement.setAttribute('href',href);
}


var btnOrder=document.querySelector('.btn__order');
var form = document.querySelector('.form__order');
var id = document.querySelectorAll('.id');
var infoName=form.querySelector('#name_kh');
var infoPhone=form.querySelector('#phonenumber');
var infoAddress=form.querySelector('#address');
btnOrder.addEventListener('click',function(){
    if(id[0]){
       if(infoName.value && infoPhone.value && infoAddress.value){
            form.submit()
       }else{
        alert('Nhap thong tin mua hang');
        form.preventDefault();
       }
    }else{
       alert('Chua co san pham trong gio hang');
       form.preventDefault();
    }
});



