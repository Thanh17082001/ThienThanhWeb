var price=document.querySelectorAll('.info__price')
for (var i = 0; i < price.length; i++) {
    price[i].innerText = Number(price[i].innerText).toLocaleString('de-DE', { style: 'currency', currency: 'VND' })
}
// {{!-- confirm add product --}}
var orderBtn=document.getElementsByClassName('info_btn')
let text="Bạn muốn thêm sản phẩm vào giỏ hàng"
for(let i=0; i<orderBtn.length;i++){
     orderBtn[i].addEventListener('click',function(){
        let test=orderBtn[i].parentElement
        var id=test.querySelector('#id').innerText
        var href="../cart/?id="+id
        if(confirm(text)){
            orderBtn[i].setAttribute('href',href)
        }
        
    })
}