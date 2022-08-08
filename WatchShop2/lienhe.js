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
const buttonClick = document.getElementsByClassName('top-main-item')
for(i = 0; i < buttonClick.length; i++){
    var btn = buttonClick[i]
    btn.addEventListener('click', function(event){
        var btnClicked = event.target
        show(btnClicked.id)
        console.log(typeof(btnClicked.id))
    })
}