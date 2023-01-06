var price=document.querySelectorAll('.price')
    for (var i = 0; i < price.length; i++) {
        price[i].innerText = Number(price[i].innerText).toLocaleString('de-DE', { style: 'currency', currency: 'VND' })
    }

    //  {{!-- confirm delete product --}}
    var deleteBtn=document.querySelectorAll('#delete-product')
    let text="Hành động này sẽ xóa sản phẩm "
    for(let i=0; i<deleteBtn.length;i++){
         deleteBtn[i].addEventListener('click',function(){
            let id=deleteBtn[i].parentElement.parentElement.querySelector('#id').innerText
            var href="./delete/?id="+id
            if(confirm(text)){
                deleteBtn[i].setAttribute('href',href)
            }
        })
    }