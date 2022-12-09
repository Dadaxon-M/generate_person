const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')
const modeLocal = localStorage.getItem('mode')
if (modeLocal){
    body.classList.add('dark-mode')
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
}

function almash(){
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
}
darkBtn.addEventListener('click',()=>{
    almash()
    localStorage.setItem('mode','dark-mode')
})
lightBtn.addEventListener('click',()=>{
    almash()
    localStorage.setItem('mode','')
})