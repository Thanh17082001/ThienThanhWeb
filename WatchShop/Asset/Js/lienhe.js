function show(storeId){
    if(storeId === "all"){
        const el = document.getElementsByClassName('store')
        for(i = 0; i < el.length; i++){
            el[i].classList.remove('hide')
        }
    }
    else{
        const elHide = document.getElementsByClassName('store')
        for(i = 0; i < elHide.length; i++){
            elHide[i].classList.add('hide')
        }
        const elShow = document.getElementsByClassName(storeId)
        for(i = 0; i < elShow.length; i++){
            elShow[i].classList.remove('hide')
        }
    }
}
function showtitle(storeId, storeArea){
    const title = document.getElementById("showroom-title")
    if(storeId == 'all'){
        title.innerText = "TẤT CẢ SHOWROOM "
    }
    if(storeId == 'insu'){
        title.innerText = "TRUNG TÂM BẢO HÀNH"
    }
    if(storeId != 'all' && storeId != 'insu'){
        var str = "HỆ THỐNG CỬA HÀNG TẠI " + storeArea
        title.innerText = str
    }
}
var buttonClick = document.getElementsByClassName('top-main-item')
for(i = 0; i < buttonClick.length; i++){
    const btn = buttonClick[i]
    btn.addEventListener('click', function(event){
        const btnClicked = event.target
        show(btnClicked.id)
        showtitle(btnClicked.id, btnClicked.innerText.toUpperCase())
        console.log(typeof(btnClicked.innerText))
        console.log(btnClicked.innerText)

    })
}