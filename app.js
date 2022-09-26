

const ligt=document.getElementById("ligth-black")
const des=document.getElementById("des")



const hanburger=document.getElementById("hanburger")




hanburger.addEventListener('click',see)



function see(){

    ligt.classList.toggle("active")
    des.classList.toggle("abrir")
}