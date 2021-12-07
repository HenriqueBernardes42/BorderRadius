const upLeft = document.getElementById("up-left")
const upRight = document.getElementById("up-right")
const downLeft = document.getElementById("down-left")
const downRight = document.getElementById("down-right")

function envia(){
    document.getElementById("lemon").style.borderRadius = 
    `${upLeft.value}% ${upRight.value}% ${downLeft.value}% ${downRight.value}%`    

    document.getElementById("board").innerHTML =
     `border radius :${upLeft.value}px ${upRight.value}px ${downLeft.value}px ${downRight.value}px` 
}




 