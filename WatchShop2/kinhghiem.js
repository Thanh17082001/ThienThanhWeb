const totalNum = 252;
const fontDot = document.getElementsByClassName("font-dot")[0]
const backDot = document.getElementsByClassName("back-dot")[0]
const next = document.getElementsByClassName("next")[0]
const pre = document.getElementsByClassName("pre")[0]

function showPageNum(idx){
    fontDot.hidden = false;
    backDot.hidden = false;
    const curent = document.getElementsByClassName("curent")[0]
    const pageNum = document.getElementsByClassName("page-num")
    pageNum[0].textContent = idx - 2
    pageNum[1].textContent = idx - 1
    pageNum[2].textContent = idx
    pageNum[3].textContent = idx + 1
    pageNum[4].textContent = idx + 2
    pageNum[2].classList.add("curent")
}
next.addEventListener('click', function(){
    const pageNum = document.getElementsByClassName("page-num")
    const curentNumPage = document.getElementsByClassName("curent-page")[0];
    const curent = document.getElementsByClassName("curent")[0]
    curent.classList.remove("curent")
    var idx = parseInt(curent.textContent)
    if(idx >= 5){
        showPageNum(idx + 1)
        curentNumPage.textContent = idx + 1
    }
    else{
        pageNum[idx].classList.add("curent")
        const pre = document.getElementsByClassName("pre")[0]
        curentNumPage.textContent = idx + 1
        pre.hidden = false
    }
    console.log(idx)
    
})


pre.addEventListener('click', function(){
    const pageNum = document.getElementsByClassName("page-num")
    const curentNumPage = document.getElementsByClassName("curent-page")[0];
    const curent = document.getElementsByClassName("curent")[0]
    curent.classList.remove("curent")
    let idx = parseInt(curent.textContent)
    if(idx >= 5){
        idx = idx - 1
        pageNum[0].textContent = idx - 2
        pageNum[1].textContent = idx - 1
        pageNum[2].textContent = idx
        pageNum[3].textContent = idx + 1
        pageNum[4].textContent = idx + 2
        pageNum[2].classList.add("curent")
        curentNumPage.textContent = idx 

    }
    else{
        pageNum[0].textContent = 1
        pageNum[1].textContent = 2
        pageNum[2].textContent = 3
        pageNum[3].textContent = 4
        pageNum[4].textContent = 5
        pageNum[idx - 2].classList.add("curent")
        const pre = document.getElementsByClassName("pre")[0]
        curentNumPage.textContent = idx - 1
        pre.hidden = false
    }
    console.log(idx)
})

const pageNum = document.getElementsByClassName("page-num")
for(i = 0; i < pageNum.length; i++){
    pageNum[i].addEventListener('click', function(event){
        var numPageSelect = event.target
        const curentNumPage = document.getElementsByClassName("curent-page")[0];
        const curent = document.getElementsByClassName("curent")[0]
        var num = parseInt(numPageSelect.textContent)
        if(num < 5){
            curent.classList.remove("curent")
            numPageSelect.classList.add("curent")
            const curentNumPage = document.getElementsByClassName("curent-page")[0];
            curentNumPage.textContent = num
            const pre = document.getElementsByClassName("pre")[0]
            pre.hidden = false
        }
        else{
            const pageNumber = document.getElementsByClassName("page-num")
            pageNumber[0].textContent = num - 2
            pageNumber[1].textContent = num - 1
            pageNumber[2].textContent = num
            pageNumber[3].textContent = num + 1
            pageNumber[4].textContent = num + 2
            const curent = document.getElementsByClassName("curent")[0]
            curent.classList.remove("curent")
            pageNumber[2].classList.add("curent")
            const curentNumPage = document.getElementsByClassName("curent-page")[0];
            curentNumPage.textContent = num
            const pre = document.getElementsByClassName("pre")[0]
            pre.hidden = false
        }
    })
}