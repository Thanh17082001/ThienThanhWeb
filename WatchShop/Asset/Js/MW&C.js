var btnNext=document.getElementsByClassName("slideshow__next");
for(var i=0;i<btnNext.length;i++){
    btnNext[i].addEventListener("click",ClickNext);
}
var slidesIndex=1;
function ClickNext(e){
    
    var products=e.target.parentElement.parentElement;
    // console.log(products)
    var img=products.getElementsByClassName('item-img');
    // console.log(img)
    if(slidesIndex>=img.length){
        slidesIndex=0;
        // console.log(slidesIndex+'cong')
    }
    if(slidesIndex <0){
        slidesIndex=img.length;
        // console.log(slidesIndex+'hieu')
    }
    for(var i=0;i<img.length;i++){
        img[i].style.display='none'
    }
    img[slidesIndex].style.display='block'
    slidesIndex++;
}
//Button previour
var btnNext=document.getElementsByClassName("slideshow__previour");
for(var i=0;i<btnNext.length;i++){
    btnNext[i].addEventListener("click",ClickNext);
}


// add product from cart
function isProductInCart(item,Arrayproduct){
    var index=-1;
    for(var i=0;i<Arrayproduct.length;i++){
        
        if(Arrayproduct[i].id==item.id){
            index=i;
        }
    }
    return index;
}


var addBtns=document.getElementsByClassName("info__addCart");
for(var i=0;i<addBtns.length;i++){
    addBtns[i].addEventListener('click',addTocartCicked)
}
function addTocartCicked(e){
    var addBtn=e.target;
    var infoProduct=addBtn.parentElement.parentElement;
    var NewProduct={
        id:parseInt(infoProduct.getElementsByClassName('item-id')[0].innerText),
        name:infoProduct.getElementsByClassName('item-name')[0].innerText,
        price:infoProduct.getElementsByClassName('item-price')[0].innerText,
        img:infoProduct.getElementsByClassName('item-img')[0].src,
        quantity:1
    }
    var Arrayproduct=[];
    alert("San Pham "+NewProduct.name+" da duoc them vao")
    // chua co localStorage
        if(JSON.parse(window.localStorage.getItem('newItem')===null)){
            Arrayproduct.push(NewProduct);
            window.localStorage.setItem("newItem",JSON.stringify(Arrayproduct))
        }
    // da co localStorage
        else{
            // san pham chua ton tai
            Arrayproduct=JSON.parse(window.localStorage.getItem('newItem'));
            var index=isProductInCart(NewProduct,Arrayproduct);
            if(index<0){
                Arrayproduct.push(NewProduct);
                window.localStorage.setItem("newItem",JSON.stringify(Arrayproduct));
            }
            // san pham da ton tai
            else{
                Arrayproduct[index].quantity++
                window.localStorage.setItem("newItem",JSON.stringify(Arrayproduct));
            }
        }
}
// hien thi ben trang gio hang
function displaytoCart(){
    var Arrayproduct=[];
    var Arrayproduct=JSON.parse(window.localStorage.getItem('newItem'));
    var Body=document.querySelector('.cart__body')
    for(var i=0;i<Arrayproduct.length;i++){
        var cartBody=document.createElement("div")
        cartBody.classList.add("row");
        cartBody.classList.add("no-gutters");
        cartBody.classList.add("cart__info-body");
        var cartContent=`
            <p class="cart__body-id">${Arrayproduct[i].id}</p>
            <div class="col-lg-2 col-2 info-body__content"><img src="${Arrayproduct[i].img}" alt="" class="info-body__img"></div>
            <div class="col-lg-3 col-3 info-body__content"><p>${Arrayproduct[i].name}</p></div>
            <div class="col-lg-2 col-3 info-body__content"><span class="info-body__price">${Arrayproduct[i].price}</span></div>
            <div class="col-lg-2 col-3 info-body__content"><input class="info-body__count" type="number" value="${Arrayproduct[i].quantity}" onchange="quantityCart(this)"></input></div>
            <div class="col-lg-2 display-none info-body__content"><span class="info-body__subtotal">3500000</span></div>
            <div class="col-lg-1 col-1 info-body__content" onclick="deleteProduct(this)"><i class="fa-solid fa-trash-can info-body__delete"></i></div>
        `;
        cartBody.innerHTML=cartContent;
        Body.appendChild(cartBody)
    }
}
// thay doi so luong san pham
function quantityCart(e){
    var index;
    var cartBody=e.parentElement.parentElement;
    idProduct=cartBody.querySelector('.cart__body-id');
    var Arrayproduct=JSON.parse(window.localStorage.getItem('newItem'));
    for(var i=0;i<Arrayproduct.length;i++){
        if(idProduct.innerText==Arrayproduct[i].id)
        index=i;
    }
    Arrayproduct[index].quantity=e.value;
    window.localStorage.setItem("newItem",JSON.stringify(Arrayproduct));
    cartSubtotal()
    window.location.reload();
}
// tinh tong tien
function cartSubtotal(){
    var total=document.getElementsByClassName('info-body__subtotal');
    var price=document.getElementsByClassName('info-body__price');
    var quantity=document.getElementsByClassName('info-body__count');
    var cartBody=document.getElementsByClassName('cart__info-body');
    for(var i=0;i<cartBody.length;i++){
        total[i].innerText=Number(price[i].innerText.replace(/[^0-9]/g,""))*Number(quantity[i].value);
    }
    for (var j = 0; j < total.length; j++) {
        total[j].innerText = Number(total[j].innerText).toLocaleString('de-DE', { style: 'currency', currency: 'VND' })
    }
}
// xoa san pham ra khoi gio hang
function deleteProduct(e){
    var index=0;
    var cartBody=e.parentElement;
    var idProduct=cartBody.getElementsByClassName('cart__body-id')[0];
    console.log(idProduct)
    var Arrayproduct=JSON.parse(window.localStorage.getItem('newItem'));
    for(var i=0;i<Arrayproduct.length;i++){
        if(idProduct.innerText==Arrayproduct[i].id)
        
        index=i;
    }
    for(var j=index;j<Arrayproduct.length;j++){
        Arrayproduct[j]=Arrayproduct[j+1];
    }
    Arrayproduct.length--;
    window.localStorage.setItem("newItem",JSON.stringify(Arrayproduct));
    cartBody.remove();
    window.location.reload();

}
// tong phu
function totalBuy(){
    var temp=0;
    var total=document.getElementsByClassName('info-body__subtotal');
    var sumTotal=document.getElementsByClassName('subtotal__number')[0];
    for(var i=0;i<total.length;i++){
        temp+=Number(total[i].innerText.replace(/[^0-9]/g,""));
    }
    sumTotal.innerText=temp;
    sumTotal.innerText=Number(sumTotal.innerText).toLocaleString('de-DE', {style : 'currency' , currency: 'VND'})// chuyen menh gia tien VND
}
var pay=document.querySelector('.subtotal__btn');
    pay.addEventListener('click',function(){
    alert("Tiền buồi đòi mua");
})
