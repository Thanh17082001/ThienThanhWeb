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
            price:product.getElementsByClassName("info__price")[0].innerText,
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
                    // window.location.reload();
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
                <p class="cart__body-id">${AvailableProduct[i].id}</p>
                <div class="col l-3 m-4 c-4">
                <img src="${AvailableProduct[i].imgSr}" alt="" class="cart__img">
                </div>
                <div class="cart__body-name col l-3 m-2 c-2">
                    <p class="cart__body-text">${AvailableProduct[i].title}</p>
                </div>
                <div class="cart__body-name col l-2 m-2 c-2">
                    <p class="cart__price">${AvailableProduct[i].price}</p>
                </div>
                <div class="cart__body-name col l-2 m-2 c-2">
                    <input aria-label="quantity" class="cart__body-input "min="0" name ="cart__input"type="number" value="${AvailableProduct[i].quantityCart}" onchange="quantityCart(this)" >
                </div>
                <buttom onclick="deleteProduct(this)" class="cart__body-name col l-2 m-2 c-2">
                    <i class="fa-solid fa-trash-can cart__body-icon"></i>
                </buttom>
                `;
            cartRow.innerHTML=cartRowContent;
            cartBody.appendChild(cartRow);
        }
        
    }
// hien thi so luong tren cart
    function countProduct(){
        var AvailableProduct=[];
        AvailableProduct=JSON.parse(window.localStorage.getItem('CartItem'));
        var count=AvailableProduct.length;
        var CartCount=document.querySelector(".cart__count");
        CartCount.innerText=count;
    }

// hien thi tong tien
    function CartTotal(){
        var Total=document.querySelector('.cart__bot-total');
        var AvailableProduct=[];
        AvailableProduct=JSON.parse(window.localStorage.getItem('CartItem'));
        var SumPrice=0;
        for(var i=0;i<AvailableProduct.length;i++){
            
            SumPrice+=Number(AvailableProduct[i].price.replace(/[^0-9]/g,"")) * Number(AvailableProduct[i].quantityCart); //replace chuyen doi chuoi thanh so
        }
        Total.innerText=SumPrice;
        Total.innerText=Number(Total.innerText).toLocaleString('de-DE', {style : 'currency' , currency: 'VND'})// chuyen menh gia tien VND
    }
// xoa san pham ra khoi gio hang
    function deleteProduct(e){
        var cartRow=e.parentElement;
        var cartId=cartRow.getElementsByClassName('cart__body-id');
        var AvailableProduct=[];
        AvailableProduct=JSON.parse(window.localStorage.getItem('CartItem'));
        var index;
        for(var i=0;i<AvailableProduct.length;i++){
            if(cartId.innerText===AvailableProduct[i].id){
                index=i;
            }
        }
        for(var i=index;i<AvailableProduct.length;i++){
            AvailableProduct[i]=AvailableProduct[i+1];
        }
        AvailableProduct.length--;
        window.localStorage.setItem('CartItem',JSON.stringify(AvailableProduct))
        cartRow.remove();
        CartTotal();
    }
// thay doi  so luong
    function quantityCart(e){
        var cartRow=e.parentElement.parentElement;
        var cartId=cartRow.getElementsByClassName('cart__body-id')[0];
        var AvailableProduct=[];
        AvailableProduct=JSON.parse(window.localStorage.getItem('CartItem'));
        var index=0;
        for(var i=0;i<AvailableProduct.length;i++){
            if(cartId.innerText==AvailableProduct[i].id){
                index=i;
            }
        }
        AvailableProduct[index].quantityCart=e.value;
        window.localStorage.setItem('CartItem',JSON.stringify(AvailableProduct));
        CartTotal();
        window.location.reload();
    }

