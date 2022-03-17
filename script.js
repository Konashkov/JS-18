let k = 0
let counter = document.querySelector('.counter')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let reset = document.querySelector('.reset')
let consoleText = document.querySelector('.consoleText')
console.dir(counter)
function counterPlus(){
        k++
        minus.disabled = false
        reset.disabled = false
        counter.innerHTML = k
}
function counterMinus(){
        k--
        if(k<=0) k = 0
        minus.disabled = !Boolean(k)
        reset.disabled = !Boolean(k)
        counter.innerHTML = k
}
function counterReset(){
        k = 0 
        minus.disabled = true
        reset.disabled = true
        counter.innerHTML = k
}
plus.addEventListener('click',counterPlus)
minus.addEventListener('click',counterMinus)
reset.addEventListener('click', counterReset)