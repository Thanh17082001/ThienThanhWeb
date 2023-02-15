var btnAddCart= document.querySelectorAll('.add-to-cart');
var text="bạn muốn thêm sản phẩm vào giỏ hàng";
console.log(btnAddCart)
for(var i=0 ;i<btnAddCart.length; i++){
    btnAddCart[i].addEventListener("click",function(e){
        id=e.target.parentElement.querySelector('#id').innerText;
        var href='/storage/?id='+id
        if(confirm(text)){
            e.target.setAttribute('href',href);
        }
    });
}