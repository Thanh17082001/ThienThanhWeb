var sale=document.getElementById('sale')
var btnPrevious1=sale.querySelector('.product__previous');
var btnNext1=sale.querySelector('.product__next');
btnNext1.addEventListener('click',function(){
    const productsNew=sale.querySelector('.new__product');
    productsNew.scrollLeft +=285
})
btnPrevious1.addEventListener('click',function(){
    const productsNew=sale.querySelector('.new__product');
    productsNew.scrollLeft -=285
})

var news=document.getElementById('new');
var btnPrevious2=news.querySelector('.product__previous');
var btnNext2=news.querySelector('.product__next');
btnNext2.addEventListener('click',function(){
    const productsNew=news.querySelector('.new__product');
    productsNew.scrollLeft +=285
})
btnPrevious2.addEventListener('click',function(){
    const productsNew=news.querySelector('.new__product');
    productsNew.scrollLeft -=285
})

// var price=document.querySelectorAll('.info__price')
// for (var i = 0; i < price.length; i++) {
//     price[i].innerText = Number(price[i].innerText).toLocaleString('de-DE', { style: 'currency', currency: 'VND' })
// }