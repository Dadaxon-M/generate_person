
// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')
//loader
const loaderTogge = (toggle) =>{
    if (toggle){
        overlay.classList.remove('hidden')
    }
    else{
        overlay.classList.add('hidden')
    }
}


function getData(resourse){
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange',()=>{
            console.log(request)
            if(request.readyState<4){
                loaderTogge(true)
            }
            else if (request.readyState == 4 && request.status == 200){
                const data = JSON.parse(request.responseText)
                loaderTogge(false)
                resolve(data)
            }
            else if (request.readyState == 4){
                loaderTogge(false)
                reject('Error')
            }
    })
    request.open('GET',resourse)
    request.send()
    })
}
const reload = () =>{
    getData(API)
    .then((data)=>{
        // console.log(data)
        updateUI(data.results)
    })
    .catch((data)=>{
        // console.log(data)
    })
}
document.addEventListener('DOMContentLoaded',reload)