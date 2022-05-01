// kiem tra co san pham trong cart chua
    function isProductInCart(item,Arrayproduct){
        var index=-1;
        for(var i=0;i<Arrayproduct.length;i++){
            
            if(Arrayproduct[i].id==item.id){
                index=i;
            }
        }
        return index;
    }

// add product to LocalStorage 
    var addToCartbtn=document.getElementsByClassName("product__btn");
    for(var i=0;i<addToCartbtn.length;i++){
        var btnAdd=addToCartbtn[i];
        btnAdd.addEventListener("click",addToCartClicked)
    }

    function addToCartClicked(e){
        var btnAdd=e.target;
        var product=btnAdd.parentElement.parentElement.parentElement;
        var AvailableProduct=[];
        var NewProduct={
            id: parseInt(product.getElementsByClassName("info__id")[0].innerText),
            title: product.getElementsByClassName("info__name")[0].innerText,
            price: product.getElementsByClassName("info__price")[0].innerText,
            imgSr: product.getElementsByClassName("product__img")[0].src,
            quantityCart: 1
        }
        // thong bao da them san pham
        alert("Da them san pham: "+NewProduct.title);

        //chưa có storage 
        if(JSON.parse(window.localStorage.getItem('CartItem'))===null){
            AvailableProduct.push(NewProduct);
            window.localStorage.setItem("CartItem",JSON.stringify(AvailableProduct));
            //window.location.reload(); // load trang
        }
        // Storage da co
        else{
            AvailableProduct=JSON.parse(window.localStorage.getItem('CartItem'));
            //sản phẩm thêm vào đã có trong cart
            index=isProductInCart(NewProduct,AvailableProduct)
                if(index>=0){
                    AvailableProduct[index].quantityCart++;
                    window.localStorage.setItem('CartItem',JSON.stringify(AvailableProduct));
                }
            //sản phẩm thêm vào chua có trong cart
                else{
                    AvailableProduct.push(NewProduct);
                    window.localStorage.setItem('CartItem',JSON.stringify(AvailableProduct));
                }
            
        }
    }

    // lấy sản phẩm từ localstorage ra hiện lên màn hình
    function addProductToCart(){
        var AvailableProduct=[];
        AvailableProduct=JSON.parse(window.localStorage.getItem('CartItem'));
        for(var i=0;i<AvailableProduct.length;i++){
            var cartRow= document.createElement("div");
            var cartBody=document.querySelectorAll(".cart__body")[0];
            cartRow.classList.add("row");
            var cartRowContent=`
                <div class="col l-2">
                <img src="${AvailableProduct[i].imgSr}" alt="" class="cart__img">
                </div>
                <div class="cart__body-name col l-2">
                    <p class="cart__body-text">${AvailableProduct[i].title}</p>
                </div>
                <div class="cart__body-name col l-2">
                    <p class="cart__price">${AvailableProduct[i].price}</p>
                </div>
                <div class="cart__body-name col l-2">
                    <input aria-label="quantity" class="cart__body-input "min="0" name ="cart__input"type="number" value="${AvailableProduct[i].quantityCart}" >
                </div>
                <div class="cart__body-name col l-2">
                    <p class="cart__totall">500.000đ</p>
                </div>
                <div class="cart__body-name col l-2">
                    <i class="fa-solid fa-trash-can cart__body-icon"></i>
                </div>
                `;
            cartRow.innerHTML=cartRowContent;
            cartBody.append(cartRow);
            var BtnRemove=IconCartRemove[i];
        }
        
    }

// xoa san pham khoi cart
    var IconCartRemove=document.getElementsByClassName("cart__body-icon");
    for(var i=0;i<IconCartRemove.length;i++){
        var BtnRemove=IconCartRemove[i];
        BtnRemove.addEventListener("click",removeCartItem)
    }

    function removeCartItem(e){
        var btnClicked=e.target;
        btnClicked.parentElement.parentElement.remove();
        updateCartTotall();
    }

// cập nhật lại số lượng 
    var quanttyInput=document.getElementsByClassName("cart__body-input")
    for(var i=0;i<quanttyInput.length;i++){
        var input=quanttyInput[i];
        input.addEventListener("change",quantityChanged(input,i))
    }
    function quantityChanged(e,index){
        var AvailableProduct=[];
        AvailableProduct=JSON.parse(window.localStorage.getItem('CartItem'))
        var input=e.target;
        //AvailableProduct[index].quantityCart++;
        console.log(i);
    }
      
    function updateCartTotall() {
        var cartItemContainer=document.getElementsByClassName("cart__body")[0];
        var cartRows=cartItemContainer.getElementsByClassName("row");
        for(var i=0;i<cartRows.length;i++){
            var cartRow=cartRows[i];
            var cartPrice=cartRow.getElementsByClassName("cart__price")[0];
            var cartQuantity=cartRow.getElementsByClassName("cart__body-input")[0];
            var price=parseFloat(cartPrice.innerText.replace("đ",""))*1000;
            var quantity=cartQuantity.value;
            var total=price*quantity;
            var carttotal=cartRow.getElementsByClassName("cart__totall")[0];
            carttotal.innerText=total;
        }
        
    }


    




