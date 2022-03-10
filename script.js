let k = 0
let counter = document.querySelector('.counter')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
console.dir(counter)
function counterPlus(){
        console.log('PLUS')
        k++
        minus.disabled = false
        counter.innerHTML = k
}
function counterMinus(){
        console.log('MINUS')
        k--
        if(k<=0) k = 0
        minus.disabled = !Boolean(k)
        counter.innerHTML = k
}
plus.addEventListener('click',counterPlus)
minus.addEventListener('click',counterMinus)