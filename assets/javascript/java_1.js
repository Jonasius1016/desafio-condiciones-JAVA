let img = document.querySelector("img")
let borde_activo = false;

img.addEventListener("click", () => {
    if (borde_activo == false){
        document.querySelector("img").style.border = "solid 2px red"
        borde_activo = true
    } else {
        document.querySelector("img").style.border = ""
        borde_activo = false
    }
})