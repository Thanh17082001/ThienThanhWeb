
var total =document.querySelector('#price')
var prices= document.querySelectorAll('.info__price')
var totalPrice=0;
if(prices){
    for(let i=0;i<prices.length;i++){
        totalPrice+=Number(prices[i].innerText.replace(/[^0-9]/g,""));
    }
    total.innerText=totalPrice;
}else{
    total.innerText=totalPrice;
}
for (var i = 0; i < prices.length; i++) {
    prices[i].innerText = Number(prices[i].innerText).toLocaleString('de-DE', { style: 'currency', currency: 'VND' })
}
    total.innerText = Number(total.innerText).toLocaleString('de-DE', { style: 'currency', currency: 'VND' })

    var btnOder=document.querySelector('.btn__pay')
    var phoneInput=document.querySelector('.cart__phone')
    var addressInput=document.querySelector('.cart__address')
    var formInfo=document.querySelector('#infoUSer')
    var isCarts=document.querySelectorAll('#id')
    btnOder.addEventListener('click',function(e){
    if(isCarts[0]){
        if(phoneInput.value && addressInput.value){
            for(let i=0;i<isCarts.length;i++){
                var input=document.createElement('input');
                input.setAttribute('name','id')
                input.setAttribute('value',isCarts[i].innerText)
                input.setAttribute('hidden','true')
                formInfo.appendChild(input)
            }
        }else{
            alert("Nhập số điện thoại và đại chỉ")
            document.querySelector('#infoUSer').preventDefault()
        }
        document.querySelector('#infoUSer').submit()
    }else{
        alert("Chưa có sản phẩm trong giỏ hàng")
        document.querySelector('#infoUSer').preventDefault()
    }
    })

    // {{!-- confirm delete product --}}
var deleteBtn=document.getElementsByClassName('body__delete')
let text="Hành động này sẽ xóa sản phẩm khỏi giỏ hàng"
var test1=deleteBtn[0].parentElement.parentElement.querySelector('#id').innerText
for(let i=0; i<deleteBtn.length;i++){
        deleteBtn[i].addEventListener('click',function(){
        let id=deleteBtn[i].parentElement.parentElement.querySelector('#id').innerText
        var href="../cart/delete/"+id
        if(confirm(text)){
            deleteBtn[i].setAttribute('href',href)
        }
    })
}

// {{!-- change quanlity cart --}}

var btnQuanlity =document.querySelectorAll('.quanlity__change');
for(var i=0;i<btnQuanlity.length;i++){
    btnQuanlity[i].addEventListener('click',function(e){
        quanlity=e.target.parentElement.querySelector('.body__quantity')
        if(e.target.value=='-'){
            quanlity.value --
        }else{
            quanlity.value ++
        }
        id=e.target.parentElement.querySelector('#id2')
        href='../cart/update/?id='+id.innerText+'&quanlity='+quanlity.value
        e.target.parentElement.setAttribute('href',href)
    })
}